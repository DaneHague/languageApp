/**
*
* ProfileForm
*
*/

import React from 'react';
// import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography/Typography';
import Tooltip from 'material-ui/Tooltip';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: '84px',
  },
  paper: {
    padding: theme.spacing.unit * 6,
    height: '100%',
  },
  textField: {
    margin: '16px',
  },
  alignSubmitButton: {
    textAlign: 'right',
    paddingTop: '20px',
  },
  submitButton: {
    color: 'White',
    backgroundColor: '#7986CB',
    '&:hover': {
      backgroundColor: '#C5CAE9',
      color : '#3F51B5'
    }
  },
});

class ProfileForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount(){
    this.props.getProfileInfo();
    
  }

  componentDidUpdate() {
    //console.log(this.props.profilepage.user);
  }

  updateStateVal = (evt, id) => {
    this.setState({
        [id]: evt.target.value
    });
  }

  sendUpdate = () => {
    this.props.updateProfileInfo({
      User : {
        Nickname : this.state.NickName,
        FirstName : this.state.FirstName,
        LastName : this.state.LastName,
        Email : this.state.Email
      }
    });
  }

  render() {
    return (
      <Grid container justify="center" className={this.props.classes.root}>
        <Paper elevation={6} className={this.props.classes.paper}>
          <Typography type="headline" component="h1">
            <b>Profile</b>
          </Typography>
          <br></br>
          <Typography component="p">
            Please amend profile details
          </Typography>
          <form method="post" action="/MnistPages">
            <Grid item xs={12}>
              <Tooltip title="This is what is displayed to other users">
                <TextField label="Nickname" className={this.props.classes.textField}
                onChange={evt => this.updateStateVal(evt, "NickName")} ></TextField>
              </Tooltip>
              <TextField label="First Name" placeholder={this.props.profilepage.user.firstName} className={this.props.classes.textField} 
              onChange={evt => this.updateStateVal(evt, "FirstName")}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name" className={this.props.classes.textField} 
              onChange={evt => this.updateStateVal(evt, "LastName")}></TextField>
              <TextField label="Email" placeholder={this.props.profilepage.user.email} className={this.props.classes.textField} 
              onChange={evt => this.updateStateVal(evt, "Email")}></TextField>
            </Grid>
            <Grid item xs={12}  className={this.props.classes.alignSubmitButton}>
              <Button color="primary" className={this.props.classes.submitButton} onClick={this.sendUpdate}>
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

ProfileForm.propTypes = {
  getProfileInfo: PropTypes.func.isRequired,
  updateProfileInfo: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProfileForm);
