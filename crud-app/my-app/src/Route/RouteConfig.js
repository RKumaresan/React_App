import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const MainPage = lazy(() => import('../Pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('../Pages/AuthPage/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/AuthPage/RegisterPage/RegisterPage'));

export default function RouteConfig() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<PrivateRoute />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path='/login' element={<PublicRoute />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path='/register' element={<PublicRoute />}>
            <Route index element={<RegisterPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}


