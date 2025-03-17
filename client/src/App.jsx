import React from 'react';
import Header from './components/shared/Header';
import { Toaster } from './components/ui/sonner';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Toaster />
    </>
  );
};

export default App;