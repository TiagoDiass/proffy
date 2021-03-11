import React from 'react';
import './assets/styles/global.scss';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
};

export default App;
