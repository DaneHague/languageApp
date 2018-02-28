/**
*
* Welcome
*
*/

import React from 'react';
// import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


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
  paperHeader: {
    margin: theme.spacing.unit,
  },
});


class Welcome extends React.Component {
  componentDidMount(){
    console.log(this.props.HomePage.updatedProfile);
  }  
  render(){
  return (
    <Grid container justify="center" className={this.props.classes.container}>
      <Paper elevation={6} className={this.props.classes.paper}>
        <Typography className={this.props.classes.paperHeader} variant="headline" component="h3">
            Welcome
        </Typography>
      </Paper>
    </Grid>
  );
}}

Welcome.propTypes = {
  classes: React.PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
