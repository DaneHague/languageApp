/**
*
* Login
*
*/

import React from 'react';
// import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';
import Mail from 'material-ui-icons/Mail';
import Typography from 'material-ui/Typography';
import Twitter from 'material-ui-icons/Chat'
import axios from 'axios';

const styles = theme => ({
  paper: {
    height: '100%',
    padding: theme.spacing.unit * 6,
  },
  container: {
    flexGrow: 1,
    width: '100%',
    marginTop: '84px',
  },
  loginButton: {
    backgroundColor: '#90CAF9',
    '&:hover': {
      backgroundColor: '#E3F2FD',
      color: '#90CAF9'
    },
    color: 'White',
  },
  linkButton: {
    marginRight: 10,
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#64B5F6',
    }
  },
  icon: {
    margin: theme.spacing.unit,
  },
  paperHeader: {
    margin: theme.spacing.unit,
  },
});

function getData(){
  let config = {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    }
  }
  axios.get('http://localhost:58411//api/users/secret', config)
    .then(function (response) {
      console.log(response.data)
    });
};


class Login extends React.Component {
  render(){
  return (
    <Grid container justify="center" className={this.props.classes.container}>
      <Paper elevation={6} className={this.props.classes.paper}>
        <Typography className={this.props.classes.paperHeader} variant="headline" component="h3">
            Login
        </Typography>
        <Grid className={this.props.classes.icon} item xs={12}>
          <a className={this.props.classes.linkButton} href="http://localhost:58411/api/users/login/google">
            <Button className={this.props.classes.loginButton}>
              <Mail className={this.props.classes.icon}/>Sign in with Google
            </Button>
          </a>
        </Grid>
        <Grid className={this.props.classes.icon} item xs={12}>
          <a className={this.props.classes.linkButton} href="http://localhost:58411/api/users/login/facebook">
            <Button className={this.props.classes.loginButton}>
              <Twitter className={this.props.classes.icon}/>Sign in with Facebook
            </Button>
          </a>
        </Grid>
        <a onClick={this.loginUser}> click </a>
      </Paper>
    </Grid>
  );
}}

Login.propTypes = {
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
