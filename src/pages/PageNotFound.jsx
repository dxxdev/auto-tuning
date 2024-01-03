import React, { useEffect } from "react";
import { styles } from "../styles";
import { productNotFound } from "../assets/images";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Not found";
  }, []);
  return (
    <div
      className={`${styles.container} py-10 space-y-5 flex flex-col justify-center items-center`}
    >
      <img className="w-full max-w-xs" src={productNotFound} />
      <Typography variant="h3">Sahifa topilmadi</Typography>
      <Button variant="gradient" onClick={() => navigate("/")} color="red">
        Bosh sahifa
      </Button>
    </div>
  );
};

export default PageNotFound;
