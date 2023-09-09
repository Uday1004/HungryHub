import React, { useState } from 'react';
import {
  Avatar,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  // ButtonGroup,
  // MenuItem,
  Menu,
  Box,
  Stack,
} from '@mui/material';
import Badge from '@mui/material/Badge';
import { Link , useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../Images/applogo.jpg';
import ava from "../../Images/Logo.png"



import { useSelector, useDispatch } from "react-redux";                         //cart funtion
import { cartUiActions } from "../../store/cartUiSlice.jsx";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";            //import module from firebase 
import { auth } from '../../firebase.config';

const AppBarWithLinks = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const totalQuantity = useSelector((state) => state.cart.totalQuantity);      //import total Quantity from store redux
  const dispatch = useDispatch();

  const toggleCart = () => {                                                   //import toggle from store redux
    dispatch(cartUiActions.toggle());
  };

  const provider = new GoogleAuthProvider();
  const [pic, setpic] = useState(ava);

  const navigate = useNavigate();
  const signinwithgoogle = () => {    //sign in function from Google
    
     navigate('/');
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName
        console.log(result);
        setpic(result.user.photoURL)
        localStorage.setItem("users", name);

      }).catch((error) => {
        console.log("sign in error");
      })
  }


  return (
    <AppBar position="static" sx={{ background: 'white', color: 'black' }}>
      <Toolbar sx={{ height: 70 }}>
        <Box
          component="img"
          sx={{ height: 68, width: 258 , }}
          alt="Logo"
          src={logo}>

        </Box>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px', fontSize: '35px', fontWeight: 'Bold' }}>
          
        </Typography>
        <Hidden mdUp>
          {/* Show the menu button only on screens less than "md" width */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          {/* Show the navigation links on screens equal to or wider than "md" width */}
          <Stack spacing={2} direction='row'>
            <Button color="inherit" component={Link} to="/"
              sx={{ fontWeight: 'Bold' }} >
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ fontWeight: 'Bold' }}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ fontWeight: 'Bold' }}>
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/cart" disableElevation onClick={toggleCart} style={{ position: "relative" }}>
              <Badge badgeContent={totalQuantity >= 0 && (
                <span >{totalQuantity}</span>
              )} color="success">
                <ShoppingCartIcon fontSize="medium" />
              </Badge>
            </Button>
            <Button component={Link} to="/" onClick={signinwithgoogle}>
              <Avatar src={pic} />
            </Button>

          </Stack>
        </Hidden>

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >

        </Menu>
      </Toolbar>






      {/* mobile view */}

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}   >
        <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List sx={{ width: 110 }}>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/cart">
              <Button color="inherit" component={Link} to="/cart" disableElevation onClick={toggleCart} style={{ position: "relative" }}>
                <Badge badgeContent={totalQuantity >= 0 && (
                  <span >{totalQuantity}</span>
                )} color="success">
                  <ShoppingCartIcon fontSize="medium" />
                </Badge>
              </Button>
            </ListItem>
            <ListItem button component={Link} to="/login">
              <Avatar src={pic} onClick={signinwithgoogle} />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default AppBarWithLinks;
