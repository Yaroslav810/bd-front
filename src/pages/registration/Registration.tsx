import styles from './Registration.module.css'
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Button } from '../../components/button/Button'
import { useLoginRoute } from '../../routes/loginRoute/loginRoute'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { useCallback, useState } from 'react'
import { Dayjs } from 'dayjs'
import { MIN_LOGIN, MIN_NAME, MIN_PASSWORD } from '../../model/utils'

function RegistrationContent() {
  const loginRoute = useLoginRoute()
  const [login, setLogin] = useState('')
  const [loginError, setLoginError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdayDay, setBirthdayDay] = useState<Dayjs | null>(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [type, setType] = useState('user')

  const onRegistration = useCallback(() => {
    const loginImpl = login.trim()
    const firstNameImpl = firstName.trim()
    if (loginImpl.length < MIN_LOGIN) {
      setLoginError(`Нужен корректный логин! Не пустой! А символов больше ${MIN_LOGIN}`)
    }
    if (firstNameImpl.length < MIN_NAME) {
      setFirstNameError(`Необходимо корректное имя! Не пустое! А символов больше ${MIN_NAME}`)
    }
    if (password.length < MIN_PASSWORD) {
      setPasswordError(`Взломают за 5 секунд! Нужно минимум ${MIN_PASSWORD} символа`)
    }
    console.log(login)
    console.log(firstName)
    console.log(lastName)
    console.log(birthdayDay)
    console.log(password)
    console.log(type)
  }, [login, firstName, lastName, birthdayDay, type])

  return <div className={styles.content}>
    <Typography variant="h4" gutterBottom>Регистрация</Typography>

    <div className={styles.fields}>
      <TextField
        error={!!loginError}
        id="login"
        className={styles.field}
        label="Логин"
        value={login}
        onChange={e => setLogin(e.currentTarget.value)}
        onClick={() => setLoginError('')}
        helperText={loginError}
        variant="standard"
        color="success"
      />
      <TextField
        error={!!firstNameError}
        id="firstName"
        className={styles.field}
        label="Имя"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        onClick={() => setFirstNameError('')}
        helperText={firstNameError}
        variant="standard"
        color="success" />
      <TextField
        id="lastName"
        className={styles.field}
        label="Фамилия"
        value={lastName}
        onChange={e => setLastName(e.currentTarget.value)}
        variant="standard"
        color="success" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Дата рождения"
          inputFormat="DD/MM/YYYY"
          value={birthdayDay}
          onChange={setBirthdayDay}
          renderInput={(params) => <TextField {...params} className={styles.field} variant="standard" color="success" />}
        />
      </LocalizationProvider>
      <TextField
        error={!!passwordError}
        id="password"
        className={styles.field}
        type={'password'}
        label="Пароль"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
        onClick={() => setPasswordError('')}
        helperText={passwordError}
        variant="standard"
        color="success" />
      <FormControl className={styles.field} variant="standard" color="success">
        <InputLabel id="userType">Я регистрируюсь как </InputLabel>
        <Select
          labelId="user-type-select-label"
          id="user-type-select-label"
          value={type}
          label="Я регистрируюсь как "
          onChange={e => setType(e.target.value)}
        >
          <MenuItem value={'user'}>Пользователь</MenuItem>
          <MenuItem value={'company'}>Компания</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div className={styles.btns}>
      <Button
        className={styles.btn}
        onClick={() => loginRoute.goTo()}
      >
        <p>У меня есть аккаунт</p>
      </Button>
      <Button
        className={styles.btn}
        onClick={onRegistration}
      >
        <p>Зарегистрироваться</p>
      </Button>
    </div>
  </div>
}

function Registration() {
  return <div className={styles.page}>
    <RegistrationContent />
  </div>
}

export {
  Registration
}
