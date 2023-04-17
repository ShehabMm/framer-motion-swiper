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





const mongoose = require('mongoose');
 
mongoose.connect("mongodb+srv://shehab:<password>@cluster0.ltfvz.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    main.listen(3000);
  })
  .catch( err => {
    console.log(err);
  }); 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode >,
)
