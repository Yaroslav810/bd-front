import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from '../main/components/List'
import { profileStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from '../main/Main.module.css'
import { useAtom } from '@reatom/npm-react'

function Profile() {
  const [data] = useAtom(profileStates.events)
  const [isLoading] = useAtom(profileStates.loaded)

  let content
  if (isLoading > 0) {
    content = <Preloader />
  } else {
    content = (data != null)
      ? <List events={data} />
      : <ErrorContent />
  }

  return <div className={styles.main}>
    {content}
  </div>
}

export {
  Profile
}
