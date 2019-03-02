import React from 'react';

import { fetchEmails } from '../actions';

const { Provider, Consumer } = React.createContext();

class EmailsProvider extends React.Component {
  state = {
    emails: [],
  };

  fetchEmails = async () => {
    const { newEmails } = await fetchEmails();

    return this.setState(state => ({
      emails: [...state.emails, ...newEmails],
    }));
  };

  render() {
    return (
      <Provider
        value={{
          state: { emails: this.state.emails },
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
