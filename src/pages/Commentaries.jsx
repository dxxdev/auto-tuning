import React, { useEffect, useState } from "react";
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
  Typography,
} from "@material-tailwind/react";
import { commentaries } from "../data/data";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

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
      await axios.post(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          chat_id: chatId,
          text,
        }
      );
      toast.success("Yuborildi", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // Qo'shimcha logika (masalan, formani tozalash yoki foydalanuvchiga xabar berish)
      setUserName("");
      setMessage("");
      setEmail("");
      setRating(0);
    } catch (error) {
      toast.error("Yuborilmadi", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={`${styles.container}`}>
      <section className="py-3">
        <Typography variant="h3">Izohlar</Typography>
        <ul className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {commentaries.map((note) => {
            return (
              <li
                key={note.id}
                className="w-full rounded-2xl px-8 py-10 bg-red-800 font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-2xl"
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
          })}
        </ul>
      </section>
      <div className="py-20 flex flex-col items-center gap-y-20">
        <div className="flex flex-col items-center gap-y-5">
          <Typography variant="h2">Izoh qoldiring</Typography>
          <Typography variant="h5" className="font-medium max-w-xl text-center">
            Sizning elektron pochtangiz saytda chop etilmaydi. Majburiy
            maydonlar belgilangan
          </Typography>
        </div>
        <Card className="w-full max-w-2xl border border-gray-200">
          <CardHeader
            variant="gradient"
            color="red"
            className="m-4 grid h-16 place-items-center"
          >
            <Typography variant="h4" color="white">
              Sharh qoldiring!
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setUserName(e.target.value)}
              label="Ism yoki familiya"
              value={userName}
              size="lg"
              type="text"
            />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              label="E-pochta"
              value={email}
              size="lg"
              type="email"
            />
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              label="Fikringizni yozib qoldiring"
            ></Textarea>
            <Typography variant="small">Bizni baholang</Typography>
            <Rating
              value={rating}
              precision={1}
              max={5}
              onChange={(value) => {
                setRating(value);
              }}
            />
            <iframe
              title="reCAPTCHA"
              width="304"
              height="78"
              role="presentation"
              name="a-7z2l7vcwjdk9"
              frameborder="0"
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
              src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc0Pi0pAAAAAFuRiKfyvf8I7Vtjf88ssRWwnvGH&amp;co=aHR0cHM6Ly9vZmZpY2Utc3R5bGUubmV0bGlmeS5hcHA6NDQz&amp;hl=ru&amp;type=image&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=u60h7xi9a6j"
            ></iframe>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              color="red"
              className="flex justify-center items-center gap-x-5"
              fullWidth
              onClick={(e) => handleSubmit(e)}
            >
              <span>Yuborish</span>
              <Send />
            </Button>
            <Typography variant="small" className="mt-6">
              Yuborishdan oldin
              <Link to={`/policy`} className="ml-1 text-red-700 font-bold">
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
