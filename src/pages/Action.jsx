import React, { useEffect } from "react";
import { products } from "../data/data";
import Products from "../components/Products";
import { Typography } from "@material-tailwind/react";
import { styles } from "../styles";
import { productNotFound } from "../assets/images";

const Action = ({ rendered }) => {
  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  useEffect(()=>{
    document.title = "Aksiyalar"
  })

  return (
    <div className={`${styles.container} px-2.5`}>
      <ul
        className={`py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 gap-y-4 md:gap-y-6 md:gap-3 lg:gap-y-8 lg:gap-5`}
      >
        {products.map((product) => {
          if (product.inAction) {
            return (
              <Products
                card={true}
                key={product.id}
                actionPage={true}
                rendered={rendered}
                product={product}
                productSaved={productSaved}
              />
            );
          }
        })}
      </ul>
      {products.filter((product) => product.inAction).length === 0 && (
        <div
          key="noProductFound"
          className="flex py-20 flex-col gap-y-5 w-full min-h-[200px] justify-center items-center"
        >
          <img width="100%" src={productNotFound} className="w-32" alt="" />
          <Typography className="text-center w-full" variant="h4" color="gray">
            Hech narsa topilmadi
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Action;
