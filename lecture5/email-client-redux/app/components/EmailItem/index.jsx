import React from 'react';
import { withRouter } from 'react-router-dom';

import './style.scss';

const EmailItem = ({ emailId, subject, summary, sender, history }) => (
  <div className="email-item" onClick={() => history.push(`/email/${emailId}`)}>
    <h3>{subject}</h3>
    <p>From {sender}</p>
    <p>{summary}</p>
  </div>
);

export default withRouter(EmailItem);
