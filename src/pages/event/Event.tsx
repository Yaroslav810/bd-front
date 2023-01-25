import { Avatar, Button, Card, CardContent, CardHeader, Chip, ImageListItem, Tooltip, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { blue } from '@mui/material/colors'
import { Event as EventType } from './model/types'
import PersonIcon from '@mui/icons-material/Person'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Event.module.css'
import { useBack } from '../../routes/useBack'
import { useEvents } from './useEvents'
import { useParams } from 'react-router'
import { getImage } from '../../api/utils'

interface ContentProps {
  event: EventType
}

function Content(props: ContentProps) {
  const start = new Date(props.event.start)
  const timer = () => {
    let delta = props.event.duration / 1000
    const days = Math.floor(delta / 86400)
    delta -= days * 86400
    const hours = Math.floor(delta / 3600) % 24
    delta -= hours * 3600
    const minutes = Math.floor(delta / 60) % 60
    let result = ''
    days && (result += `${days} д. `)
    hours && (result += `${hours} ч. `)
    minutes && (result += `${minutes} мин. `)
    return result
  }

  return <div className={styles.container}>
    <div>
      {props.event.tags.map(tag => <Chip key={tag} label={tag} />)}
    </div>
    <div className={styles.content}>
      <Card
        variant="outlined"
        className={styles.card}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }} aria-label="recipe">
              <PersonIcon sx={{ width: 18, height: 18 }} />
            </Avatar>
          }
          title={props.event.userName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={styles.title}>
            <Tooltip title={props.event.title}><span>{props.event.title}</span></Tooltip>
          </Typography>
        </CardContent>
      </Card>
      {props.event.image && <ImageListItem sx={{ width: 600 }} className={styles.image}><img src={getImage(props.event.image)} alt="image" /></ImageListItem>}
    </div>
    {props.event.description && <Card variant="outlined" className={styles.info}>
      <CardContent className={styles.infoContent}>
        <Typography variant="body2" color="text.secondary">
          {props.event.description}
        </Typography>
      </CardContent>
    </Card>}
    <Card
      variant="outlined"
      className={styles.info}
    >
      <CardContent className={styles.infoContent}>
        <div className={styles.row}>
          <Typography variant="h6" gutterBottom className={styles.rowLabel}>
            Начало мероприятия:
          </Typography>
          {start.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          {' '}
          {start.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' })}
        </div>
        <div className={styles.row}>
          <Typography variant="h6" gutterBottom className={styles.rowLabel}>
            Продолжительность:
          </Typography>
          {props.event.duration ? timer() : 'Нет информации'}
        </div>
        <div className={styles.row}>
          <Typography variant="h6" gutterBottom className={styles.rowLabel}>
            Цена:
          </Typography>
          {props.event.price === undefined ? 'Нет информации' : props.event.price ? `${props.event.price} ₽` : 'Бесплатно'}
        </div>
        <div className={styles.row}>
          <Typography variant="h6" gutterBottom className={styles.rowLabel}>
            Максимальное количество участников:
          </Typography>
          {props.event.participantsCount}
        </div>
      </CardContent>
    </Card>
  </div>
}

interface ErrorContentProps {
  onClick: () => void
}

function ErrorContent(props: ErrorContentProps) {
  return <div>
    <p>Не удалось загрузить</p>
    <button onClick={props.onClick}>Повторить</button>
  </div>
}

function Event() {
  const back = useBack()
  const params = useParams()
  const {
    event,
    loaded,
    loadData
  } = useEvents(params.id as string)

  return <div>
    <div className={styles.button}>
      <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={back}>Назад</Button>
    </div>
    {!loaded && <div className={styles.preloader}><Preloader /></div>}
    {loaded && event !== null && <Content event={event} />}
    {loaded && event === null && <ErrorContent onClick={loadData}/>}
  </div>
}

export {
  Event
}
