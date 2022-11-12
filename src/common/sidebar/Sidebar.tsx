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

const settings = [
  {
    title: 'Profile',
    onClick: () => {},
  },
  {
    title: 'Dashboard',
    onClick: () => {},
  },
  null,
  {
    title: 'Logout',
    onClick: () => {},
  },
]

const HEIGHT_SIDEBAR = 60

function Sidebar () {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const user = {
    name: 'Маслов Мирон'
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

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
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
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
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => {
              if (setting) {
                return <MenuItem key={setting.title} onClick={setting.onClick}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              } else {
                return <Divider />
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
