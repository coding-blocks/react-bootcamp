import React from 'react';
import { AuthConsumer, UserConsumer } from '../../contexts';

const NavBar = () => (
  <AuthConsumer>
    {({ actions: { logout } }) => (
      <UserConsumer>
        {({ state: { user } }) => (
          <div className="nav">
            <span>Welcome {user.name}</span>
            <img src={user.avatar_url} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </UserConsumer>
    )}
  </AuthConsumer>
);

export default NavBar;
