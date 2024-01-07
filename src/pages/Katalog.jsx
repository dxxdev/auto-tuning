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
          className="py-2 lg:py-5 text-3xl md:text-5xl lg:text-6xl font-normal tracking-[5px]"
        >
          Katalog
        </Typography>
      </div>
      <ul className="grid py-4 lg:py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 lg:gap-7">
        {categoryProduct.map((product) => {
          return (
            <Link key={product.id} onClick={scrollTop} to={`/${product.category}`}>
              <li
                className="rounded-3xl relative group overflow-hidden h-full max-h-56  flex justify-center items-center"
                key={product.id}
              >
                <img
                  className="rounded-3xl transition-all group-hover:scale-110"
                  src={product.image}
                  alt=""
                />
                <div className="absolute top-0 w-full h-full rounded-3xl flex justify-center items-end bg-black bg-opacity-40 text-3xl left-0 px-8 py-5 text-white">
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
