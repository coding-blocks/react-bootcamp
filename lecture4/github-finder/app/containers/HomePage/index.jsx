import React from 'react';

class HomePage extends React.Component {
  state = {
    username: '',
  };

  handleSearchChange = e =>
    this.setState({
      username: e.target.value.trim(),
    });

  handleSearch = () => {
    const { history } = this.props;
    const { username } = this.state;

    if (username) {
      history.push(`/users/${username}`);
    }
  };

  render() {
    const { username } = this.state;

    return (
      <React.Fragment>
        <input type="text" placeholder="username" value={username} onChange={this.handleSearchChange} />
        <button onClick={this.handleSearch}>Search</button>
      </React.Fragment>
    );
  }
}

export default HomePage;
