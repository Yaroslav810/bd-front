import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import { getEvents } from '../../api/events'
import { useEffect, useState } from 'react'

interface ItemProps {
  event: any
}

function Item(props: ItemProps) {
  return <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      {props.event.title}
    </CardActionArea>
  </Card>
}

function Main() {
  const [events, setEvents] = useState<any[] | null>([])
  useEffect(() => {
    getEvents()
      .then(data => setEvents(data))
      .catch(() => setEvents(null))
  }, [])

  return <div>
    {
      (events !== null)
        ? events.map(event => (
          <Item key={event.id} event={event}/>
        ))
        : <p>Не удалось загрузить</p>
    }
  </div>
}

export {
  Main
}
