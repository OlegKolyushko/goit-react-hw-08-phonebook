import {lazy} from 'react';

export default [
    {
        path: '/register',
        label: 'Register',
        exact: true,
        component: lazy(() => import('./views/RegisterView')),
        privat: false,
        restricted: true,
    },
    {
        path: '/login',
        label: 'Login',
        exact: true,
        component: lazy(() => import('./views/LoginView')),
        privat: false,
        restricted: true,
    },
    {
        path: '/contacts',
        label: 'Contacts',
        exact: true,
        component: lazy(() => import('./views/ContactsView')),
        privat: true,
        restricted: false,
    },
];