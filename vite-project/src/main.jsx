import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import New from './pages/new';
import Worxmart from './pages/worxmart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },


  {
    path: "/new",
    element: <New />,
  },

  {

    path: "/Worxmart",
    element: <Worxmart />

  }




]);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode >,
)
