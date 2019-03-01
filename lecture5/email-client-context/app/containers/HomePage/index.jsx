import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer, EmailsConsumer } from '../../contexts';
import { NavBar, EmailItem } from '../../components';

class HomePage extends React.Component {
  state = {
    fetchIntervalMounted: false,
  };

  mountFetchInterval = async fetchEmails => {
    await this.setState(state => ({
      fetchIntervalMounted: !state.fetchIntervalMounted,
    }));

    await fetchEmails();

    this.fetchEmailInterval = setInterval(async function() {
      await fetchEmails();
    }, 5000);
  };

  componentWillUnMount() {
    clearInterval(this.fetchEmailInterval);
  }

  render() {
    const { fetchIntervalMounted } = this.state;

    return (
      <AuthConsumer>
        {({ state, actions }) => {
          const { auth } = state;
          const { logout } = actions;

          if (!auth.loggedIn) {
            return <Redirect to="/login/" />;
          }

          return (
            <EmailsConsumer>
              {({ state: { emails }, actions: { fetchEmails } }) => {
                if (!fetchIntervalMounted) {
                  this.mountFetchInterval(fetchEmails);
                  return <h1>Fetching Emails</h1>;
                }

                return (
                  <div className="home-page">
                    <NavBar />
                    {emails.reverse().map(({ subject, sender, id, body }) => (
                      <EmailItem key={id} emailId={id} subject={subject} sender={sender} summary={body.substr(20)} />
                    ))}
                  </div>
                );
              }}
            </EmailsConsumer>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default HomePage;
