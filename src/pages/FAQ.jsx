import React, { useEffect } from "react";
import { styles } from "../styles";
import { Button, Rating, Typography } from "@material-tailwind/react";
import { autoTuning, autoTuning1, companies } from "../assets/images";
import { commentaries, scrollTop } from "../data/data";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kompaniya haqida";
  }, []);

  return (
    <div className={`${styles.container} py-5 space-y-14`}>
      <div className="flex flex-col items-stretch lg:flex-row gap-x-12 gap-y-8 lg:justify-between">
        <div className="flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-10">
          <Typography
            variant="h1"
            className="text-2xl sm:text-3xl px-2 sm:px-0 lg:text-4xl xl:text-5xl"
          >
            Kompaniya haqida
          </Typography>
          <div className="w-full h-full flex flex-col max-w-full lg:max-w-3xl space-y-5 lg:space-y-0 lg:justify-between px-2 sm:px-0">
            <p className="text-gray-700">
              "AUTO TUNING" - O'zbekistondagi eng yirik avto tovarlar yetkazib
              beruvchilardan biri hisoblanadi.
            </p>
            <p className="text-gray-700">
              "AUTO TUNING" tovarlar va xizmatlarning eng yaxshi tanlovini,
              mijozlarning barcha talablariga javob beradigan tez yetkazib
              berish xizmatini taklif etadi.
            </p>
            <p className="text-gray-700">
              O'zbekiston tanlovlardagi mijozlarning minnatdorchiligi va mashina
              uchun tovarlarning tez yetkazib berilishi "AUTO TUNING"
              kompaniyasining yuqori reytingini ko'rsatadi.
            </p>
          </div>
        </div>
        <div className="rounded-lg sm:rounded-2xl w-max mx-auto lg:w-full lg:mx-0 bg-gray-300 h-[222px] sm:h-[362px] lg:h-[302px] max-w-full flex justify-center items-center lg:max-w-xl overflow-hidden">
          <img
            src={autoTuning}
            height="100%"
            className="h-full xl:w-full rounded-lg sm:rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <div className="flex !mt-8 flex-col-reverse lg:flex-row gap-x-12 gap-y-12">
        <div className="rounded-lg sm:rounded-2xl w-max mx-auto lg:w-full lg:mx-0 bg-gray-300 h-[222px] sm:h-[362px] lg:h-[302px] max-w-full flex justify-center items-center lg:max-w-xl overflow-hidden">
          <img
            height="100%"
            src={autoTuning1}
            className="h-full xl:w-full rounded-lg sm:rounded-2xl"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <div className="w-full h-full flex flex-col max-w-full lg:max-w-3xl space-y-4 md:space-y-0 md:justify-between px-2 sm:px-0">
            <p className="text-gray-700">
              "AUTO TUNING" mahsulotlarini O'zbekistonning 300 dan ortiq
              shaharlarida sotib olish mumkin. Kompaniyaning tovarlar keng
              assortimentdagi (50 000 dan ortiq turdagi) avto tovarlarni taklif
              etiladi: salon jihozlari, suvenirlar, tuning jihozlari va
              antiradarlar, boshqaruv moslamalari, vizitkalar, registratorlar va
              monitorlar.
            </p>
            <p className="text-gray-700">
              Biz sizga yuqori sifatli avto tovarlarini tezda va xavfsiz
              yetkazib beramiz. O'zingizning avtomobilingiz uchun kerakli barcha
              narsalarni bizdan sotib olishingiz mumkin
            </p>
            <p className="text-gray-700">
              "AUTO TUNING" - avtomobilingizni yangilash va unikal ko'rinishga
              ega qilish uchun sizni taklif etilgan eng yaxshi avto tuning va
              avto tovarlari bilan ta'minlashimizdan xursand bo'ling.
            </p>
            <p className="text-gray-700">
              Bizning kompaniya sizga avtomobilingizni boshqarishning yangi
              sirlarini, yaxshi tajribani va yetakchi avto tovarlarini taklif
              etadi.
            </p>
          </div>
        </div>
      </div>
      <section>
        <div>
          <Typography
            variant="h3"
            className="text-2xl md:text-3xl text-center md:text-left"
          >
            Biz eng yirik kompaniyalar bilan hamkorlik qilamiz
          </Typography>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-8 py-8">
          {companies.map((company, index) => {
            return (
              <div
                key={index}
                className="w-[224px] box-border px-4 flex justify-center items-center h-[105px] filter grayscale bg-gray-300 rounded-2xl"
              >
                <img src={company} alt="Company" />
              </div>
            );
          })}
        </div>
      </section>
      <section className="!mt-2">
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row justify-between">
          <Typography variant="h4" className="px-2 sm:px-0">Izohlar</Typography>
          <Button
            onClick={() => {
              navigate("/Sharhlar");
              scrollTop();
            }}
            aria-label="commentaries page button"
            variant="outlined"
          >
            Barcha sharhlar
          </Button>
        </div>
        <ul className="py-8 flex justify-start items-center overflow-auto gap-5 products-swiper">
          {commentaries.map((note) => {
            if (note.rating == 5) {
              return (
                <li
                  key={note.id}
                  className="w-full min-w-[320px] min-h-[320px] px-8 py-10 bg-[#b30000] font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-xl"
                >
                  <div className="space-y-5">
                    <div>
                      <Rating ratedColor="white" value={note.rating} readonly />
                    </div>
                    <p className="tracking-[0.5px]">{note.comment}</p>
                  </div>
                  <p className="tracking-[0.5px] text-sm">{note.from}</p>
                </li>
              );
            }
          })}
        </ul>
      </section>
    </div>
  );
};

export default FAQ;
