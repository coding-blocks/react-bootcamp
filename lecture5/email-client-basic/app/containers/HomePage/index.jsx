import React from 'react';
import { Redirect } from 'react-router-dom';

import { NavBar, EmailItem } from '../../components';

class HomePage extends React.Component {
  async componentDidMount() {
    const { fetchEmails } = this.props;
    await fetchEmails();

    this.fetchEmailInterval = setInterval(async function() {
      await fetchEmails();
    }, 5000);
  }

  componentWillUnMount() {
    clearInterval(this.fetchEmailInterval);
  }

  render() {
    const { user, loggedIn, emails, logout } = this.props;

    if (!loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="home-page">
        <NavBar name={user.name} image={user.avatar_url} logout={logout} />
        {emails.map(({ subject, sender, id, body }) => (
          <EmailItem key={id} emailId={id} subject={subject} sender={sender} summary={body.substr(20)} />
        ))}
      </div>
    );
  }
}

export default HomePage;
