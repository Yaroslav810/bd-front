import { useCallback, useState } from 'react'
import { addLike, removeLike } from '../../api/events/events'
import { getUser } from '../../model/states'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import styles from './Like.module.css'

interface LikeProps {
  id: string
  isLikeSet: boolean
}

function Like({ id, isLikeSet }: LikeProps) {
  const [like, setLike] = useState(isLikeSet)
  const user = getUser()

  const onAddLike = useCallback(() => {
    setLike(true)
    addLike(id)
      .catch(() => {
        setLike(false)
      })
  }, [])

  const onRemoveLike = useCallback(() => {
    setLike(false)
    removeLike(id)
      .catch(() => {
        setLike(true)
      })
  }, [])

  return <>
    {user
      ? like
        ? <FavoriteIcon className={styles.like} color={'error'} onClick={e => {
          e.stopPropagation()
          onRemoveLike()
        }}/>
        : <FavoriteBorderIcon className={styles.like} color={'error'} onClick={e => {
          e.stopPropagation()
          onAddLike()
        }}/>
      : undefined
    }
  </>
}

export {
  type LikeProps,
  Like
}
