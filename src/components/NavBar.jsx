import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Paper } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const linkStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 16px',
    textDecoration: 'none',
    color: '#000000',
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={ () => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={open} onClick={() => setOpen(false)}>
        <Paper style={{width: '240px'}}>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton edge="start" color="primary" aria-label="chevron" sx={{ mr: 2 }} onClick={ () => setOpen(false)}>
              <KeyboardArrowLeftIcon/>
            </IconButton>
          </div>
        </Paper>
        {
          links.map((itemLink, index) => {
            return (
              <Link to={itemLink.path} style={linkStyle} key={index}>
                <IconButton edge="start" color="#000000" sx={{ mr: 2 }}>
                  {itemLink.icon}
                </IconButton>
                {itemLink.name}
              </Link>
            )
          })
        }
      </Drawer>
    </Box>
  );
}

const links = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon/>,
    path: '/'
  },
  {
    name: 'Login',
    icon: <LoginIcon/>,
    path: 'login'
  },
  {
    name: 'Stock',
    icon: <LoginIcon/>,
    path: 'stock'
  },
]