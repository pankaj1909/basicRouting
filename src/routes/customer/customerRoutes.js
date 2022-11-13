import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { CustomerLayout } from '../../layouts';

//TODO Elements needs to be replaced

const CustomerRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CustomerLayout />}>
      <Route index element={<>Home Page</>} />
      <Route path="about" element={<>About Page</>} />
      <Route path="login" element={<>Login Page</>} />
      <Route path="*" element={<>Not found</>} />
    </Route>
  )
);

export { CustomerRoutes };
