import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Number2 from './pages/number2';
import { store } from './Redux/store'
import { Provider } from 'react-redux'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },



  {
    path: "/number2",
    element: <Number2 />,
  },





]);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
