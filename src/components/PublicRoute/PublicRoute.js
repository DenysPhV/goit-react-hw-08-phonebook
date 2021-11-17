import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { isAuth } from 'redux/auth/auth-selectors';

function PublicRoute({ component: Component, redirectTo, ...routeProps }) {
  const isAuthenticated = useSelector(isAuth);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Link to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
