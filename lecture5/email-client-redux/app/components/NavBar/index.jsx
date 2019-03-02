import React from 'react';

const NavBar = () => (
  <div className="nav">
    <span>Welcome {user.name}</span>
    <img src={user.avatar_url} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
    <button onClick={logout}>Logout</button>
  </div>
);

export default NavBar;
