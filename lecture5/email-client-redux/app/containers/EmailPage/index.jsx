import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { NavBar } from '../../components';

const EmailPage = ({ emails, match }) => {
  const { emailId } = match.params;

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

const mapStateToProps = ({ emails }) => ({
  emails: emails.data,
});

export default connect(mapStateToProps)(EmailPage);
