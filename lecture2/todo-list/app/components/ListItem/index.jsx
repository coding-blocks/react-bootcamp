import React from 'react';

import './style.scss';

const ListItem = ({ title, done, toggleStatus }) => (
  <li className="list-item">
    <span className="title">{title}</span>
    <input type="checkbox" className="status" value={done} onClick={toggleStatus} />
  </li>
);

export default ListItem;
