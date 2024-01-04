import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Breadcrump from "../components/Breadcrump";

const MainLayout = ({ rendered }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header rendered={rendered} />
      <main className="grow bg-[#d9d9d9]">
        {!isHome && (
          <div className="md:pt-20 hidden md:block">
            <div className="hidden lg:block">
              <Breadcrump />
            </div>
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
