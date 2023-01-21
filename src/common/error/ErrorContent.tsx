import Typography from '@mui/material/Typography'
import styles from './ErrorContent.module.css'

function ErrorContent() {
  return <div className={styles.main}>
    <Typography variant="h6" gutterBottom>
          Не удалось загрузить
    </Typography>
    <Typography variant="body1" gutterBottom>
          Пожалуйста, повторите попытку позже
    </Typography>
  </div>
}

export {
  ErrorContent
}
