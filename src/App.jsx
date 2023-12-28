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
import Basket from "./pages/Basket";
import Category from "./pages/Category";
import Saved from "./pages/Saved";
import { products } from "./data/data";
import Katalog from "./pages/Katalog";
import FAQ from "./pages/FAQ";
import Payment from "./pages/Payment";
import Commentaries from "./pages/Commentaries";
import Action from "./pages/Action";

const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";

const App = () => {
  const [render, setRender] = useState(true);
  const rendered = () => setRender((prev) => !prev);
  useEffect(() => {
    rendered();
  }, [products]);

  setInterval(() => {
    console.clear();
  }, 10000);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout rendered={rendered} />}>
        <Route index element={<Home rendered={rendered} />} />
        <Route path="/Savatcha" element={<Basket rendered={rendered} />} />
        <Route path="/Saqlanganlar" element={<Saved />} />
        <Route path="/:category" element={<Category rendered={rendered} />} />
        <Route path="/Katalog" element={<Katalog />} />
        <Route path="/Kompaniya haqida" element={<FAQ />} />
        <Route path="Yetkazib berish va to'lash" element={<Payment />} />
        <Route path="/Sharhlar" element={<Commentaries />} />
        <Route path="/Aksiya" element={<Action />} rendered={rendered} />
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
