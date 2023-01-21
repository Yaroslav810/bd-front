import { Avatar, IconButton } from '@mui/material'
import styles from './Main.module.css'
import { user } from '../../common/sidebar/Sidebar'
//import { useCreateEventRoute } from '../../routes/createEventRoute/createEventRoute'

//const createEvent = useCreateEventRoute()


//TODO: добавить автоматическое подгружение количества "лайкнутых" мероприятий
const countOfFavoritesEvents = 0;
//TODO: добавить автоматическое подгружение количества посещенных мероприятий(тех, где чел перещел по ссылке "записаться")
const countOfVisitedEvents = 0;
//TODO: добавить автоматическое подгружение количества созданных мероприятий
const countOfCreatedEvents = 0;
function Main() {
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <IconButton sx={{ p: 2 }} className={styles.iconButton}>
                    <Avatar className={styles.icon} alt={user.name} src="/static/images/avatar/2.jpg" />
                </IconButton>
                <p className={styles.userInfo}>
                    {user.name}
                </p>
                <p className={styles.userInfo}>
                    {user.login}
                </p>
                <div className={styles.createEvent}>
                    <a href='/createEvent' className={styles.createEventLink} > Создать новое мероприятие </a>
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={ styles.infoTop}>
                    <div className={styles.info}>
                        <p>Количество &#x1f497; мероприятий</p>
                        <p>{countOfFavoritesEvents}</p>
                    </div>
                    <div className={styles.info}>
                        <p>Количество посещенных меропрятий</p>
                        <p>{countOfVisitedEvents}</p>
                    </div>
                </div>
                <div className={styles.infoBottom}>
                    <div className={styles.info}>
                        <p>Количество созданных меропрятий</p>
                        <p>{countOfCreatedEvents}</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
}

export {
  Main
}
