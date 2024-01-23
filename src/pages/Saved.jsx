import React, { useEffect, useState } from "react";
import { products, scrollTop } from "../data/data";
import { Button, Typography } from "@material-tailwind/react";
import { styles } from "../styles";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Products from "../components/Products";

const Saved = ({ rendered }) => {
  const [render, setRender] = useState(true);
  const [inTheCartProduct, setInTheCartProduct] = useState([]);
  const navigate = useNavigate();
  const filteredProductOnCart = (arr) => {
    const filteredProduct = arr.filter((product) => {
      return product.saved;
    });
    setInTheCartProduct(filteredProduct);
  };

  useEffect(() => {
    filteredProductOnCart(products);
    rendered((prev) => !prev);
    setRender((prev) => !prev);
  }, [render]);

  return (
    <div className={`${styles.container} py-2 pb-5`}>
      <Typography
        variant="h1"
        className="py-5 px-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal tracking-[2px] sm:tracking-[3px] md:tracking-[4px]"
      >
        Saqlanganlar
      </Typography>
      {inTheCartProduct && inTheCartProduct.length > 0 && (
        <ul
          className={`${styles.container} !px-0 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3`}
        >
          {inTheCartProduct.map((product) => {
            if (product.saved) {
              return (
                <Products rendered={setRender} card={true} product={product} />
              );
            }
          })}
        </ul>
      )}
      {inTheCartProduct.length <= 0 && (
        <div className="flex flex-col justify-between items-center space-y-10">
          <Typography
            variant="lead"
            className="w-full text-base max-w-sm text-center"
          >
            Saqlanganlar yo'q
          </Typography>
          <Button
            aria-label="back to home"
            className="w-full sm:w-max from-[#b30000] to-[#b00]"
            onClick={() => {
              navigate("/");
              scrollTop();
            }}
            size="sm"
            variant="gradient"
            color="red"
          >
            Bosh sahifaga o'tish
          </Button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Saved;
