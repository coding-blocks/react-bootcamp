import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login';
import Profile from './profile';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/profile/login" component={Login} />
          <Route
            path="/profile/:name?"
            render={props => {
              console.log(props);
              return (
                <React.Fragment>
                  <h1>hi {props.match.params.name}</h1>
                  <Profile />
                  <button onClick={() => props.history.push('/')}>Logout</button>
                </React.Fragment>
              );
            }}
          />
          <Route render={() => <h1>404 not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
