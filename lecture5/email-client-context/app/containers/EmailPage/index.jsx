import React from 'react';
import { Link } from 'react-router-dom';

import { EmailsConsumer } from '../../contexts';
import { NavBar } from '../../components';

const EmailPage = props => {
  const { emailId } = props.match.params;

  return (
    <EmailsConsumer>
      {({ state: { emails }, actions: { fetchEmails } }) => {
        console.log(emails, emailId);
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
      }}
    </EmailsConsumer>
  );
};

export default EmailPage;
