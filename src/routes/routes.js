import { lazy } from 'react';

const routes = [
  {
    name: 'Home',
    exact: true,
    restricted: false,
    priv: false,
    isNavLink: true,
    path: '/',
    component: lazy(() =>
      import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
    ),
  },
  {
    name: 'Contacts',
    exact: true,
    priv: true,
    redirectTo: '/login',
    restricted: false,
    isNavLink: true,
    path: '/contacts',
    component: lazy(() =>
      import('../pages/ContactsPage' /* webpackChunkName: "ContactsPage" */),
    ),
  },
  {
    name: 'Login',
    exact: true,
    restricted: true,
    priv: false,
    redirectTo: '/contacts',
    isNavLink: false,
    path: '/login',
    component: lazy(() =>
      import('../pages/LoginPage' /* webpackChunkName: "LoginPage" */),
    ),
  },
  {
    name: 'Register',
    exact: true,
    restricted: true,
    priv: false,
    redirectTo: '/contacts',
    isNavLink: false,
    path: '/register',
    component: lazy(() =>
      import(
        '../pages/RegistrationPage' /* webpackChunkName: "RegisterPage" */
      ),
    ),
  },
];

export default routes;
