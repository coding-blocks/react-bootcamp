import React from 'react';

const NavBar = ({ name, image, logout }) => (
  <div className="nav">
    <span>Welcome {name}</span>
    <img src={image} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
    <button onClick={logout}>Logout</button>
  </div>
);

export default NavBar;
