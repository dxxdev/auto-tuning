import React, { useEffect } from "react";
import { styles } from "../styles";
import { Typography } from "@material-tailwind/react";
import { categoryProduct, scrollTop } from "../data/data";
import { Link } from "react-router-dom";
import Questions from "../components/Questions";

const Katalog = () => {
  useEffect(() => {
    document.title = "Katalog";
  }, []);

  return (
    <div className={`py-2 ${styles.container}`}>
      <div>
        <Typography
          variant="h1"
          className="py-5 text-6xl font-normal tracking-[5px]"
        >
          Katalog
        </Typography>
      </div>
      <ul className="grid py-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProduct.map((product) => {
          return (
            <Link onClick={scrollTop} to={`/${product.category}`}>
              <li
                className="rounded-3xl relative group overflow-hidden h-full max-h-96 flex justify-center items-center"
                key={product.id}
              >
                <img
                  className="rounded-3xl transition-all group-hover:scale-110"
                  src={product.image}
                  alt=""
                />
                <div className="absolute top-0 w-full h-full rounded-3xl flex justify-center items-end bg-black bg-opacity-40 text-xs left-0 px-8 py-5 transition-all opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:font-semibold group-hover:text-white">
                  <p>{product.category}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <Questions />
    </div>
  );
};

export default Katalog;
