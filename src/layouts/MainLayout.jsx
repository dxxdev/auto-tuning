// MainLayout.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Breadcrump from "../components/Breadcrump";

const MainLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [rendered, setRendered] = useState(true);

  const handleRenderChange = () => {
    setRendered(!rendered);
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header rendered={rendered} />
      <main className="grow">
        {!isHome && (
          <div className="md:pt-20 hidden md:block">
            <div className="hidden lg:block">
              <Breadcrump />
            </div>
          </div>
        )}
        <Outlet rendered={handleRenderChange} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
