import styles from './Sidebar.module.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import { Avatar } from 'primereact/avatar'
import { useRef } from 'react'
import { Menu } from 'primereact/menu'

const HEIGHT_SIDEBAR = 60

function Sidebar () {
  const menu = useRef(null)
  const items = [
    {
      label: 'Options',
      items: [
        {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {}
        },
        {
          label: 'Delete',
          icon: 'pi pi-times',
          command: () => {}
        }
      ]
    },
    {
      label: 'Navigate',
      items: [
        {
          label: 'React Website',
          icon: 'pi pi-external-link',
          url: 'https://reactjs.org/'
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          command: () => {}
        }
      ]
    }
  ]

  return <div className={styles.sidebar}>
      <p>Pathway</p>
      <menu className={styles.menu}>
          <a href="/">Главная</a>
          <a href="/fav">Избранное</a>
      </menu>
      <div>
          <Menu model={items} popup ref={menu} id="popup_menu" />
          <Avatar
              icon="pi pi-user"
              className="mr-2"
              style={{ backgroundColor: '#f29f6b', color: '#ffffff' }}
              shape="circle"
              onClick={event => (menu?.current as any).toggle(event)}
              aria-controls="popup_menu" aria-haspopup
          />
      </div>
  </div>
}

export {
  HEIGHT_SIDEBAR,
  Sidebar
}
