import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import  CustomYourPC  from "../Pages/CustomYourPC";
import MyCart from "../Pages/MyCart";

export default function PublicRoutes() {
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" component={CustomYourPC} exact={true} />
        <Route path="/myCart" component={MyCart} />
      </Switch>
      </BrowserRouter>
      );
  }
