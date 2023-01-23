import { ErrorContent } from '../../common/error/ErrorContent'
import { getUser } from '../../model/states'
import { List } from './components/List'
import { mainStates } from './model/states'
import { Avatar, IconButton } from '@mui/material'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Main.module.css'
import { useAtom } from '@reatom/npm-react'

// TODO: �������� �������������� ����������� ���������� "���������" �����������
const countOfFavoritesEvents = 0
// TODO: �������� �������������� ����������� ���������� ���������� �����������(���, ��� ��� ������� �� ������ "����������")
const countOfVisitedEvents = 0
// TODO: �������� �������������� ����������� ���������� ��������� �����������
const countOfCreatedEvents = 0

function Main() {
  const [data] = useAtom(mainStates.events)
  const [isLoading] = useAtom(mainStates.loaded)

  const user = getUser()

  let content
  if (isLoading > 0) {
    content = <Preloader />
  } else {
    content = (data != null)
      ? <List events={data}/>
      : <ErrorContent />
  }

  /*return <div className={styles.main}>
    {content}
  </div>*/
    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.leftContent}>
                <IconButton sx={{ p: 2 }} className={styles.iconButton}>
                    <Avatar className={styles.icon} src="/static/images/avatar/2.jpg" />
                </IconButton>
                <p className={styles.userInfo}>
                    User
                </p>
                <p className={styles.userInfo}>
                    User
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
        {content}
    </div>
    
}

export {
  Main
}
