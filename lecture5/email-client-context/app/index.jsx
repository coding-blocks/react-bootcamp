import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider, UserProvider, EmailsProvider } from './contexts';
import { HomePage, LoginPage } from './containers';
import { login, fetchEmails } from './actions';

class App extends React.Component {
  state = {
    user: undefined,
    emails: [],
  };

  updateUser = user => this.setState({ user });

  fetchEmails = async () => {
    const { emails } = await fetchEmails();

    return this.setState(state => ({
      emails: [...state.emails, ...emails],
    }));
  };

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
                <EmailsProvider
                  value={{
                    state: {
                      emails,
                    },
                    actions: {
                      fetchEmails: this.fetchEmails,
                    },
                  }}>
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
