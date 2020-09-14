import React from "react";
import "../styles.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      color: "#689F38"
    },
    cartButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (<div>
            <header>
        <h1>Fotonicia Assignment</h1>
            </header>
            <div className={classes.root}>
      <AppBar position="static" style={{ background: '#689F38' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Color Lab
          </Typography>
          <ShoppingCartTwoToneIcon edge="start" className={classes.cartButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </ShoppingCartTwoToneIcon>
        </Toolbar>
      </AppBar>
    </div>
</div>);
}

export default Header;