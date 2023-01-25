import { Button } from '../../components/button/Button'
import EntryField from '../../components/entryField/EntryField'
import styles from './Login.module.css'
import { useRegistrationRoute } from '../../routes/registrationRoute/registrationRoute'
import { useCallback, useState } from 'react'
import { authentication } from '../../api/user/user'
import { Alert, Button as ButtonMui, Snackbar } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'

function LoginContent() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const registration = useRegistrationRoute()

  const onAuthentication = useCallback(() => {
    if (login.trim() === '') {
      setError('Пустой логин')
      return
    }
    void authentication(login.trim(), password.trim())
      .then(data => {
        if (!data) {
          setError('Неправильный логин или пароль')
        }
      })
  }, [login, password])

  return <div className={styles.content}>
    <h4 className={styles.text}>
      <span className={styles.welcome}>w</span>
      <span className={styles.welcome}>e</span>
      <span className={styles.welcome}>l</span>
      <span className={styles.welcome}>c</span>
      <span className={styles.welcome}>o</span>
      <span className={styles.welcome}>m</span>
      <span className={styles.welcome}>e</span>
    </h4>
    <p className={styles.signature}>Логин</p>
    <EntryField id="login" className={styles.enter} onInput={setLogin} />
    <p className={styles.signature}>Пароль</p>
    <EntryField id="password" className={styles.enter} type={'password'} onInput={setPassword} />
    {error && <div className={styles.error}>{error}</div>}
    <div className={styles.btns}>
      <Button
        className={styles.btn}
        onClick={() => registration.goTo()}
      >
        <p>Зарегистрироваться</p>
      </Button>
      <Button
        className={styles.btn}
        onClick={onAuthentication}
      >
        <p>Войти</p>
      </Button>
    </div>

    {error && <Snackbar
      open={!!error}
      autoHideDuration={6000}
      onClose={() => setError(null)}
    >
      <Alert
        severity="error"
        sx={{ width: '100%' }}
        variant='filled'
      >
        {error}
      </Alert>
    </Snackbar>}
  </div>
}

function Login() {
  const main = useMainRoute()

  return <div className={styles.page}>
    <div className={styles.backButton}>
      <ButtonMui variant="text" startIcon={<ArrowBackIosIcon />} onClick={() => main.goTo()}>На главную</ButtonMui>
    </div>
    <LoginContent />
  </div>
}

export {
  Login
}
