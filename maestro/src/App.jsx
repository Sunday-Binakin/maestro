
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar'
import Navbar from './components/Navbar'  
import Pickup1 from './pages/Pickup1'
import Pickup2 from './pages/Pickup2'
import Pickup3 from './pages/Pickup3'
import Describe1 from './pages/Describe1'
import Describe2 from './pages/Describe2'
import Describe3 from './pages/Describe3'
import Describe4 from './pages/Describe4'
import Describe5 from './pages/Describe5'
import Describe6 from './pages/Describe6'
import Describe7 from './pages/Describe7'
import Describe8 from './pages/Describe8'
import Location1 from './pages/Location1'
import Location2 from './pages/Location2'
import Location3 from './pages/Location3'
import Location4 from './pages/Location4'
import Payments1 from './pages/Payments1'
import Payments2 from './pages/Payments2'

function App() {
 
const router = createBrowserRouter([
  { 
    path: '/',
    element: <Sidebar />,

  },
  {
    path: '/navbar',
    element: <Navbar />,
  },
  
  {
    path: '/pickup1',
    element: <Pickup1 />,
  },
  {
    path: '/pickup2',
    element: <Pickup2 />,
  },
  {
    path: '/pickup3',
    element: <Pickup3 />,
  },
  {
    path: '/describe1',
    element: <Describe1 />,
  },
  {
    path: '/describe2',
    element: <Describe2 />,
  },
  {
    path: '/describe3',
    element: <Describe3 />,
  },
  {
    path: '/describe4',
    element: <Describe4 />,
  },
  {
    path: '/describe5',
    element: <Describe5 />,
  },
  {
    path: '/describe6',
    element: <Describe6 />,
  },
  {
    path: '/describe7',
    element: <Describe7 />,
  },
  {
    path: '/describe8',
    element: <Describe8 />,
  },
  {
    path: '/location1',
    element: <Location1 />,
  },
  {
    path: '/location2',
    element: <Location2 />,
  },
  {
    path: '/location3',
    element: <Location3 />,
  },
  {
    path: '/location4',
    element: <Location4 />,
  },
  {
    path: '/payments1',
    element: <Payments1 />,
  },
  {
    path: '/payments2',
    element: <Payments2 />,
  },
])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
