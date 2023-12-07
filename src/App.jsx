import React, { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { products } from "./data/data";
import Basket from "./pages/Basket";

const App = () => {
  const [render, setRender] = useState([]);
  useEffect(() => {
    setRender(prev => !prev);
  }, [products]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/:productName" element={<Detail />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
