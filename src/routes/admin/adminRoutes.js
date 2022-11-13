import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useRouteError,
} from 'react-router-dom';
import { AdminLayout } from '../../layouts';

//TODO Elements needs to be replaced

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const AdminRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AdminLayout />}>
      <Route index element={<>Home Page</>} />
      <Route
        path="about"
        element={<>About</>}
        loader={({ params }) => {
          console.log(params);
        }}
        errorElement={<ErrorBoundary />}
      />
      <Route path="login" element={<>Login Page</>} />
      <Route path="*" element={<>Not found</>} />
    </Route>
  )
);

export { AdminRoutes };
