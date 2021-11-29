import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => (
  
  <Route
    {...rest}
    render={props =>
      props.role ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/courses",
          }}
        />
      )
    }
  />
) ;

function mapStateToProps(state) {
	return {
	  role: state.user.role,
	};
  }

export default  connect(mapStateToProps)(PrivateRoute);	