// React
import React from 'react';
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
// Api
import { productsData } from './api/Api';
// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './components/Product';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Informations from './pages/Informations';
import Error from './pages/Error';
// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SignUp from './pages/SignUp';


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element:<Profile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/informations",
        element: <Informations />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/*",
        element: <Error />,
      },
    ]
  }
])

const App = () => {
  return (
    <div className="font-bodyfont">
        <RouterProvider router={router} />
    </div>
  );
};

export default App;