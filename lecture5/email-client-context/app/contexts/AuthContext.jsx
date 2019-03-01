import React from 'react';

import { login } from '../actions';

const { Provider, Consumer } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    inProgress: false,
    loggedIn: false,
    errors: undefined,
  };

  logout = () => {
    const { updateUser } = this.props;

    this.setState({
      loggedIn: false,
      errors: undefined,
    });

    return updateUser();
  };

  login = async payload => {
    const { updateUser } = this.props;

    await this.setState({
      inProgress: true,
    });

    try {
      const { user } = await login(payload);

      await updateUser(user);
      this.setState({
        inProgress: false,
        loggedIn: true,
        errors: undefined,
      });
    } catch (err) {
      this.setState({
        inProgress: false,
        loggedIn: false,
        errors: err.errors,
      });

      updateUser();
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
