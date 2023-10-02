import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//route components
import Root from './routes/root'
import Index from './routes/index'
import Projects from './routes/cardDetails'
import Donations from './routes/myDonations'
import Stats from './routes/stats'

//loaders
import { allDataLoader } from './routes/index'
import { mainDataLoader } from './routes/root'
import { projectDataLoader } from './routes/cardDetails'
import { donationDataLoader } from './routes/myDonations'
import { statDataLoader } from './routes/stats'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: mainDataLoader,
    children: [
      {
        index: true, 
        element: <Index />,
        loader: allDataLoader
      },
      {
        path: '/projects/:projectId',
        element: <Projects />,
        loader: projectDataLoader
      },
      {
        path: '/donations',
        element: <Donations />,
        loader: donationDataLoader
      },
      {
        path: '/stats',
        element: <Stats />,
        loader: statDataLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes} />
  </React.StrictMode>,
)
