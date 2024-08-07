import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import { useContext } from 'react'
import BetRecord from '~/pages/BetRecord'
import LotteryHall from '~/pages/LotteryHall'
import My from '~/pages/My'
import New from '~/pages/New'

const useRouteElements = () => {
  function ProtecedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  }
  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        },
        {
          path: 'register',
          element: (
            <LoginLayout>
              <Register />
            </LoginLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )
        },
        {
          path: '/new',
          element: (
            <HomeLayout>
              <New />
            </HomeLayout>
          )
        },
        {
          path: '/betRecord',
          element: (
            <HomeLayout>
              <BetRecord />
            </HomeLayout>
          )
        },
        {
          path: '/lotteryHall',
          element: (
            <HomeLayout>
              <LotteryHall />
            </HomeLayout>
          )
        },
        {
          path: '/my',
          element: (
            <HomeLayout>
              <My />
            </HomeLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
