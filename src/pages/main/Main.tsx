import { Preloader } from '../../common/preloader/Preloader'
import styles from './Main.module.css'
import { useAtom } from '@reatom/npm-react'
import { mainStates } from './model/states'
import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from './components/List'

function Main() {
  const [data] = useAtom(mainStates.events)
  const [isLoading] = useAtom(mainStates.loaded)

  let content
  if (!(isLoading === 0)) {
    content = <Preloader/>
  } else {
    content = (data != null)
      ? <List events={data}/>
      : <ErrorContent />
  }

  return <div className={styles.main}>
    {content}
  </div>
}

export {
  Main
}
