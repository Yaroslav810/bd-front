import { Alert, Button, Chip, ImageListItem, Snackbar } from '@mui/material'
import { FormEvent, useRef, useState } from 'react'
import styles from './EditEvent.module.css'
import { updateEvent } from '../../api/events/events'
import { MAX_LINKS, MAX_TAGS, MILLISECONDS_PER_OFFSET, PARTICIPANTS, PRICE } from '../../model/utils'
import dayjs, { Dayjs } from 'dayjs'
import { useParams } from 'react-router'
import { useEvents } from '../event/useEvents'
import { Preloader } from '../../common/preloader/Preloader'
import { Event as EventType } from './../event/model/types'
import { useEventRoute } from '../../routes/eventRoute/eventRoute'

interface EditEventContentProps {
  event: EventType
}

function EditEventContent({ event }: EditEventContentProps) {
  const [title, setTitle] = useState(event.title)
  const [description, setDescription] = useState(event.description)
  const [file, setFile] = useState<File | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [price, setPrice] = useState<number>(event.price ?? 0)
  const [maxParticipantsCount, setMaxParticipantsCount] = useState<number>(event.participantsCount)
  const [tags, setTags] = useState<string[]>(event.tags)
  const [links, setLinks] = useState<string[]>(event.links)
  const [start, setStart] = useState<Dayjs>(dayjs(event.start).add(MILLISECONDS_PER_OFFSET))
  const [end, setEnd] = useState<Dayjs>(dayjs(event.start).add(MILLISECONDS_PER_OFFSET).add(event.duration))
  const [error, setError] = useState<string | null>(null)
  const fileIField = useRef<HTMLInputElement>(null)
  const eventRoute = useEventRoute()

  function onSave() {
    if (!title) {
      setError('Невалидное название')
      return
    }
    if (price < PRICE.MIN || price > PRICE.MAX) {
      setError('Введите цену мероприятия! Если оно бесплатное, укажите 0')
      return
    }
    if (maxParticipantsCount < PARTICIPANTS.MIN || maxParticipantsCount > PARTICIPANTS.MAX) {
      setError(`Введите количество участников! Вы можете указать от ${PARTICIPANTS.MIN} до ${PARTICIPANTS.MAX}`)
    }
    if (start.millisecond() > end.millisecond()) {
      setError('Некорректные даты!')
    }
    updateEvent({
      id: event.id,
      title,
      description: description ?? undefined,
      start: start.add(-10800000).toDate(),
      duration: end.diff(start),
      price,
      participantsCount: maxParticipantsCount,
      image: file ?? undefined,
      links,
      tags
    })
      .then(e => {
        console.log(e)
        eventRoute.goTo(event.id)
      })
      .catch(() => setError('Не удалось сохранить'))
  }

  function onLoadImage() {
    if (fileIField.current !== null) {
      if (image === null) {
        fileIField.current.click()
      } else {
        setImage(null)
        setFile(null)
        fileIField.current.value = ''
      }
    }
  }

  function onChangeImage(event: FormEvent<HTMLInputElement>) {
    if (event.currentTarget.files === null || event.currentTarget.files.length === 0) {
      return
    }

    const file: File = event.currentTarget.files[0]
    const promise = new Promise(resolve => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
    })
    setFile(file)

    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    void promise.then(data => setImage(data ? data.toString() : ''))
  }

  function onAddChip(event: FormEvent<HTMLInputElement>) {
    const tag = event.currentTarget.value
    if (!tag || tags.includes(tag) || tags.length >= MAX_TAGS) {
      return
    }
    setTags([
      ...tags,
      tag
    ])
    event.currentTarget.value = ''
  }

  function onDeleteChip(tag: string) {
    setTags(tags.filter(t => t !== tag))
  }

  function onAddLink(event: FormEvent<HTMLInputElement>) {
    const link = event.currentTarget.value
    if (!link || links.includes(link) || links.length >= MAX_LINKS || !isValidHttpUrl(link)) {
      return
    }
    setLinks([
      ...links,
      link
    ])
    event.currentTarget.value = ''
  }

  function onDeleteLink(link: string) {
    setLinks(links.filter(l => l !== link))
  }

  function isValidHttpUrl(link: string) {
    let url
    try {
      url = new URL(link)
    } catch (_) {
      setError('Невалидная ссылка')
      return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
  }

  return <div className={styles.container}>
    <div className={styles.btnSave}>
      <Button
        variant="contained"
        size="large"
        onClick={onSave}
      >
        Сохранить
      </Button>
    </div>

    <div className={styles.btnDownload}>
      {image === null
        ? <Button onClick={onLoadImage}>Загрузить изображение</Button>
        : <Button onClick={onLoadImage}>Удалить изображение</Button>}
      <input ref={fileIField} type="file" className={styles.downloadField} onChange={onChangeImage} />
      {image && <ImageListItem sx={{ width: 600, height: 300 }} className={styles.imageItem}><img src={image} alt="image" /></ImageListItem>}
    </div>

    <div className={styles.content}>
      <div className={styles.rightContent}>
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Название"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Описание"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input
            type="text"
            placeholder="Ссылка на чат/сообщество"
            onKeyDown={e => e.keyCode === 13 && onAddLink(e)}
            disabled={links.length >= MAX_LINKS}
          />
          <div className={styles.links}>
            {links.map(link => (<Chip
              key={link}
              label={link}
              variant="outlined"
              onDelete={() => onDeleteLink(link)}
            />))}
          </div>
        </div>
      </div>
      <div className={styles.leftContent}>
        <div className={styles.form}>
          <div className={styles.time}>
            <p className={styles.label}>Старт события:</p>
            <input
              type="datetime-local"
              id="localDateBefore"
              name="date"
              value={start.toISOString().slice(0, 16)}
              onChange={e => setStart(dayjs(e.currentTarget.value).add(10800000))}
            />
          </div>
          <div className={styles.time}>
            <p className={styles.label}>Окончание события:</p>
            <input
              type="datetime-local"
              id="localDateAfter"
              name="date"
              value={end.toISOString().slice(0, 16)}
              onChange={e => setEnd(dayjs(e.currentTarget.value).add(10800000))}/>
          </div>
          <div>
            <p className={styles.label}>Цена:</p>
            <input
              type="number"
              placeholder="Цена"
              max={PRICE.MAX}
              min={PRICE.MIN}
              value={price}
              onChange={e => setPrice(Math.min(PRICE.MAX, Math.max(PRICE.MIN, parseInt(e.target.value) || 0)))}
            />
          </div>
          <div>
            <p className={styles.label}>Сколько человек могу записаться:</p>
            <input
              type="number"
              placeholder="Сколько человек могу записаться"
              max={PARTICIPANTS.MAX}
              min={PARTICIPANTS.MIN}
              value={maxParticipantsCount}
              onChange={e => setMaxParticipantsCount(Math.min(PRICE.MAX, Math.max(PRICE.MIN, parseInt(e.target.value) || 1)))}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Теги"
              onKeyDown={e => e.keyCode === 13 && onAddChip(e)}
              disabled={tags.length >= MAX_TAGS}
            />
            <div className={styles.tags}>
              {tags.map(tag => (<Chip
                key={tag}
                label={tag}
                variant="outlined"
                onDelete={() => onDeleteChip(tag)}
              />))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {error && <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={() => setError(null)}
    >
      <Alert
        severity="error"
        sx={{ width: '100%' }}
        variant='filled'
      >
        {error}
      </Alert>
    </Snackbar>}
  </div>
}

function EditEvent() {
  const params = useParams()
  const {
    event,
    loaded
  } = useEvents(params.id as string)

  return <div>
    {!loaded && <div className={styles.preloader}><Preloader /></div>}
    {loaded && event !== null && <EditEventContent event={event} />}
  </div>
}

export {
  EditEvent
}
