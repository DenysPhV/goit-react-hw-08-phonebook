import React, { Suspense, useEffect } from 'react';

import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import routes from './routes';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import AppBar from './components/AppBar';
import { LoaderSpinner } from './components/LoaderSpinner/LoaderSpinner';

import { getCurrentUser } from './redux/auth/auth-operations';
import { isAuth } from './redux/auth/auth-selectors';

import s from './App.module.css';

import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

function App() {
  const dispatch = useDispatch();
  const isAuthUser = useSelector(isAuth);
  useEffect(() => {
    isAuthUser && dispatch(getCurrentUser());
  }, [dispatch, isAuthUser]);

  return (
    <div className={s.container}>
      <AppBar />
      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <PublicRoute
            restricted
            path={routes.login}
            redirectTo={routes.contacts}
            component={LoginView}
          />
          <PublicRoute
            restricted
            path={routes.register}
            redirectTo={routes.contacts}
            exact
            component={RegisterView}
          />
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={ContactsView}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
