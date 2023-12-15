import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Basket from "./pages/Basket";
import Category from "./pages/Category";
import Saved from "./pages/Saved";

const App = () => {
  const [render, setRender] = useState(true);
  const rendered = () => setRender(prev => !prev);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout rendered={rendered} />}>
        <Route index element={<Home rendered={rendered} />} />
        <Route path="/basket" element={<Basket rendered={rendered} />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/:category" element={<Category rendered={rendered} />} />
        <Route
          path="/:category/:productName"
          element={<Detail rendered={rendered} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
