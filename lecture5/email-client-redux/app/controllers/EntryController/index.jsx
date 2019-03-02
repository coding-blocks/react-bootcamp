import React from 'react';
import { Redirect } from 'react-router-dom';

const EntryController = ({ children }) => {
  if (!loggedIn) {
    return <Redirect to="/login/" />;
  }

  return children || null;
};

export default EntryController;
