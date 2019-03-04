import React from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../actions';

const NavBar = ({ user, logout }) => (
  <div className="nav">
    <span>Welcome {user.name}</span>
    <img src={user.avatar_url} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
    <button onClick={logout}>Logout</button>
  </div>
);

const mapStateToProps = ({ user }) => ({
  user: user.data,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Actions.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
