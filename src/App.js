import React, { Component } from 'react';
import {Route, Router, Switch} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import { history } from './helpers/BrowserHistory';
import Loadable from 'react-loadable';
import {PrivateRoute} from "./components/PrivateRoute";
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});

// Pages
const Login = Loadable({
  loader: () => import('./views/Pages/Login'),
  loading
});

const Register = Loadable({
  loader: () => import('./views/Pages/Register'),
  loading
});

const Page404 = Loadable({
  loader: () => import('./views/Pages/Page404'),
  loading
});

const Page500 = Loadable({
  loader: () => import('./views/Pages/Page500'),
  loading
});

class App extends Component {

  render() {
    console.log(process.env);
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </Router>
    );
  }
}

export default App;
