import { FC, ReactElement, useState } from 'react'
import { useCustomTheme } from './hooks/useCustomTheme'
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  Menu,
  ChevronLeft,
  ChevronRight,
  InfoOutlined,
  ContactPageOutlined,
} from '@mui/icons-material'
import { AppBar, DrawerHeader, Main, drawerWidth } from './styles'
import Link from 'next/link'
export interface SidebarProps {
  children: ReactElement
}

export const Sidebar: FC<SidebarProps> = ({ children }): ReactElement => {
  const theme = useCustomTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = (): void => {
    setOpen(true)
  }

  const handleDrawerClose = (): void => {
    setOpen(false)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link href='/about'>
            <ListItem>
              <ListItemIcon>
                <InfoOutlined />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
          </Link>

          <Link href='/contacts' passHref>
            <ListItem>
              <ListItemIcon>
                <ContactPageOutlined />
              </ListItemIcon>
              <ListItemText primary='Contacts' />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </Typography>
      </Main>
    </Box>
  )
}
