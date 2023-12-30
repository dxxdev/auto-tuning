import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollTop } from "../data/data";

const Breadcrump = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const filteredArr = pathArr.filter((path) => path !== "");
  const tayyorArr = filteredArr.map((path) => {
    let lastProductName;
    lastProductName = path.replaceAll("%20", " ");
    lastProductName = lastProductName.replaceAll("%22", `"`);
    return lastProductName;
  });

  return (
    <div className={`w-full relative max-w-[1440px] mx-auto`}>
      <Breadcrumbs className="bg-white">
        <Link className="text-gray-800" onClick={scrollTop} to="/">
          Bosh sahifa
        </Link>
        {tayyorArr.map((path, index) => {
          return index !== tayyorArr.length - 1 ? (
            <Link onClick={scrollTop} key={index} className="text-gray-800" to={path}>
              {path}
            </Link>
          ) : (
            <p key={index} className="text-gray-600 cursor-not-allowed">
              {path == "policy" ? "Maxfiylik siyosati" : path}
            </p>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrump;
