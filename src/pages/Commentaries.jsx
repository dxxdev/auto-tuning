import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Send, Star } from "@mui/icons-material";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Rating,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { TOAST_CONFIG, commentaries, scrollTop } from "../data/data";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Commentaries = () => {
  useEffect(() => {
    document.title = "Sharhlar";
  }, []);

  //   Send question Telegram bot
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [userName, setUserName] = useState("");

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Mijoz sharh qoldirdi❕ \n\nIsmi: ${userName}\n\n E-pochta: ${email}\n\n Baholash: ${rating}ta yulduzcha\n\n Izoh: ${message}`;

    try {
      if (message != "" && email != "" && userName != "" && rating != 0) {
        await axios.post(
          `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
          {
            chat_id: chatId,
            text,
          }
        );
        toast.success("Yuborildi", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldirib qayta urining", TOAST_CONFIG);
      }

      // Qo'shimcha logika (masalan, formani tozalash yoki foydalanuvchiga xabar berish)
      setUserName("");
      setMessage("");
      setEmail("");
      setRating(0);
    } catch (error) {
      if (message != "" && email != "" && userName != "" && rating != 0) {
        toast.error("Tarmoqdagi xato", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldiring", TOAST_CONFIG);
      }
    }
  };

  return (
    <div className={`${styles.container}`}>
      <section>
        <Typography variant="h3" className="text-2xl md:text-3xl px-2 pt-3">
          Izohlar
        </Typography>
        <ul className="py-4 sm:py-6 lg:py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-7">
          {commentaries.map((note) => {
            return (
              <li
                key={note.id}
                className="w-full rounded-2xl px-5 md:px-7 py-7 md:py-10 bg-[#b30000] font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-2xl"
              >
                <div className="space-y-5 mb-3">
                  <div>
                    <Rating ratedColor="white" value={note.rating} readonly />
                  </div>
                  <p className="tracking-[0.5px]">{note.comment}</p>
                </div>
                <p className="tracking-[0.5px] opacity-70 text-sm">
                  {note.from}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <div className="py-5 lg:py-10 flex flex-col items-center gap-y-10 lg:gap-y-16">
        <div className="flex flex-col items-center gap-y-5">
          <Typography variant="h2" className="text-3xl md:text-4xl">
            Izoh qoldiring
          </Typography>
          <Typography
            variant="paragraph"
            className="font-medium text-lg md:text-xl max-w-xl text-center"
          >
            Sizning elektron pochtangiz saytda chop etilmaydi. Majburiy
            maydonlar belgilangan
          </Typography>
        </div>
        <Card className="w-full max-w-3xl border bg-gray-200 border-gray-200">
          <CardHeader
            variant="gradient"
            color="red"
            className="m-4 grid from-[#b30000] to-[#a00] h-16 place-items-center"
          >
            <Typography
              variant="h4"
              color="white"
              className="text-xl md:text-2xl"
            >
              Sharh qoldiring!
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 p-3 md:p-6">
            <Input
              onChange={(e) => setUserName(e.target.value)}
              label="Ism yoki familiya"
              value={userName}
              size="lg"
              type="text"
              className="bg-white"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label="E-pochta"
              value={email}
              size="lg"
              type="email"
              className="bg-white"
            />
            <Textarea
              value={message}
              className="bg-white"
              onChange={(e) => setMessage(e.target.value)}
              label="Fikringizni yozib qoldiring"
            ></Textarea>
            <Typography variant="small" className="flex items-center">
              Bizni baholang
            </Typography>
            <div className="flex gap-1 items-center">
              <Star
                color={rating > 0 ? "warning" : "disabled"}
                className="cursor-pointer"
                onClick={() => setRating(1)}
              />
              <Star
                color={rating > 1 ? "warning" : "disabled"}
                className="cursor-pointer"
                onClick={() => setRating(2)}
              />
              <Star
                color={rating > 2 ? "warning" : "disabled"}
                className="cursor-pointer"
                onClick={() => setRating(3)}
              />
              <Star
                color={rating > 3 ? "warning" : "disabled"}
                className="cursor-pointer"
                onClick={() => setRating(4)}
              />
              <Star
                color={rating > 4 ? "warning" : "disabled"}
                className="cursor-pointer"
                onClick={() => setRating(5)}
              />
            </div>
            <div className="h-20">
              <ReCAPTCHA sitekey="6LdUGUwpAAAAACjaVLjP4wN3FL9eFysDYmE4dQ5Q" />
            </div>
          </CardBody>
          <CardFooter className="!pt-0 p-3 md:p-6">
            <Button
              variant="gradient"
              color="red"
              className="flex from-[#b30000] to-[#a00] justify-center items-center gap-x-5"
              fullWidth
              aria-label="send message to telegram"
              onClick={(e) => handleSubmit(e)}
            >
              <span>Yuborish</span>
              <Send />
            </Button>
            <Typography variant="small" className="mt-6 text-center">
              Yuborishdan oldin
              <Link
                to={`/policy`}
                onClick={scrollTop}
                className="ml-1 text-[#b30000] font-bold"
              >
                Shaxsiy ma'lumotlarni himoya qilish shartlari
              </Link>{" "}
              bilan tanishib chiqing
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Commentaries;
