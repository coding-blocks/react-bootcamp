import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from '../../components';

const EmailPage = props => {
  const { emailId } = props.match.params;

  const email = emails.find(({ id }) => id == emailId) || {};

  return (
    <div className="email-page">
      <NavBar />
      <div className="email-content">
        <h3>{email.subject}</h3>
        <p>From {email.sender}</p>
        <p>{email.body}</p>
      </div>
      <Link to="/">Back</Link>
    </div>
  );
};

export default EmailPage;
