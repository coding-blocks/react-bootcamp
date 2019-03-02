import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../../contexts';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleValueChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const { username, password } = this.state;

    return (
      <AuthConsumer>
        {({
          state: {
            auth: { loggedIn, inProgress, errors = {} },
          },
          actions: { login },
        }) => {
          if (loggedIn) {
            return <Redirect to="/" />;
          }

          const handleLogin = () => login({ username, password });

          return (
            <div className="login-page">
              <h1>Login Page</h1>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={username}
                onChange={this.handleValueChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={this.handleValueChange}
              />
              {errors._default && <p>{errors._default.message}</p>}
              <button onClick={handleLogin}>{inProgress ? 'Logging In' : 'Login'}</button>
            </div>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default LoginPage;
