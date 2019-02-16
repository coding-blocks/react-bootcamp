// initialize react here
import React from 'react';
import { render } from 'react-dom';

import Button from './button';

/* funcational component
const App = props => {
  const onClick = () => console.log('clicked');
  return <Button text="click on me" onClick={onClick} />;
};
*/

class App extends React.Component {
  handleOnClick = () => {
    console.log('clicked');
  };

  render() {
    return (
      <React.Fragment>
        <h1>React Playground</h1>
        <Button text="click on me" onClick={this.handleOnClick} />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
