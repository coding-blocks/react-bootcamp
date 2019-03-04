import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomePage, LoginPage, EmailPage } from './containers';
import { EntryController } from './controllers';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route
              render={() => (
                <EntryController>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/email/:emailId" exact component={EmailPage} />
                </EntryController>
              )}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
