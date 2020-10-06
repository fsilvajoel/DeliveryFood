import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import Address from '../../Address'
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShoppingCart from '../../ShoppingCart'
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../logo.png'

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    height: "2.3rem",
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  link: {
    textDecoration: "none",
  },
  label: {
    lineHeight: 3
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  icon: {
    margin: "4px",
    fontSize: "1.5rem",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      onClose={handleMenuClose}
      open={isMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>
        <Link className={classes.link} to="/pedidos">
          <EmojiPeopleIcon className={classes.icon} />
          <label className={classes.label}>
            Pedidos
            </label>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className={classes.link} to="/account">
          <EditIcon className={classes.icon} />
          <label className={classes.label}>
            Editar Dados
          </label>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className={classes.link} to="">
          <ExitToAppIcon className={classes.icon} />
          <label className={classes.label}>
            Sair
          </label>
        </Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      onClose={handleMobileMenuClose}
      open={isMobileMenuOpen}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem>
        <Address />
      </MenuItem>
      <MenuItem>
        <ShoppingCart />
      </MenuItem>
      <MenuItem>
        <Link className={classes.link} to="/pedidos">
          <EmojiPeopleIcon className={classes.icon} />
          <label className={classes.label}>
            Pedidos
            </label>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className={classes.link} to="/account">
          <EditIcon className={classes.icon} />
          <label className={classes.label}>
            Editar Dados
          </label>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link className={classes.link} to="">
          <ExitToAppIcon className={classes.icon} />
          <label className={classes.label}>
            Sair
          </label>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>
          <div className={classes.grow}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                placeholder="Pesquisar"
              />
            </div>
          </div>
          <div className={classes.sectionDesktop}>
            <Address />
            <ShoppingCart />
            <IconButton
              aria-controls={menuId}
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              edge="end"
              onClick={handleProfileMenuOpen}
            >
              Perfil
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              aria-label="show more"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div >
  );
}
