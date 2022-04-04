import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../pages/Main';
import Login from '../pages/Login';

function Router() {
  return(
    <Routes>
      <Route exact path="/" element={ <Main /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  )
};

export default Router;