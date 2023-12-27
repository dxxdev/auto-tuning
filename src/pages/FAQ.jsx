import React from "react";
import { styles } from "../styles";
import { Typography } from "@material-tailwind/react";
import { autoTuning, autoTuning1 } from "../assets/images";

const FAQ = () => {
  return (
    <div className={`${styles.container} py-5 space-y-14`}>
      <div className="flex flex-col lg:flex-row gap-x-12 lg:justify-between">
        <div className="flex flex-col gap-y-12">
          <Typography variant="h1">Kompaniya haqida</Typography>
          <div className="w-full max-w-3xl space-y-4">
            <p class="text-gray-700">
              "AUTO TUNING" - O'zbekistondagi eng yirik avto tovarlar yetkazib
              beruvchilardan biri hisoblanadi.
            </p>
            <p class="text-gray-700">
              "AUTO TUNING" tovar va xizmatlarning eng yaxshi tanlovini,
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
        <div className="rounded-2xl w-full max-w-xl overflow-hidden">
          <img src={autoTuning} className="h-[calc(100%+20px)]" alt="" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-12 lg:justify-between">
        <div className="rounded-2xl w-full max-w-xl overflow-hidden">
          <img src={autoTuning1} className="h-[calc(100%+20px)]" alt="" />
        </div>
        <div className="flex flex-col">
          <div className="w-full h-full flex flex-col max-w-3xl space-y-4 md:space-y-0 md:justify-between">
            <p class="text-gray-700">
              "AUTO TUNING" mahsulotlarini O'zbekistonning 300 dan ortiq
              shaharlarida sotib olish mumkin. Kompaniyaning tovarlar keng
              assortimentdagi (50 000 dan ortiq turdagi) avto tovarlarni taklif
              etiladi: salon jihozlari, suvenirlar, tuning jihozlari va
              antiradarlar, boshqaruv moslamalari, vizitkalar, registratorlar va
              monitorlar.
            </p>
            <p class="text-gray-700">
              Biz sizga yuqori sifatli avto tovarlarini tezda va xavfsiz
              yetkazib beramiz. O'zingizning avtomobilingiz uchun kerakli barcha
              narsalarni bizdan sotib olishingiz mumkin
            </p>
            <p class="text-gray-700">
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
    </div>
  );
};

export default FAQ;
