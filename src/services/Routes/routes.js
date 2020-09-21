import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import App from "../../App";
import Home from '../../pages/Home'
// import index from '../../pages/index';
import SignUp from '../../pages/Login/SignUp'
import Login from '../../pages/Login/Login'
// import EntranceHub from '../../pages/EntranceHub';
import Checkout from '../../Components/CheckoutCart/Checkout'
import Pedidos from '../../pages/Profile/pedidos'
import Account from '../../pages/Profile/account'
const routeList = [
  {
    path: '/',
    component: Home,
    exact: true,
    private: false,
  },
  // {
  //   path: '/home',
  //   component: Home,
  //   exact: true,
  //   private: false
  // },
  {
    path: '/login',
    component: Login,
    exact: true,
    private: false,
  },
  {
    path: '/SignUp',
    component: SignUp,
    exact: true,
    private: false,
  },
  {
    path: '/Checkout',
    component: Checkout,
    exact: true,
    private: false,
  },
  // {
  //   path: '/EntranceHub',
  //   component: EntranceHub,
  //   exact: true,
  //   private: false
  // },
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
]

const RouteBuilder = (route) => {
  return <Route exact={!!route.exact} path={route.path} render={(props) => <route.component {...props} />} />
}

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routeList.map((route, key) => (
        <RouteBuilder key={key} {...route} />
      ))}
    </Switch>
  </BrowserRouter>
)
export default Routes
