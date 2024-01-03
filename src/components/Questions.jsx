import React, { useState } from "react";
import { styles } from "../styles";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { questions } from "../data/data";
import { Close, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Questions = () => {
  const [open, setOpen] = useState();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  //   Send question Telegram bot
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const telegramBotId = "6453255281:AAGlCVfHi4F4v3TzqvazMPAiex_3bSrvk10";
  const chatId = 1825061365;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `Mijozdan savol keldi❕ \n\nTelefon raqami: +${phoneNumber} \n\nSavol: ${message}`;

    try {
      if (message.trim() != "" && phoneNumber.trim() != "") {
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
      } else {
        toast.error("Formani to'ldirib qayta urining", {
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

      // Qo'shimcha logika (masalan, formani tozalash yoki foydalanuvchiga xabar berish)
      setPhoneNumber("");
      setMessage("");
      handleOpen();
    } catch (error) {
      if (phoneNumber.trim() !== "" && message.trim() !== "") {
        toast.error("Tarmoqdagi xato", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Formani to'ldiring", {
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
    }
  };

  return (
    <div className={`${styles.container} py-10 space-y-5`}>
      <div>
        <Typography variant="h2">Savollaringizga javob beramiz</Typography>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 gap-y-8">
        <div className="flex flex-col space-y-5">
          {questions.map((quiz) => {
            return (
              <Accordion
                icon={
                  <Close
                    className={`transition-transform ${
                      open == quiz.id
                        ? "rotate-animation"
                        : "rotate-animation-2"
                    }`}
                  />
                }
                className="border border-gray-300 rounded-xl"
                key={quiz.id}
                open={open === quiz.id}
              >
                <AccordionHeader
                  className={`border px-4 border-gray-300 rounded-xl items-start ${
                    open == quiz.id ? "rounded-b-none" : ""
                  }`}
                  onClick={() => handleOpen(quiz.id)}
                >
                  {quiz.question}
                </AccordionHeader>
                <AccordionBody className="px-4">{quiz.answer}</AccordionBody>
              </Accordion>
            );
          })}
        </div>
        <div className="w-full max-w-full lg:max-w-md">
          <Card className="w-full border border-gray-200">
            <CardHeader
              variant="gradient"
              color="red"
              className="m-4 grid h-16 place-items-center"
            >
              <Typography variant="h4" color="white">
                Savolingiz bormi?
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                label="Telefon raqamingiz"
                value={phoneNumber}
                size="lg"
                type="number"
              />
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                label="Savol"
              ></Textarea>
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
                <Link to={`/`} className="ml-1 text-red-700 font-bold">
                  Shaxsiy ma'lumotlarni himoya qilish shartlari
                </Link>{" "}
                bilan tanishib chiqing
              </Typography>
            </CardFooter>
          </Card>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
