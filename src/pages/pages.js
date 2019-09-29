import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../modules/header';
import Footer from '../modules/footer';

// ========================================= Страницы =========================================
const Home = lazy(() => import('../pages/home'));
const Contact = lazy(() => import('../pages/contact'));
const About = lazy(() => import('../pages/about'));
const NotFound = lazy(() => import('../pages/404'));

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

export default MainRoutes;
