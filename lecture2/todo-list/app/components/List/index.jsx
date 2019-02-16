import React from 'react';

import ListItem from '../ListItem';

const List = props => {
  const { items, updateItem } = props;

  return (
    <ul className="col-12 col-md-4">
      {items.map(({ title, done }, index) => (
        <ListItem key={index} title={title} done={done} toggleStatus={() => updateItem(index, !done)} />
      ))}
    </ul>
  );
};

export default List;
