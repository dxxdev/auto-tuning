import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Breadcrump from "../components/Breadcrump";

const MainLayout = ({ rendered }) => {
  const location = useLocation();
  const home = location.pathname == "/";
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header rendered={rendered} />
      <main className="grow">
        {!home && (
          <div className="md:pt-20 hidden md:block">
            <Breadcrump />
          </div>
        )}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
