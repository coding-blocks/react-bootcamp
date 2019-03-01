import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage } from './containers';
import { login, fetchEmails } from './actions';

class App extends React.Component {
  state = {
    auth: {
      inProgress: false,
      loggedIn: false,
      errors: undefined,
    },
    user: undefined,
    emails: [],
  };

  fetchEmails = async () => {
    const { emails } = await fetchEmails();

    return this.setState({
      emails: [...this.state.emails, ...emails],
    });
  };

  logout = () =>
    this.setState(state => ({
      auth: {
        ...state.auth,
        loggedIn: false,
        errors: undefined,
      },
      user: undefined,
    }));

  login = async payload => {
    await this.setState({
      auth: {
        ...this.state.auth,
        inProgress: true,
      },
    });

    try {
      const { user } = await login(payload);

      this.setState(state => ({
        auth: {
          ...state.auth,
          inProgress: false,
          loggedIn: true,
          errors: undefined,
        },
        user,
      }));
    } catch (err) {
      this.setState(state => ({
        auth: {
          ...state.auth,
          inProgress: false,
          loggedIn: false,
          errors: err.errors,
        },
        user: undefined,
      }));
    }
  };

  render() {
    const { auth, user, emails } = this.state;

    return (
      <Router>
        <React.Fragment>
          <Route
            path="/"
            exact
            render={props => (
              <HomePage
                user={user}
                emails={emails}
                loggedIn={auth.loggedIn}
                fetchEmails={this.fetchEmails}
                logout={this.logout}
              />
            )}
          />
          <Route
            path="/login"
            exact
            render={props => (
              <LoginPage
                login={this.login}
                errors={auth.errors}
                inProgress={auth.inProgress}
                loggedIn={auth.loggedIn}
              />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
