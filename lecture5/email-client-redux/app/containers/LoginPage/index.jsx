import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as Actions from '../../actions';

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
    const { loggedIn, loggingIn, errors = {}, login } = this.props;
    const { username, password } = this.state;

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
        <button onClick={handleLogin}>{loggingIn ? 'Logging In' : 'Login'}</button>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  loggingIn: auth.inProgress,
  loggedIn: auth.loggedIn,
  errors: auth.errors,
});

const mapDispatchToProps = dispatch => ({
  login: payload => {
    // fucntion as an action
    const action = Actions.login(payload);
    return dispatch(action);
    // dispatch(Actions.login(payload)),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
