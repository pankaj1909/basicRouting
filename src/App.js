import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { AdminRoutes, CustomerRoutes, VendorRoutes } from './routes';

//TODO Need to create selector for fetching user role
function App() {
  const renderElement = () => {
    const role = 'admin';
    switch (role) {
      case 'admin':
        return AdminRoutes;
      case 'vendor':
        return VendorRoutes;
      case 'customer':
        return CustomerRoutes;
      default:
        return null;
    }
  };

  return <RouterProvider router={renderElement()} />;
}

export default App;
