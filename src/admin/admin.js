import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import AdminPages from './pages';
import PrivateRoute from './pages/private-route';

const Admin = ({ match }) => {
  return (
        <>
        <Switch>
          <Route path={`${match.path}/login`} component={Login} />
          <Route path={`${match.path}/reset-password/:token`} component={ResetPassword} />
          <PrivateRoute component={AdminPages} />
        </Switch>
        </>
  );
};

export default Admin;
