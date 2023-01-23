import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
//import MenuItem from '@mui/material/MenuItem'
import AttractionsIcon from '@mui/icons-material/Attractions'
import { useState } from 'react'
import { Button, Divider, MenuItem } from '@mui/material'
import { useFavoritesRoute } from '../../routes/favoritesRoute/favoritesRoute'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'
import { getUser } from '../../model/states'
import { authentication, logout } from '../../api/user/user'
import { useCreateEventRoute } from '../../routes/createEventRoute/createEventRoute'
import { useLoginRoute } from '../../routes/loginRoute/loginRoute'


    
function Sidebar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
    const main = useMainRoute()
    const login = useLoginRoute()
    const createEvent = useCreateEventRoute()
  const favorites = useFavoritesRoute()

  const user = getUser()

  const settings = [
    {
      title: 'Profile',
      onClick: main.goTo
    },
    {
      title: 'Favorites',
      onClick: favorites.goTo
    },
    null,
    {
      title: 'Выйти',
      onClick: login.goTo
    }
  ]

    return <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <AttractionsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: '#ffffff',
                        textDecoration: 'none'
                    }}
                >
                    PATHWAY
                </Typography>

        <AttractionsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
         PATHWAY
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
          {!!user && <>
            <Tooltip title="Open settings">
              <IconButton onClick={event => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting, index) => {
                if (setting != null) {
                  return <MenuItem key={setting.title} onClick={() => {
                    setting.onClick()
                    setAnchorElUser(null)
                  }}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                } else {
                  return <Divider key={index} />
                }
              })}
            </Menu>
          </>}
          {/* eslint-disable-next-line @typescript-eslint/strict-boolean-expressions */}
          {!user && <>
            <Button
              color="inherit"
              onClick={() => {
                void authentication()
              }}>
                Войти
            </Button>
          </>}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}

export {
    Sidebar,
}