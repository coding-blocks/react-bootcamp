import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, UserPage } from './containers';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" exact component={HomePage} />
          <Route path="/users/:username" component={UserPage} />
        </React.Fragment>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
