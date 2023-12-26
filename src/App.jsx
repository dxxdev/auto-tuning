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

const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";

const App = () => {
  const [render, setRender] = useState(true);
  const rendered = () => setRender((prev) => !prev);
  useEffect(() => {
    rendered();
  }, [products]);

  useEffect(() => {
    const sendUpdateToTelegram = async () => {
      try {
        // Yangilik matni
        const text = "Bu yerda yangilik yoziladi";

        // Telegram Bot API ga yangilik yuborish
        await axios.post(
          `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
          {
            chat_id: chatId,
            text: text,
          }
        );

        console.log("Yangilik yuborildi!");
      } catch (error) {
        console.error("Yangilik yuborishda xatolik:", error.message);
      }
    };

    // Yangilik yuborishni chaqirish
    sendUpdateToTelegram();
  }, []); // useEffect faqat bir marta ishga tushiriladi
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout rendered={rendered} />}>
        <Route index element={<Home rendered={rendered} />} />
        <Route path="/Savatcha" element={<Basket rendered={rendered} />} />
        <Route path="/Saqlanganlar" element={<Saved />} />
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
