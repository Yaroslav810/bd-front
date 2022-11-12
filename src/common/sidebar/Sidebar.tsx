/* eslint-disable */
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
import MenuItem from '@mui/material/MenuItem'
import AttractionsIcon from '@mui/icons-material/Attractions'
import { useState } from 'react'
import { Divider } from '@mui/material'
import { useLogoutRoute } from '../../routes/logoutRoute/logoutRoute'
import { useFavoritesRoute } from '../../routes/favoritesRoute/favoritesRoute'
import { useMainRoute } from '../../routes/mainRoute/mainRoute'

const HEIGHT_SIDEBAR = 60

function Sidebar () {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const main = useMainRoute()
  const favorites = useFavoritesRoute()
  const logout = useLogoutRoute()

  const user = {
    name: 'Маслов Мирон'
  }

  const settings = [
    {
      title: 'Profile',
      onClick: main.goTo,
    },
    {
      title: 'Favorites',
      onClick: favorites.goTo,
    },
    null,
    {
      title: 'Logout',
      onClick: logout.goTo,
    },
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
          <Tooltip title="Open settings">
            <IconButton onClick={event => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
              <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
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
              if (setting) {
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
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
}

export {
  HEIGHT_SIDEBAR,
  Sidebar
}
