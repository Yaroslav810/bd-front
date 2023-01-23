import { Avatar, Button, Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { blue } from '@mui/material/colors'
import { Event as EventType } from './model/types'
import PersonIcon from '@mui/icons-material/Person'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Event.module.css'
import { useBack } from '../../routes/useBack'
import { useEventRoute } from '../../routes/eventRoute/eventRoute'
import { useEvents } from './useEvents'
import { useParams } from 'react-router'

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

  return <div>
    <div>
      <Button variant="text" startIcon={<ArrowBackIosIcon />} onClick={back}>Назад</Button>
    </div>
    {!loaded && <Preloader />}
    {loaded && event !== null && <Content event={event} />}
    {loaded && event === null && <ErrorContent onClick={loadData}/>}
  </div>
}

export {
  Event
}