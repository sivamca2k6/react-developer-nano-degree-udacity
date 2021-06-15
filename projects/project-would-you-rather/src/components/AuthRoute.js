import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import { useLocation } from 'react-router-dom';

const AuthRoute = props => {

const currentLocation = useLocation()
      
  const authedUser = localStorage.getItem("userSession");      
  //console.log(authedUser)
  const { type } = props;

  if (type === "guest" && authedUser) 
        return <Redirect to="/" />;
  else if (type === "private" && !authedUser) 
        return <Redirect
        to={{
          pathname: "/login",
          search: "?utm=your+face",
          state: { referrer: currentLocation.pathname }
        }}
      />;

  return <Route {...props} />;
};

export default connect()(AuthRoute);