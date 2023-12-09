import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrump = () => {
  const location = useLocation();
  const pathArr = location.pathname.split("/");
  const filteredArr = pathArr.filter(path => path !== "");
  const tayyorArr = filteredArr.map(path => path.replaceAll("%20", " "));

  return (
    <div className={`w-full relative max-w-[1440px] mx-auto`}>
      <Breadcrumbs className="bg-white">
        <li>
          <Link className="text-gray-800" to="/">
            Bosh sahifa
          </Link>
        </li>

        {tayyorArr.map((path, index) => {
          return (
            <li key={index}>
              {index !== tayyorArr.length - 1 ? (
                <Link className="text-gray-800" to={path}>
                  {path}
                </Link>
              ) : (
                <p className="text-gray-600 cursor-not-allowed">{path}</p>
              )}
            </li>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrump;
