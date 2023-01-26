import {
  Alert,
  AlertTitle,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip, IconButton,
  ImageListItem, Menu, MenuItem,
  Tooltip,
  Typography
} from '@mui/material'
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
import { Like } from '../../components/like/Like'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useState, MouseEvent, useCallback } from 'react'
import { removeEvent, signOut, signUp } from '../../api/events/events'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'
import { useEditEventRoute } from '../../routes/editEventRoute/editEventRoute'
import { getUser } from '../../model/states'

interface ContentProps {
  event: EventType
}

function Content(props: ContentProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [msg, setMsg] = useState('')
  const mainRoute = useMainRoute()
  const editEvent = useEditEventRoute()
  const user = getUser()
  const [sign, setSign] = useState(props.event.isUserSignUp)

  const onDeleteEvent = useCallback(() => {
    handleClose()
    void removeEvent(props.event.id)
      .then(() => {
        setMsg('Мероприятие удалено!')
        setTimeout(mainRoute.goTo, 3000)
      })
  }, [])

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
    minutes && (result += `${minutes} мин.`)
    return result
  }

  if (msg.length) {
    return <Alert severity="success" className={styles.alert}>
      <AlertTitle>Успешно!</AlertTitle>
      {msg}
    </Alert>
  }

  const onSignUp = useCallback(() => {
    setSign(true)
    signUp(props.event.id)
      .catch(() => {
        setSign(false)
      })
  }, [])

  const onSignOut = useCallback(() => {
    setSign(false)
    signOut(props.event.id)
      .catch(() => {
        setSign(true)
      })
  }, [])

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
          action={
            <CardActions>
              <IconButton>
                {user
                  ? sign
                    ? <span className={styles.link} onClick={onSignOut}>Отписаться</span>
                    : <span className={styles.link} onClick={onSignUp}>Записаться</span>
                  : undefined
                }
              </IconButton>
              <IconButton>
                <Like id={props.event.id} isLikeSet={props.event.isLikeSet} />
              </IconButton>
              {(props.event.isCanEdit || props.event.isCanDelete) && <>
                <IconButton
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon/>
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button'
                  }}
                >
                  <MenuItem onClick={() => editEvent.goTo(props.event.id)} className={styles.menuItem}><EditIcon className={styles.editIcon} />Редактировать</MenuItem>
                  <MenuItem onClick={onDeleteEvent} className={styles.menuItem}><DeleteOutlineIcon color={'error'} />Удалить</MenuItem>
                </Menu>
              </>}
            </CardActions>}
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
            Количество участников:
          </Typography>
          {props.event.signUpCount}{' / '}{props.event.participantsCount}
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
