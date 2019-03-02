import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider, UserProvider, EmailsProvider } from './contexts';
import { HomePage, LoginPage } from './containers';

class App extends React.Component {
  state = {
    user: undefined,
  };

  updateUser = user => this.setState({ user });

  render() {
    const { user, emails } = this.state;

    return (
      <Router>
        <AuthProvider updateUser={this.updateUser}>
          <Route
            path="/"
            exact
            render={props => (
              <UserProvider
                value={{
                  state: { user },
                  actions: {},
                }}>
                <EmailsProvider>
                  <HomePage />
                </EmailsProvider>
              </UserProvider>
            )}
          />
          <Route path="/login" exact component={LoginPage} />
        </AuthProvider>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
