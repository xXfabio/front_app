import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'

import { RouterProvider } from 'react-router-dom'

import 'bootswatch/dist/cyborg/bootstrap.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
