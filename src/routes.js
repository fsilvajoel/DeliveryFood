import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../../App";

import Album from "./pages/Home";
// import SignInSide from './pages/Login'
// import CarrrouselCategories from "./Components/CarouselCategories";
import SignUp from "./pages/SignUp";
import Review from "./Components/CheckoutCart/Review";
import Checkout from "./Components/CheckoutCart/Checkout";

const routeList = [
  {
    path: "/",
    component: Index,
    exact: true,
    private: false,
  },
  {
    path: "/SignUp",
    component: SignUp,
    exact: true,
    private: false,
  },
  {
    path: "/Album",
    component: Album,
    exact: true,
    private: false,
  },
  {
    path: "/Checkout",
    component: Checkout,
    exact: true,
    private: false,
  },
  {
    path: "/Review",
    component: Review,
    exact: true,
    private: false,
  },
];

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      {/* <Route path="/Technology" component={TechnologyPage} /> */}
      {/* <Route path="/Science" component={SciencePage} /> */}
      {/* <Route component={NotFound}/> */}
    </Switch>
  </BrowserRouter>
);
export default Routes;

// const Routes = (props) => {
//   return (
//     <Switch>
//       {routeList.map((route, key) => {
//         if (!route.private) {
//           return <RouteBuilder key={key} {...route} />;
//         } else {
//           return (
//             <PrivateRoute key={key} {...route} component={route.component} />
//           );
//         }
//       })}
//       <Redirect from="*" to="/" />
//     </Switch>
//   );
// };
