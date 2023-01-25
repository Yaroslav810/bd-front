import { ErrorContent } from '../../common/error/ErrorContent'
import { List } from '../main/components/List'
import { favoriteStates } from './model/states'
import { Preloader } from '../../common/preloader/Preloader'
import styles from './Favorites.module.css'
import { useAtom } from '@reatom/npm-react'
import { Typography } from '@mui/material'

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

  return <div className={styles.favorites}>
    <Typography variant="h4" gutterBottom>
      Любимые события
    </Typography>
    <div className={styles.content}>
      {content}
    </div>
  </div>
}

export {
  Favorites
}
