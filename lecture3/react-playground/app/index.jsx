import React from 'react';
import { render } from 'react-dom';

import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor app');

    this.state = {
      show: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('derive state app', state);

    /*
    return {
      hide: true,
    };
    */

    return null;
  }

  componentDidMount() {
    console.log('did mount app');
    // use this for fetching data from api
  }

  toggleList = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };

  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('snapshot app');
    return { foo: 'foo' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component update app', snapshot);
  }

  render() {
    console.log('render app');
    const { show } = this.state;
    return (
      <React.Fragment>
        {show ? <List /> : null}
        <button onClick={this.toggleList}>{show ? 'Show' : 'Hide'}</button>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
