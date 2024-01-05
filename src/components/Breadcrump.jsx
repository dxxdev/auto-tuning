import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { category, products, scrollTop } from "../data/data";

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

  const companyArr = [
    "Kompaniya haqida",
    "Savatcha",
    "Saqlanganlar",
    "Katalog",
    "Yetkazib berish va to'lash",
    "Sharhlar",
    "policy",
    "Aksiya",
  ];

  return (
    <div
      className={`w-full relative max-w-[1440px] mx-auto ${
        products.includes(tayyorArr[0])
          ? "block"
          : companyArr.includes(tayyorArr[tayyorArr.length - 1])
          ? "hidden"
          : products
              .map((product) => product.productName)
              .includes(tayyorArr[tayyorArr.length - 1])
          ? "block"
          : category.includes(tayyorArr[tayyorArr.length - 1])
          ? "block"
          : "hidden"
      }`}
    >
      <Breadcrumbs className="bg-[#eaf4f4]">
        {category.includes(tayyorArr[0]) && (
          <Link className="text-gray-900" onClick={scrollTop} to="/">
            Bosh sahifa
          </Link>
        )}
        {tayyorArr.map((path, index) => {
          return index !== tayyorArr.length - 1
            ? category.includes(path) && (
                <Link
                  onClick={scrollTop}
                  key={index}
                  className="text-gray-900"
                  to={path}
                >
                  {path}
                </Link>
              )
            : !companyArr.includes(path) && (
                <p key={index} className="text-gray-700 cursor-not-allowed">
                  {path}
                </p>
              );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrump;
