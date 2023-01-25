import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, ImageListItem } from '@mui/material'
import { blue } from '@mui/material/colors'
import { Event } from '../model/types'
import PersonIcon from '@mui/icons-material/Person'
import styles from './List.module.css'
import Typography from '@mui/material/Typography'
import { useEventRoute } from '../../../routes/eventRoute/eventRoute'
import { getImage } from '../../../api/utils'
import { Like } from '../../../components/like/Like'

interface ItemProps {
  event: Event
}

function Item(props: ItemProps) {
  const route = useEventRoute()

  return <Card
    onClick={() => route.goTo(props.event.id)}
    variant="outlined"
    className={styles.card}
  >
    <CardActionArea>
      <CardContent className={styles.content}>
        <div>
          <Typography gutterBottom variant="h5" component="div">
            {props.event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {props.event.description}
          </Typography>
        </div>
        {props.event.image &&
          <ImageListItem sx={{ width: 370 }} className={styles.image}><img src={getImage(props.event.image)} alt="image"/></ImageListItem>}
      </CardContent>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500], width: 24, height: 24 }} aria-label="avatar">
            <PersonIcon sx={{ width: 18, height: 18 }}/>
          </Avatar>
        }
        title={props.event.userName}
        action={
          <CardActions className={styles.like}>
            <Like id={props.event.id} isLikeSet={props.event.isLikeSet} />
          </CardActions>
        }
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

export {
  List
}
