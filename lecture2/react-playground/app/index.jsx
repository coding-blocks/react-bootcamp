// initialize react here
import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';

class App extends React.Component {
  state = {
    a: 'foo',
    bar: 'bar',
  };

  render() {
    const { a, ...rest } = this.state;
    const b = {
      a: 'a',
    };
    const c = [1, 2, 3];
    console.log(...c);
    console.log(a, { ...b });
    return <h1>Hello World</h1>;
  }
}

render(<App />, document.getElementById('app'));
