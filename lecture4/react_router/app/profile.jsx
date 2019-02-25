import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Profile;
