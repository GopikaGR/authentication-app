import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/components/dashboard';
import RegistrationForm from './Registration';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
