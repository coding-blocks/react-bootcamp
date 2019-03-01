import React from 'react';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleValueChange = e =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  handleLogin = () => {
    const { login } = this.props;
    const { username, password } = this.state;

    return login({
      username,
      password,
    });
  };

  render() {
    const { inProgress, loggedIn, errors = {} } = this.props;
    const { username, password } = this.state;

    if (loggedIn) {
      return <Redirect to="/" />;
    }

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
        <button onClick={this.handleLogin}>{inProgress ? 'Logging In' : 'Login'}</button>
      </div>
    );
  }
}

export default LoginPage;
