import Card from '@mui/material/Card'
import { CardActionArea, CardContent, CardHeader } from '@mui/material'
import { Preloader } from '../../common/preloader/Preloader'
import { Event } from './model/types'
import { useEvents } from './useEvents'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { blue } from '@mui/material/colors'
import PersonIcon from '@mui/icons-material/Person'
import styles from './Main.module.css'

interface ItemProps {
  event: Event
}

function Item(props: ItemProps) {
  return <Card onClick={() => alert(props.event.id)} variant="outlined" sx={{ maxWidth: 345 }} className={styles.card}>
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

interface ListProps {
  events: Event[]
}

function List(props: ListProps) {
  return <div className={styles.list}>
    {props.events.map(event => (
      <Item key={event.id} event={event}/>
    ))}
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

function Main() {
  const {
    events,
    loaded,
    loadData
  } = useEvents()

  return <div className={styles.main}>
    {!loaded && <Preloader/>}
    {
      (events != null)
        ? <List events={events}/>
        : <ErrorContent onClick={loadData}/>
    }
  </div>
}

export {
  Main
}
