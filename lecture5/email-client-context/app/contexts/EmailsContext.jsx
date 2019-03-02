import React from 'react';

import { fetchEmails } from '../actions';

const { Provider, Consumer } = React.createContext();

class EmailsProvider extends React.Component {
  state = {
    emails: [],
  };

  fetchEmails = async () => {
    const { emails } = await fetchEmails();

    return this.setState(state => ({
      emails: [...state.emails, ...emails],
    }));
  };

  render() {
    const { emails } = this.state;
    return (
      <Provider
        value={{
          state: {
            emails: emails,
          },
          actions: {
            fetchEmails: this.fetchEmails,
          },
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { EmailsProvider, Consumer as EmailsConsumer };
