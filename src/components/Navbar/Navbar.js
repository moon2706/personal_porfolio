import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', path: '/', scrollTo: 'home' },
    { text: 'Objective', scrollTo: 'objective' },
    { text: 'Education', scrollTo: 'education' },
    { text: 'Skills', scrollTo: 'skills' },
    { text: 'Projects', scrollTo: 'projects' },
    { text: 'Achievements', scrollTo: 'achievements' },
    { text: 'Contact', scrollTo: 'contact' },
    { text: 'Blog', path: '/blog', external: true },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (item) => {
    if (item.external) {
      navigate(item.path);
    } else if (location.pathname === '/blog') {
      navigate('/');
      setTimeout(() => {
        if (item.scrollTo) {
          document.getElementById(item.scrollTo).scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (item.scrollTo) {
      document.getElementById(item.scrollTo).scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = menuItems.map((item) => (
    <Typography
      key={item.text}
      component={item.external ? RouterLink : ScrollLink}
      to={item.external ? item.path : item.scrollTo}
      smooth={!item.external}
      duration={500}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={() => handleNavigation(item)}
      sx={{
        mx: 2,
        color: 'white',
        '&:hover': {
          color: '#4fc3f7',
        },
      }}
    >
      {item.text}
    </Typography>
  ));

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rajeev Reddy
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex' }}>{navLinks}</Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} onClick={handleDrawerToggle}>
              <Typography
                component={item.external ? RouterLink : ScrollLink}
                to={item.external ? item.path : item.scrollTo}
                smooth={!item.external}
                duration={500}
                style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
                onClick={() => handleNavigation(item)}
              >
                <ListItemText primary={item.text} />
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar /> {/* This is for proper spacing below the fixed AppBar */}
    </>
  );
};

export default Navbar;
