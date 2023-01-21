import { ErrorContent } from '../../common/error/ErrorContent'
import { getUser } from '../../model/states'
import { List } from './components/List'
import { mainStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Main.module.css'
import { useAtom } from '@reatom/npm-react'
import { Avatar, IconButton } from '@mui/material'

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

  return <div className={styles.main}>
    {content}
  </div>
  // return <div className={styles.container}>
  //   <div className={styles.content}>
  //     <div className={styles.leftContent}>
  //       <IconButton sx={{ p: 2 }} className={styles.iconButton}>
  //         <Avatar className={styles.icon} alt={user !== null ? user.firstName : ''} src="/static/images/avatar/2.jpg" />
  //       </IconButton>
  //       <p className={styles.userInfo}>
  //         {user !== null ? user.firstName : ''}
  //       </p>
  //       <p className={styles.userInfo}>
  //         {user !== null ? user.login : ''}
  //       </p>
  //       <div className={styles.createEvent}>
  //         <a href='/createEvent' className={styles.createEventLink} > ������� ����� ����������� </a>
  //       </div>
  //     </div>
  //     <div className={styles.rightContent}>
  //       <div className={ styles.infoTop}>
  //         <div className={styles.info}>
  //           <p>���������� &#x1f497; �����������</p>
  //           <p>{countOfFavoritesEvents}</p>
  //         </div>
  //         <div className={styles.info}>
  //           <p>���������� ���������� ����������</p>
  //           <p>{countOfVisitedEvents}</p>
  //         </div>
  //       </div>
  //       <div className={styles.infoBottom}>
  //         <div className={styles.info}>
  //           <p>���������� ��������� ����������</p>
  //           <p>{countOfCreatedEvents}</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export {
  Main
}
