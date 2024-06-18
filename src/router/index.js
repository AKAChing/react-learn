import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/pages/layout'
import LoginPage from '@/pages/login'
import RegisterPage from '@/pages/register'
import HomePage from '@/pages/home'
import CommentPage from '@/pages/comment'
import NotFound from '@/pages/404'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        // path: '/home',
        index: true,
        element: <HomePage/>
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/register',
        element: <RegisterPage/>
      },
      {
        path: '/comment',
        element: <CommentPage/>
      }
    ]
  },
  {
    path: '/home',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register/:id',
    element: <RegisterPage/>
  },
  {
    path: '/comment',
    element: <CommentPage/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export { router, RouterProvider }