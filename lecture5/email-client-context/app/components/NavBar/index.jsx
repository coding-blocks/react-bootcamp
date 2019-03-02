import React from 'react';
import { AuthConsumer, EmailsConsumer } from '../../contexts';

const NavBar = () => (
  <AuthConsumer>
    {(
      {
        state: {
          auth: { user },
        },
      },
      { actions: { logout } },
    ) => (
      <div className="nav">
        <span>Welcome {user.name}</span>
        <img src={user.avatar_url} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
        <EmailsConsumer>
          <button onClick={logout}>Logout</button>
        </EmailsConsumer>
      </div>
    )}
  </AuthConsumer>
);

export default NavBar;
