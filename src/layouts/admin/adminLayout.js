import React from 'react';
import { Link, Outlet } from 'react-router-dom';

//TODO This is just sample this will be changed
export const AdminLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">AdminLayout</Link>
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
