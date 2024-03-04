import React, { useEffect } from "react";
import { styles } from "../styles";
import { Button, Typography } from "@material-tailwind/react";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { scrollTop } from "../data/data";

const Payment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Yetkazib berish va to'lash";
  });

  return (
    <div className={`pb-10 ${styles.container} px-3`}>
      <div className="space-y-8">
        <div>
          <Typography
            variant="h1"
            className="py-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-[3px]"
          >
            Yetkazib berish va to'lash
          </Typography>
        </div>

        <div className="flex items-stretch">
          <svg
            className="mr-8 max-440:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <rect width="62" height="62" rx="4" fill="none"></rect>
            <path
              d="M32.22 26.6667C32.025 26.6724 31.8375 26.7504 31.6995 26.8862L27.7425 30.6851L25.305 28.3451C24.6225 27.6604 23.52 28.7178 24.2325 29.3736L27.207 32.2307C27.5025 32.5152 27.9825 32.5152 28.2795 32.2307L32.772 27.9161C33.267 27.4539 32.9025 26.6667 32.2215 26.6667H32.22ZM9.75 32.4444H14.25C14.6655 32.4444 15 32.7666 15 33.1667C15 33.5668 14.6655 33.8889 14.25 33.8889H9.75C9.3345 33.8889 9 33.5668 9 33.1667C9 32.7666 9.3345 32.4444 9.75 32.4444ZM9.75 26.6667H14.25C14.6655 26.6667 15 26.9888 15 27.3889C15 27.789 14.6655 28.1111 14.25 28.1111H9.75C9.3345 28.1111 9 27.789 9 27.3889C9 26.9888 9.3345 26.6667 9.75 26.6667ZM9.75 20.8889H14.25C14.6655 20.8889 15 21.211 15 21.6111C15 22.0112 14.6655 22.3333 14.25 22.3333H9.75C9.3345 22.3333 9 22.0112 9 21.6111C9 21.211 9.3345 20.8889 9.75 20.8889ZM45.75 36.7778C43.6875 36.7778 42 38.4028 42 40.3889C42 42.375 43.6875 44 45.75 44C47.8125 44 49.5 42.375 49.5 40.3889C49.5 38.4028 47.8125 36.7778 45.75 36.7778ZM45.75 38.2222C47.001 38.2222 48 39.1842 48 40.3889C48 41.5936 47.001 42.5556 45.75 42.5556C44.499 42.5556 43.5 41.5936 43.5 40.3889C43.5 39.1842 44.499 38.2222 45.75 38.2222ZM26.25 36.7778C24.1875 36.7778 22.5 38.4028 22.5 40.3889C22.5 42.375 24.1875 44 26.25 44C28.3125 44 30 42.375 30 40.3889C30 38.4028 28.3125 36.7778 26.25 36.7778ZM26.25 38.2222C27.501 38.2222 28.5 39.1842 28.5 40.3889C28.5 41.5936 27.501 42.5556 26.25 42.5556C24.999 42.5556 24 41.5936 24 40.3889C24 39.1842 24.999 38.2222 26.25 38.2222ZM18.75 18C17.517 18 16.5 18.9793 16.5 20.1667V36.0556C16.5 37.2429 17.517 38.2222 18.75 38.2222H21.75C22.764 38.2367 22.764 36.7633 21.75 36.7778H18.75C18.321 36.7778 18 36.4687 18 36.0556V20.1667C18 19.7536 18.321 19.4444 18.75 19.4444H38.25C38.679 19.4444 39 19.7536 39 20.1667V36.7778H30.75C29.76 36.7778 29.778 38.2367 30.75 38.2222H41.25C42.24 38.2222 42.231 36.7778 41.25 36.7778H40.5V23.7778H46.8405L52.5 32.2942V36.0556C52.5 36.4687 52.179 36.7778 51.75 36.7778H50.25C49.269 36.7778 49.269 38.2222 50.25 38.2222H51.75C52.983 38.2222 54 37.2429 54 36.0556V32.0833C54 31.9461 53.9595 31.8089 53.883 31.6933L47.883 22.6656C47.745 22.459 47.508 22.3333 47.25 22.3333H40.5V20.1667C40.5 18.9793 39.483 18 38.25 18H18.75Z"
              fill="#b30000"
            ></path>
          </svg>
          <Typography
            variant="h3"
            className="font-medium text-xl md:text-3xl border-b-2 border-b-[#b30000] flex items-center box-border"
          >
            Buyurtma
          </Typography>
        </div>

        <div className="space-y-4">
          <Typography
            variant="h4"
            className="font-normal text-xl md:text-2xl tracking-[1px]"
          >
            Toshkent bo'ylab yetkazib berish
          </Typography>
          <p className="text-gray-700 max-w-screen-md">
            Biz, avto tovarlarni onlayn ravishda sotib olish imkoniyatini taklif
            etamiz. Mijozlarimiz istalgan vaqt, istalgan joydan bizning
            mahsulotlarimizni sotib olishlari mumkin.
          </p>
        </div>
        <div className="space-y-4">
          <Typography
            variant="h4"
            className="font-normal text-xl md:text-2xl tracking-[1px]"
          >
            Boshqa hududlar
          </Typography>
          <p className="text-gray-700 max-w-screen-md">
            Tez va xavfsiz yetkazib berish xizmatimiz bilan avto modifikatsiya
            mahsulotlaringizni yirik vaqt yo'qotmaysiz
          </p>
        </div>
        <div className="space-y-4">
          <Typography
            variant="h4"
            className="font-normal text-xl md:text-2xl tracking-[1px]"
          >
            Kompaniyadan olib ketish
          </Typography>
          <p className="text-gray-700 max-w-screen-md">
            Buyurtmani quyidagi manzildan olishingiz mumkin: <br />
            Toshkent sh
          </p>
          <p className="text-gray-700 max-w-screen-md">
            Ish vaqti: <br />
            ish kunlari 09:00 dan 18:00 gacha, yakshanba kuni 10:00 dan 15:00
            gacha.
          </p>
        </div>
        <div className="flex items-stretch">
          <svg
            className="mr-8 max-440:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
          >
            <rect width="62" height="62" rx="4" fill="none"></rect>
            <path
              d="M50.6862 16H11.3138C10.4353 16.001 9.59298 16.3453 8.97175 16.9573C8.35052 17.5693 8.00105 18.3991 8 19.2646V42.8123C8.00105 43.6778 8.35052 44.5076 8.97175 45.1196C9.59298 45.7316 10.4353 46.0759 11.3138 46.0769H50.6862C51.5648 46.0759 52.407 45.7316 53.0283 45.1196C53.6495 44.5076 53.999 43.6778 54 42.8123V23.1181C54 22.9202 53.9202 22.7304 53.7781 22.5905C53.6361 22.4505 53.4434 22.3719 53.2425 22.3719H9.51371V19.2646C9.51441 18.7945 9.70429 18.3438 10.0417 18.0114C10.3792 17.679 10.8366 17.4919 11.3138 17.4912H50.6862C51.1634 17.4919 51.6208 17.679 51.9583 18.0114C52.2957 18.3438 52.4856 18.7945 52.4863 19.2646V20.3775C52.4944 20.5699 52.5777 20.7517 52.7188 20.8849C52.8598 21.0182 53.0477 21.0926 53.2431 21.0926C53.4386 21.0926 53.6264 21.0182 53.7675 20.8849C53.9085 20.7517 53.9918 20.5699 54 20.3775V19.2685C54 18.4023 53.651 17.5715 53.0296 16.9587C52.4083 16.3458 51.5654 16.001 50.6862 16ZM50.6862 44.5857H11.3138C10.8366 44.585 10.3792 44.3979 10.0417 44.0655C9.70429 43.7331 9.51441 43.2824 9.51371 42.8123V30.2012H52.4863V42.8123C52.4856 43.2824 52.2957 43.7331 51.9583 44.0655C51.6208 44.3979 51.1634 44.585 50.6862 44.5857ZM52.4863 23.8631V28.7126H9.51371V23.8631H52.4863Z"
              fill="#b30000"
            ></path>
            <path
              d="M28.4972 33.6928H18.5349C18.4309 33.6903 18.3271 33.6999 18.2297 33.721C18.1323 33.742 18.0433 33.7742 17.9682 33.8155C17.893 33.8568 17.8332 33.9063 17.7924 33.9612C17.7515 34.016 17.7305 34.0751 17.7305 34.1347C17.7305 34.1943 17.7515 34.2534 17.7924 34.3082C17.8332 34.3631 17.893 34.4126 17.9682 34.4539C18.0433 34.4952 18.1323 34.5273 18.2297 34.5484C18.3271 34.5695 18.4309 34.5791 18.5349 34.5766H28.4905C28.6895 34.5719 28.8777 34.5232 29.0156 34.4409C29.1535 34.3585 29.2305 34.2488 29.2305 34.1347C29.2305 34.0206 29.1535 33.9109 29.0156 33.8285C28.8777 33.7462 28.6895 33.6975 28.4905 33.6928H28.4972Z"
              fill="#b30000"
            ></path>
            <path
              d="M32.7335 33.9652C32.722 33.9386 32.7087 33.9128 32.6935 33.8881C32.6767 33.8644 32.6581 33.842 32.638 33.8211C32.6176 33.8008 32.5951 33.7828 32.5709 33.7672C32.5468 33.7508 32.521 33.7371 32.4939 33.7263C32.4672 33.7147 32.4393 33.7062 32.4107 33.7009C32.3395 33.6867 32.2659 33.6903 32.1964 33.7112C32.127 33.7322 32.0637 33.7699 32.0123 33.8211C31.9921 33.842 31.9736 33.8644 31.9568 33.8881C31.9416 33.9128 31.9282 33.9386 31.9167 33.9652C31.906 33.9922 31.8975 34.02 31.8913 34.0484C31.8858 34.0768 31.8829 34.1057 31.8828 34.1347C31.8829 34.1634 31.8858 34.1921 31.8913 34.2202C31.8972 34.2487 31.9057 34.2765 31.9167 34.3034C31.9282 34.3301 31.9416 34.3558 31.9568 34.3805C31.9734 34.4043 31.9919 34.4268 32.0123 34.4475C32.0954 34.5297 32.2074 34.5762 32.3244 34.577C32.3533 34.5773 32.3823 34.5744 32.4107 34.5685C32.4391 34.5625 32.4669 34.554 32.4939 34.5431C32.5208 34.5322 32.5466 34.5188 32.5709 34.503C32.5951 34.4869 32.6176 34.4683 32.638 34.4475C32.6583 34.4268 32.6769 34.4043 32.6935 34.3805C32.7087 34.3558 32.722 34.3301 32.7335 34.3034C32.7445 34.2765 32.753 34.2487 32.759 34.2202C32.7645 34.1921 32.7673 34.1634 32.7674 34.1347C32.7673 34.1057 32.7645 34.0768 32.759 34.0484C32.7527 34.02 32.7442 33.9922 32.7335 33.9652Z"
              fill="#b30000"
            ></path>
            <path
              d="M36.2725 33.9652C36.2614 33.9383 36.2478 33.9125 36.2317 33.8881C36.2152 33.8645 36.1969 33.8421 36.1771 33.8211C36.1255 33.7699 36.0622 33.7322 35.9927 33.7112C35.9231 33.6903 35.8495 33.6867 35.7783 33.7009C35.75 33.7062 35.7223 33.7147 35.6959 33.7263C35.6687 33.7368 35.6429 33.7505 35.6189 33.7672C35.5946 33.7827 35.5719 33.8008 35.5512 33.8211C35.5311 33.8419 35.5128 33.8643 35.4965 33.8881C35.4808 33.9125 35.4674 33.9383 35.4565 33.9652C35.4455 33.9921 35.437 34.02 35.4311 34.0484C35.4253 34.0768 35.4222 34.1057 35.4219 34.1347C35.4222 34.1635 35.4253 34.1921 35.4311 34.2202C35.4367 34.2488 35.4452 34.2767 35.4565 34.3035C35.4673 34.3305 35.481 34.3564 35.4973 34.3805C35.5129 34.4047 35.531 34.4272 35.5512 34.4476C35.5718 34.4683 35.5945 34.4869 35.6189 34.503C35.6431 34.5191 35.6689 34.5326 35.6959 34.5431C35.7226 34.554 35.7501 34.5625 35.7783 34.5685C35.8352 34.5798 35.8938 34.5798 35.9507 34.5685C35.9789 34.5625 36.0065 34.554 36.0331 34.5431C36.0602 34.5326 36.086 34.5191 36.1101 34.503C36.1345 34.4869 36.1572 34.4683 36.1778 34.4476C36.1979 34.4268 36.2162 34.4043 36.2325 34.3805C36.2483 34.3562 36.2617 34.3304 36.2725 34.3035C36.2839 34.2767 36.2924 34.2488 36.2979 34.2202C36.3042 34.1922 36.3071 34.1635 36.3064 34.1347C36.3071 34.1057 36.3042 34.0767 36.2979 34.0484C36.2924 34.0199 36.2839 33.992 36.2725 33.9652Z"
              fill="#b30000"
            ></path>
            <path
              d="M40.6624 33.9652C40.6394 33.9386 40.6126 33.9128 40.5822 33.8881C40.5491 33.8643 40.512 33.8418 40.4713 33.8211C40.3684 33.7699 40.2419 33.7322 40.1029 33.7112C39.964 33.6903 39.8168 33.6867 39.6745 33.7009C39.6173 33.7063 39.5615 33.7149 39.508 33.7263C39.4539 33.7371 39.4022 33.7508 39.3539 33.7672C39.3059 33.783 39.261 33.801 39.2199 33.8211C39.1796 33.842 39.1425 33.8644 39.1089 33.8881C39.0784 33.9127 39.0521 33.9384 39.0303 33.9652C39.0075 33.992 38.9905 34.0199 38.9794 34.0484C38.9671 34.0768 38.9609 34.1057 38.9609 34.1347C38.9609 34.1635 38.9671 34.1921 38.9794 34.2202C38.9898 34.2489 39.0069 34.2768 39.0303 34.3034C39.0521 34.3302 39.0784 34.356 39.1089 34.3805C39.1421 34.4043 39.1792 34.4268 39.2199 34.4475C39.2609 34.4681 39.3058 34.4867 39.3539 34.503C39.4026 34.5188 39.4542 34.5322 39.508 34.5431C39.562 34.5539 39.6177 34.5624 39.6745 34.5685C39.7312 34.5744 39.7891 34.5773 39.8471 34.577C40.081 34.5763 40.3051 34.5299 40.4713 34.4475C40.5123 34.427 40.5495 34.4045 40.5822 34.3805C40.6126 34.3558 40.6394 34.3301 40.6624 34.3034C40.6851 34.2767 40.7021 34.2488 40.7132 34.2202C40.7243 34.1921 40.73 34.1634 40.7302 34.1347C40.7299 34.1057 40.7243 34.0768 40.7132 34.0484C40.7014 34.0199 40.6844 33.9921 40.6624 33.9652Z"
              fill="#b30000"
            ></path>
          </svg>
          <Typography
            variant="h3"
            className="font-medium text-xl md:text-3xl border-b-2 border-b-[#b30000] flex items-center box-border"
          >
            To'lov
          </Typography>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 max-w-screen-md">
            Siz onlayn-do'kon ofisida yoki tovarlarni olganingizdan so'ng, naqd
            yoki bank o'tkazmasi orqali to'lashingiz mumkin.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="space-y-3">
          <div>
            <Typography
              variant="h3"
              className="py-5 text-2xl md:text-3xl font-normal tracking-[1px]"
            >
              Bog'lanish
            </Typography>
            <div className="space-y-3">
              <p className="text-gray-700 max-w-screen-md">
                Manzil:
                <span className="text-black">
                  Toshkent sh, Amir Temur k. 47b. Mo'ljal Chorsu bozori
                  ro'parasida
                </span>
              </p>
              <p className="text-gray-700 max-w-screen-md">
                Telefon raqam: <br />
                <a href="tel:+998992701032" className="text-black">
                  +998 (99) 270-10-32
                </a>
              </p>
              <p className="text-gray-700 max-w-screen-md">
                Elektron pochta: <br />
                <a
                  className="text-black"
                  href="mailto:diyorbekxojamberdiyevn1@gmail.com"
                >
                  diyorbekxojamberdiyevn1@gmail.com
                </a>
              </p>
              <p className="text-gray-700 max-w-screen-md">
                Ish vaqti: <br />
                <span className="text-black">
                  du - shan: 9:00dan 18:00gacha
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-x-4">
            <a
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-green-500 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center"
              href="https://whatsapp.com"
            >
              <WhatsApp />
            </a>
            <a
              href="https://vk.com"
              className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-2xl text-xs bg-white text-blue-gray-900 shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
                viewBox="0 0 448 512"
                fill="#0277FF"
              >
                <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z" />
              </svg>
            </a>
            <Button
              onClick={() => {
                navigate("/Katalog");
                scrollTop();
              }}
              aria-label="catalog page button"
              variant="filled"
              className="bg-[#b30000]"
              color="red"
            >
              Sotib olish
            </Button>
          </div>
        </div>
        <div className="h-96 rounded-2xl sceleton-animation lg:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2151898393695!2d69.19256677757666!3d41.282420887019306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b684b728b05%3A0x447c755a6628d746!2sAuto%20Tuning%20Centre%20service!5e0!3m2!1suz!2s!4v1703741135199!5m2!1suz!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            className="rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Payment;
