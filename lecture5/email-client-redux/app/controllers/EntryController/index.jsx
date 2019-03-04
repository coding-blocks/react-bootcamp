import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const EntryController = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Redirect to="/login/" />;
  }

  return children || null;
};

const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});

export default connect(mapStateToProps)(EntryController);
