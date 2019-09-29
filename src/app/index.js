import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../middleware/i18n'; // Для мультиязычных проектов
import './main.css';

const MainRoutes = lazy(() => import('../pages'));
const Admin = lazy(() => import('../admin'));

const App = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route component={MainRoutes} />
      </Switch>
    </Suspense>
  );
};

export default App;
