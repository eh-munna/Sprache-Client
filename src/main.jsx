import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router/Router.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
