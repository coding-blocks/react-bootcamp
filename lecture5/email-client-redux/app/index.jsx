import React, { Suspense, lazy } from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { EntryController } from './controllers';
import store from './store';

import './styles/main.scss';

/*
const HomePage = Loadable({
  loader: async () => import('./containers/HomePage'),
  loading: () => <h1>Loading</h1>,
});

const LoginPage = Loadable({
  loader: async () => import('./containers/LoginPage'),
  loading: () => <h1>Loading</h1>,
});

const EmailPage = Loadable({
  loader: async () => import('./containers/EmailPage'),
  loading: () => <h1>Loading</h1>,
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login" exact component={LoginPage} />} />
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
*/

const HomePage = lazy(() => import('./containers/HomePage'));
const LoginPage = lazy(() => import('./containers/LoginPage'));
const EmailPage = lazy(() => import('./containers/EmailPage'));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Suspense fallback={<h1>Loading</h1>}>
            <Switch>
              <Route path="/login" exact component={LoginPage} />} />
              <Route
                render={() => (
                  <EntryController>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/email/:emailId" exact component={EmailPage} />
                  </EntryController>
                )}
              />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
