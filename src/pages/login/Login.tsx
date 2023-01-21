import { CircularProgress } from '@mui/material'
import EntryField from '../../components/entryField/EntryField'
import { Button } from '../../components/button/Button'
import styles from './Login.module.css'

function Login() {
    return <div className={styles.content}>
        <h4>
            <span className={styles.welcome}>w</span>
            <span className={styles.welcome}>e</span>
            <span className={styles.welcome}>l</span>
            <span className={styles.welcome}>c</span>
            <span className={styles.welcome}>o</span>
            <span className={styles.welcome}>m</span>
            <span className={styles.welcome}>e</span>
        </h4>
        <p className={styles.signature}>Login</p>
        <EntryField id="login" className={styles.enter} />
        <p className={styles.signature}>Password</p>
        <EntryField id="password" className={styles.enter}/>
        <div className={styles.btns}>
            <Button
                className={styles.btn}
                onClick={() => console.log('Hi')}
            >
                <p>Registration</p>
            </Button>
            <Button
                className={styles.btn}
                onClick={() => console.log('Hello')}
            >
                <p>Login</p>
            </Button>
        </div>
        
    </div>
}

export {
    Login
}