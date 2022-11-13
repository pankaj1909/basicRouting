import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//TODO This is just sample this will be changed
export const VendorLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">VendorLayout</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
