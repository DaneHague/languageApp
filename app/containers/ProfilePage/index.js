/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import homeReducer from '../HomePage/reducer';
import saga from './saga';
import ProfileForm from '../../components/ProfileForm/index';
import { getProfileInfo, updateProfileInfo } from './actions';

export class ProfilePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      userUpdate: false,
    }
  }
  
  render() {
    return (
      <ProfileForm {...this.props} {...this.state} />
    );
  }
}

ProfilePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  profilepage: makeSelectProfilePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    getProfileInfo: () => dispatch(getProfileInfo()),
    updateProfileInfo: (user) => dispatch(updateProfileInfo(user))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'profilePage', reducer }, {key: 'homePage', });
const withSaga = injectSaga({ key: 'profilePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfilePage);
