import React from "react";
import { category, products } from "../data/data";
import Products from "../components/Products";
import { Typography } from "@material-tailwind/react";
import { styles } from "../styles";
import { productNotFound } from "../assets/images";

const Action = ({ rendered }) => {
  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  return (
    <div className={`${styles.container}`}>
      <ul
        className={`py-5 grid grid-cols-4 gap-8 overflow-auto products-swiper`}
      >
        {products.map((product, index) => {
          if (product.inAction) {
            return (
              <Products
                rendered={rendered}
                product={product}
                productId={product.id}
                productName={product.productName}
                productCategory={product.category}
                productImages={product.images}
                productSaved={productSaved}
                productIsItNew={product.isItNew}
                productInAction={product.inAction}
                productRating={product.rating}
                productPrice={product.price}
                productInTheCart={product.inTheCart}
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
          <img src={productNotFound} className="w-32" alt="" />
          <Typography className="text-center w-full" variant="h4" color="gray">
            Hech narsa topilmadi
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Action;
