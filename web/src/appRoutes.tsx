import React from 'react';
import Events from './pages/Events';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Nested from './pages/Nested';

export default [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/events/',
    element: <Events />,
  },
  {
    path: '/events/nested',
    element: <Nested />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
];
