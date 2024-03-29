import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './components/14.router/Home';
import NotFound from './components/14.router/NotFound';
import Product from './components/14.router/Product';
import Menu from './components/14.router/Menu';
import Root from './components/14.router/Root';
import ProductInfo from './components/14.router/ProductInfo';

const RouterApp = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //     errorElement: <NotFound />,
  //   },
  //   {
  //     path: '/product',
  //     element: <Product />,
  //   },
  // ]);
  const linkRouter = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: '/product', element: <Product /> },
        { path: '/product/:productId', element: <ProductInfo /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={linkRouter} />
      {/* <RouterProvider router={router} /> */}
    </>
  );
};

export default RouterApp;
