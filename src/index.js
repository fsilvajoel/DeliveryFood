import React from 'react';
import ReactDOM from 'react-dom';
import Album from './pages/Home'
// import SignInSide from './pages/Login'
import SignUp from './pages/SignUp'
import Review from './Components/CheckoutCart/Review'
import Checkout from './Components/CheckoutCart/Checkout'
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Checkout/>
    {/* <Review/> */}
    {/* <Album /> */}
    {/* <SignUp/> */}
    {/* <SignUp/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
