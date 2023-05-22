import React  from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { CheckoutsRoutes } from '../checkouts'


export const AppRouter = () => {
  return (
    <React.Fragment>

        <Routes>
            <Route path="/" element={
                <PublicRoute>
                  {/* <LoginPage /> */}
                  <Routes>
                    <Route path="/" element={<LoginPage />} />
                  </Routes>
                </PublicRoute>
              }
            />
            
            <Route path="/*" element={
              <PrivateRoute>
                <CheckoutsRoutes />
              </PrivateRoute>
            } />

        </Routes>
    
    </React.Fragment>
  )
}
