import React from 'react';
import './assets/styles/global.scss';
import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => {
  return (
    <>
      <Routes />;
      <ToastContainer />
    </>
  );
};

// position='top-right'
//         autoClose={4500}
//         hideProgressBar={false}
//         closeOnClick
//         pauseOnHover

export default App;
