import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../../contexts';

const EntryController = ({ children }) => {
  return (
    <AuthConsumer>
      {({
        state: {
          auth: { loggedIn },
        },
      }) => {
        if (!loggedIn) {
          return <Redirect to="/login/" />;
        }

        return children || null;
      }}
    </AuthConsumer>
  );
};

export default EntryController;
