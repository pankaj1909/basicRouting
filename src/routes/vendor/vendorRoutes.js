import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { VendorLayout } from '../../layouts';

//TODO Elements needs to be replaced

const VendorRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<VendorLayout />}>
      <Route index element={<>Home Page</>} />
      <Route path="about" element={<>About Page</>} />
      <Route path="login" element={<>Login Page</>} />
      <Route path="*" element={<>Not found</>} />
    </Route>
  )
);

export { VendorRoutes };
