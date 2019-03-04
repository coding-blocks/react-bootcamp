import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AuthProvider, UserProvider, EmailsProvider } from './contexts';
import { HomePage, LoginPage, EmailPage } from './containers';
import { EntryController } from './controllers';
import { login, fetchEmails } from './actions';

class App extends React.Component {
  state = {
    user: undefined,
    //emails: [],
  };

  updateUser = user => this.setState({ user });


  render() {
    const { user } = this.state;

    return (
      <Router>
        <AuthProvider updateUser={this.updateUser}>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route
              render={() => (
                <EntryController>
                  
                    <UserProvider
                      value={{
                        state: { user },
                        actions: {},
                      }}>
                   
                    </UserProvider>
                    <EmailsProvider>
                      <HomePage />
                  </EmailsProvider>
                </EntryController>
              )}
            />
          </Switch>
        </AuthProvider>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
