import ScrollToTop from './components/scrolltop/scrollTop'
import useRouteElements from './routes/useRouteElements'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const routeElements = useRouteElements()
  return (
    <>
      <ScrollToTop />
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
