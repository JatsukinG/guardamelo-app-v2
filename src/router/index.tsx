import { createBrowserRouter, Outlet } from 'react-router-dom'
import NotFoundPage from '@/pages/404'
import AuthLayout from '@/layouts/auth'
import MainLayout from '@/layouts/main'
import LoginPage from '@/pages/auth/login'
import MeProvider from '@auth/contexts/MeProvider'
import AuthProvider from '@auth/contexts/AuthProvider'
import ProtectedRoutes from '@/router/ProtectedRoutes'


const router = createBrowserRouter([
  {
    path: 'auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
    ],
  },
  {
    path: '',
    element: (
        <AuthProvider>
          <MeProvider>
            <MainLayout>
              <ProtectedRoutes/>
            </MainLayout>
          </MeProvider>
        </AuthProvider>
    ),
    children: [
      {
        path: '',
        element: <></>,
      },
      // {
      //   path: 'projects',
      //   children: [
      //     {
      //       path: '',
      //       element: <ProjectsPage/>,
      //     },
      //     {
      //       path: ':projectId',
      //       children: [
      //         {
      //           path: 'notes',
      //           children: [
      //             {
      //               path: '',
      //               element: <NotesPage/>,
      //             },
      //             {
      //               path: ':noteId',
      //               element: <NotePage/>,
      //             },
      //             {
      //               path: 'create',
      //               element: <CreateNotePage/>,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: 'resources',
      //   children: [
      //     {
      //       path: '',
      //       element: <ResourcesPage/>,
      //     },
      //     {
      //       path: ':resourceId',
      //       element: <ResourcePage/>,
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
])

export default router