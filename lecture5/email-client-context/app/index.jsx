import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider, EmailsProvider } from './contexts';
import { HomePage, LoginPage } from './containers';

class App extends React.Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <Route
            path="/"
            exact
            render={props => (
              <EmailsProvider>
                <HomePage />
              </EmailsProvider>
            )}
          />
          <Route path="/login" exact component={LoginPage} />
        </AuthProvider>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
