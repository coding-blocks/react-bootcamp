import React from 'react';

class UserPage extends React.Component {
  state = {
    loading: true,
    notFound: false,
  };

  async componentDidMount() {
    const {
      match: {
        params: { username },
      },
    } = this.props;

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        return this.setState({
          notFound: true,
          loading: false,
        });
      }

      const data = await res.json();

      return this.setState({
        data,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { loading, notFound, data } = this.state;

    if (loading) {
      return <h1>Loading</h1>;
    }

    if (notFound) {
      return <h1>NotFound</h1>;
    }

    return <h1>hi {data.name || data.login}</h1>;
  }
}

export default UserPage;
