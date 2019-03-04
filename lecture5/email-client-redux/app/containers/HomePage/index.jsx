import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as Actions from '../../actions';
import { NavBar, EmailItem } from '../../components';

class HomePage extends React.Component {
  async componentDidMount() {
    const { fetchEmails } = this.props;
    await fetchEmails();

    this.fetchEmailInterval = setInterval(async function() {
      await fetchEmails();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchEmailInterval);
  }

  render() {
    const { emails } = this.props;

    return (
      <div className="home-page">
        <NavBar />
        {emails.reverse().map(({ subject, sender, id, body }) => (
          <EmailItem key={id} emailId={id} subject={subject} sender={sender} summary={body.substr(20)} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ emails }) => ({
  emails: emails.data,
});

const mapDispatchToProps = dispatch => ({
  fetchEmails: () => dispatch(Actions.fetchEmails()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
