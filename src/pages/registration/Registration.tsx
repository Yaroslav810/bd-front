import styles from './Registration.module.css'
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Button } from '../../components/button/Button'
import { useLoginRoute } from '../../routes/loginRoute/loginRoute'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { useCallback, useState } from 'react'
import { Dayjs } from 'dayjs'

function RegistrationContent() {
  const loginRoute = useLoginRoute()
  const [login, setLogin] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthdayDay, setBirthdayDay] = useState<Dayjs | null>(null)
  const [password, setPassword] = useState('')
  const [type, setType] = useState('user')

  const onRegistration = useCallback(() => {
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
        id="login"
        className={styles.field}
        value={login}
        onChange={e => setLogin(e.currentTarget.value)}
        label="Логин"
        variant="standard"
        color="success"
      />
      <TextField
        id="firstName"
        className={styles.field}
        label="Имя"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
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
        id="password"
        className={styles.field}
        type={'password'}
        label="Пароль"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
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
