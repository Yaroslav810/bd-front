import { useEvents } from './useEvents'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Event.module.css'
import { useEventRoute } from '../../routes/eventRoute/eventRoute'
import Card from '@mui/material/Card'
import { Button, CardActionArea, CardContent, CardHeader } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { blue } from '@mui/material/colors'
import PersonIcon from '@mui/icons-material/Person'
import { Event as EventType } from './model/types'
import { useParams } from 'react-router'
import { useBack } from '../../routes/useBack'

interface ContentProps {
  event: EventType
}

function Content(props: ContentProps) {
  const route = useEventRoute()

  return <Card
    onClick={() => route.goTo(props.event.id)}
    variant="outlined"
    sx={{ maxWidth: 345 }}
    className={styles.card}
  >
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.event.description}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }} aria-label="recipe">
            <PersonIcon sx={{ width: 18, height: 18 }} />
          </Avatar>
        }
        title={props.event.userName}
      />
    </CardActionArea>
  </Card>
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

  return <div className={styles.main}>
    <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={back}>Назад</Button>
    {!loaded && <Preloader/>}
    {
      (event !== null)
        ? <Content event={event}/>
        : <ErrorContent onClick={loadData}/>
    }
  </div>
}

export {
  Event
}
