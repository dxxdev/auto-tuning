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
      className={`${styles.container} !px-0 py-10 space-y-5 flex flex-col justify-center items-center`}
    >
      <div className="w-80 h-80">
        <img
          width="100%"
          height="100%"
          src={productNotFound}
          alt="Not found img"
        />
      </div>
      <Typography variant="h3">Sahifa topilmadi</Typography>
      <Button variant="gradient" onClick={() => navigate("/")} color="red">
        Bosh sahifa
      </Button>
    </div>
  );
};

export default PageNotFound;
