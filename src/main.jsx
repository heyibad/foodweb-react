import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu.jsx'
import Contact from './components/Contact/Contact.jsx'
import Faq from './components/Faq/Faq.jsx'

const route = createBrowserRouter([{ 
  path: '/', 
  element: <App/>,
  children: [
{
  path: '',
  element: <Home/>
},
{
  path: '/menu',
  element: <Menu/>
},
{
  path: '/contact',
  element: <Contact/>
},
{
  path: '/faq',
  element: <Faq/>
}

  ]


}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
