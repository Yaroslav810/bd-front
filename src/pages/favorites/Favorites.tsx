/* function Favorites() {
  return <div>
    <a href="/">Главная</a>
  </div>
}

export {
  Favorites
}
*/

import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from '../main/components/List'
import { favoriteStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from '../main/Main.module.css'
import { useAtom } from '@reatom/npm-react'

function Favorites() {
  const [data] = useAtom(favoriteStates.events)
  const [isLoading] = useAtom(favoriteStates.loaded)

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
  Favorites
}
