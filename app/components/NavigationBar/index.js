import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import withTheme from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLinks: {
    marginRight: 10,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#64B5F6',
    }
  },
  navButtonWrapper: {
    fontSize: '18px',
    textTransform: 'none',
    color: 'white',
  },
  appBar: {
    backgroundColor: '#64B5F6',
  }
};

function NavigationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            <Link className={classes.navLinks} to="/">
              <Button className={classes.navButtonWrapper}>
                Home
              </Button>
            </Link>
          </Typography>
          {localStorage.getItem('jwt') !== null ? <Link className={classes.navLinks} to="/profile">
            <Button className={classes.navButtonWrapper}>
              Profile
            </Button>
          </Link> : ""}
          
          <Link className={classes.navLinks} to="/ResultsPage" color="contrast">
            <Button className={classes.navButtonWrapper}>
              Results
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);

