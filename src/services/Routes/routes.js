import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import App from "../../App";
import Home from '../../pages/Home';
import Delivery from '../../pages/Delivery';
import SignUp from '../../pages/Login/SignUp';
import Login from '../../pages/Login/Login';
import Checkout from '../../pages/OrderCheckout/index';
import Pedidos from '../../pages/Profile/pedidos';
import Account from '../../pages/Profile/account';
const routeList = [
  {
    path: '/',
    component: Home,
    exact: true,
    private: false,
  },
  {
    path: '/delivery',
    component: Delivery,
    exact: true,
    private: false,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
    private: false,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
    private: false,
  },
  {
    path: '/checkout',
    component: Checkout,
    exact: true,
    private: false,
  },
  {
    path: '/pedidos',
    component: Pedidos,
    exact: true,
    private: false,
  },
  {
    path: '/account',
    component: Account,
    exact: true,
    private: false,
  },
];

const RouteBuilder = (route) => {
  return <Route exact={!!route.exact} path={route.path} render={(props) => <route.component {...props} />} />;
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routeList.map((route, key) => (
        <RouteBuilder key={key} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
);
export default Routes;
