import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DataPage from '../pages/DataPage';
import EditPage from '../pages/EditPage';
import AllDataPage from '../pages/AllDataPage';
import CreateUserPage from '../pages/CreateUserPage';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import ProtectedRoute from '../features/auth/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },

  {
    path: '/',
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/data/:userId',
    element: (
      <ProtectedRoute>
        {' '}
        <DataPage />
      </ProtectedRoute>
    ),
  },
  { path: '/alldata', element: <AllDataPage /> },
  {
    path: '/edit/:userId',
    element: (
      <ProtectedRoute>
        {' '}
        <EditPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/create',
    element: (
      <ProtectedRoute>
        {' '}
        <CreateUserPage />{' '}
      </ProtectedRoute>
    ),
  },

  {
    path: '/form/:userId',
    element: (
      <ProtectedRoute>
        <FormPage />{' '}
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
