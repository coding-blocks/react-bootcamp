import React from 'react';

import './style.scss';

const EmailItem = ({ emailId, subject, summary, sender }) => (
  <div className="email-item">
    <h3>{subject}</h3>
    <p>From {sender}</p>
    <p>{summary}</p>
  </div>
);

export default EmailItem;
