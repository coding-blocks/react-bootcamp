import React from 'react';

import { login } from '../actions';

const { Provider, Consumer } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    inProgress: false,
    loggedIn: false,
    errors: undefined,
    user: undefined,
  };

  logout = () => {
    this.setState({
      loggedIn: false,
      errors: undefined,
      user: undefined,
    });
  };

  login = async payload => {
    await this.setState({
      inProgress: true,
    });

    try {
      const { user } = await login(payload);

      this.setState({
        inProgress: false,
        loggedIn: true,
        errors: undefined,
        user: user,
      });
    } catch (err) {
      this.setState({
        inProgress: false,
        loggedIn: false,
        errors: err.errors,
        user: undefined,
      });
    }
  };

  render() {
    return (
      <Provider
        value={{
          state: { auth: this.state },
          actions: {
            login: this.login,
            logout: this.logout,
          },
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { AuthProvider, Consumer as AuthConsumer };
