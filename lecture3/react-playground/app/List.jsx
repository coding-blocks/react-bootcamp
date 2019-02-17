import React from 'react';

class List extends React.Component {
  componentDidMount() {
    console.log('mounting list');
  }

  componentWillUnmount() {
    console.log('unmounting list');
  }

  render() {
    console.log('render list');
    return <h1>LIST</h1>;
  }
}

export default List;
