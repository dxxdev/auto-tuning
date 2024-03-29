import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addCartProduct, options, products, viewProduct } from "../data/data";
import { styles } from "../styles";
import { ToastContainer } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import {
  AddShoppingCartOutlined,
  ArrowBackOutlined,
  ArrowForwardOutlined,
  AttachMoney,
  Bookmark,
  BookmarkBorderOutlined,
  Download,
  RemoveShoppingCartOutlined,
  Star,
  Upload,
} from "@mui/icons-material";
import { Button, Chip, IconButton, Typography } from "@material-tailwind/react";
import Products from "../components/Products";
import Questions from "../components/Questions";

const Category = ({ rendered }) => {
  const { category } = useParams();
  const [render, setRender] = useState(true);
  const [filterCategory, setFilterCategory] = useState([]);
  const [inOrder, setInOrder] = useState(null);
  const recommendProductList = useRef(null);

  const filteredCategory = products.filter((product) => {
    return product.category == category;
  });

  useEffect(() => {
    document.title = category;
    setFilterCategory(filteredCategory);
    setInOrder(null);
  }, [category]);

  const filteredPrice = () => {
    const clonedCategory = [...filteredCategory];

    if (inOrder) {
      clonedCategory.sort((a, b) => a.price - b.price);
    } else if (!inOrder) {
      clonedCategory.sort((a, b) => b.price - a.price);
    }

    setFilterCategory([...clonedCategory]);
  };

  const productSaved = (product) => {
    product.saved = !product.saved;
  };

  return (
    <div className={`${styles.container}`}>
      <div className="py-6 flex space-y-0 sm:space-y-0 justify-between items-center">
        <Typography variant="h3" className="text-2xl sm:text-3xl">
          {filteredCategory[0].category}
        </Typography>
        <Button
          onClick={() => {
            setInOrder(inOrder == null ? !inOrder : !inOrder);
            filteredPrice();
          }}
          aria-label="filtered by price"
          variant="outlined"
          color="gray"
          className="bg-white focus:bg-white/80 hover:bg-white/90 text-xs"
          size="sm"
        >
          {inOrder ? (
            <div>
              <Download fontSize="small" />
              <AttachMoney fontSize="small" />
            </div>
          ) : inOrder == null ? (
            "Saralash"
          ) : (
            <div>
              <Upload fontSize="small" />
              <AttachMoney fontSize="small" />
            </div>
          )}
        </Button>
      </div>
      <ul
        className={`${styles.container} !px-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 gap-y-4 md:gap-y-6 md:gap-3 lg:gap-y-8 lg:gap-5 overflow-auto products-swiper`}
      >
        {filterCategory.map((product) => {
          return (
            <li
              key={product.id}
              className={`rounded-lg bg-white flex flex-col hover:shadow-md space-y-4 card-swiper relative group`}
            >
              <Link
                onClick={() => viewProduct(product)}
                to={`/${product.category}/${product.productName}`}
                className="relative md:static"
              >
                <div className="bg-gray-200 rounded-t-lg overflow-hidden">
                  <Swiper
                    effect="fade"
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination, EffectFade]}
                    className="mySwiper rounded-t-lg"
                  >
                    {product.images.map((item, index) => {
                      return (
                        <SwiperSlide
                          key={index}
                          className="flex h-60 sm:h-[300px] bg-gray-200 w-56 justify-center items-center"
                        >
                          <img
                            src={item}
                            className="xl:w-full aspect-auto h-full sm:h-max"
                            alt={product.productName}
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <div className="flex h-min space-x-1.5 md:space-x-3 absolute left-1.5 md:left-3 md:top-3 bottom-3 z-10">
                    {product.isItNew && (
                      <Chip
                        className="transition-all bg-[#060] duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                        value="Yangi"
                        color="green"
                        size="sm"
                        variant="filled"
                      />
                    )}
                    {product.inAction && (
                      <Chip
                        className="transition-all bg-[#b30000] duration-200 group-hover:bg-opacity-0 group-hover:text-opacity-0"
                        value="Aksiya"
                        size="sm"
                        variant="filled"
                        color="red"
                      />
                    )}
                  </div>
                </div>
              </Link>
              <button
                onClick={() => {
                  setRender((prev) => !prev);
                  productSaved(product);
                  rendered();
                }}
                aria-label="saved button"
                className="absolute top-0 -translate-y-1/2 right-0 z-50 text-[#b30000]"
              >
                {product.saved ? (
                  <Bookmark fontSize="large" />
                ) : (
                  <BookmarkBorderOutlined fontSize="large" />
                )}
              </button>
              <div className="flex flex-col h-full px-1.5 sm:px-3 pb-1.5 sm:pb-3 space-y-3 relative justify-between">
                <Typography
                  variant="h6"
                  className="font-medium max-h-[56px] overflow-hidden"
                >
                  {product.productName}
                </Typography>
                <div>
                  <div className="flex justify-between items-center py-3">
                    <Typography variant="small" className="text-xs">
                      Turkum: {product.category}
                    </Typography>
                    <Typography variant="small" color="black">
                      <span className="flex items-end justify-start space-x-1">
                        <Star className="text-yellow-700" />
                        <span className="text-gray-700">{product.rating}</span>
                      </span>
                    </Typography>
                  </div>
                  <div className="w-full flex justify-between items-end">
                    <Typography variant="h6">
                      {product.price
                        .toLocaleString("uz-UZ", options)
                        .replaceAll(",", " ")}{" "}
                      so'm
                    </Typography>
                    <IconButton
                      onClick={() => {
                        rendered();
                        addCartProduct(product);
                      }}
                      aria-label="buying button"
                      size="sm"
                      variant={`${product.inTheCart ? "filled" : "outlined"}`}
                      color="gray"
                    >
                      {product.inTheCart ? (
                        <RemoveShoppingCartOutlined fontSize="small" />
                      ) : (
                        <AddShoppingCartOutlined fontSize="small" />
                      )}
                    </IconButton>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
        <ToastContainer />
      </ul>
      <section className="py-0 lg:py-5">
        <div className="flex justify-between">
          <Typography variant="h4">Sizga yoqishi mumkin</Typography>
          <div className="flex gap-2 items-center">
            <IconButton
              variant="outlined"
              size="sm"
              className="rounded-full"
              onClick={() => {
                recommendProductList.current.scrollLeft -= 200;
              }}
            >
              <ArrowBackOutlined />
            </IconButton>
            <IconButton
              variant="outlined"
              size="sm"
              className="rounded-full"
              onClick={() => {
                recommendProductList.current.scrollLeft += 200;
              }}
            >
              <ArrowForwardOutlined />
            </IconButton>
          </div>
        </div>
        <ul
          ref={recommendProductList}
          className={`${styles.container} scroll-smooth !px-0 py-5 flex justify-start overflow-hidden gap-5`}
        >
          {products.map((product, index) => {
            if (product.recommend) {
              return (
                <Products
                  card={false}
                  key={index}
                  rendered={rendered}
                  product={product}
                  productId={product.id}
                  productSaved={productSaved}
                />
              );
            }
          })}
        </ul>
      </section>
      <Questions />
    </div>
  );
};

export default Category;
