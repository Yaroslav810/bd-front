import { Alert, Button, Chip, ImageListItem, Snackbar } from '@mui/material'
import { FormEvent, useRef, useState } from 'react'
import styles from './CreateEvent.module.css'

// TODO: ���������� input �� Input, � ��������� �������� placeholder
// ���������� enteredTitle � ��
// ��������� ���� ���� �� �������

const MAX_TAGS = 10
const MAX_LINKS = 3
const PRICE = {
  MIN: 0,
  MAX: 100000
}
const PARTICIPANTS = {
  MIN: 1,
  MAX: 300
}

function CreateEvent() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [price, setPrice] = useState<number>(0)
  const [maxParticipantsCount, setMaxParticipantsCount] = useState<number>(1)
  const [tags, setTags] = useState<string[]>([])
  const [links, setLinks] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const fileIField = useRef<HTMLInputElement>(null)

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
  }

  function onLoadImage() {
    if (fileIField.current !== null) {
      if (image === null) {
        fileIField.current.click()
      } else {
        setImage(null)
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
            <input type="datetime-local" id="localDateBefore" name="date" />
          </div>
          <div className={styles.time}>
            <p className={styles.label}>Окончание события:</p>
            <input type="datetime-local" id="localDateAfter" name="date" />
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

export {
  CreateEvent
}
