import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {

  const authedUser = localStorage.getItem("userSession");      
  //console.log(authedUser)
  const { type } = props;

  if (type === "guest" && authedUser) 
        return <Redirect to="/" />;
  else if (type === "private" && !authedUser) 
        return <Redirect to="/login" />;

  return <Route {...props} />;
};

export default connect()(AuthRoute);