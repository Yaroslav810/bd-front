import { CircularProgress } from '@mui/material'
import styles from './Logout.module.css'

function Logout() {
  return (
    <div className={styles.content}>
      <p className={styles.text}>Происходит выход из приложения... Возвращайтесь!</p>
      <p>&#128532;</p>
      <CircularProgress color="success" className={styles.preloader} />
    </div>
  )
}

export {
  Logout
}
