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
import { TOAST_CONFIG, chatId, questions, scrollTop, telegramBotId } from "../data/data";
import { Close, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Questions = () => {
  const [open, setOpen] = useState();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        toast.success("Yuborildi", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldirib qayta urining", TOAST_CONFIG);
      }
      setPhoneNumber("");
      setMessage("");
      handleOpen();
    } catch (error) {
      if (phoneNumber.trim() !== "" && message.trim() !== "") {
        toast.error("Tarmoqdagi xato", TOAST_CONFIG);
      } else {
        toast.error("Formani to'ldiring", TOAST_CONFIG);
      }
    }
  };

  return (
    <div className={`${styles.container} py-7 space-y-5`}>
      <div>
        <Typography variant="h2" className="text-2xl sm:text-3xl md:text-4xl">
          Savollaringizga javob beramiz
        </Typography>
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
                className="border border-gray-300 bg-white rounded-xl"
                key={quiz.id}
                open={open === quiz.id}
              >
                <AccordionHeader
                  className={`border text-base md:text-xl px-4 border-gray-300 rounded-xl items-start ${
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
              className="m-3 md:m-4 grid from-[#b30000] to-[#a00] h-16 place-items-center"
            >
              <Typography variant="h4" color="white">
                Savolingiz bormi?
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col p-3 md:p-6 gap-4">
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
            <CardFooter className="p-3 md:p-6 !pt-0">
              <Button
                aria-label="send message to telegram button"
                variant="gradient"
                color="red"
                className="flex justify-center from-[#b30000] to-[#a00] items-center gap-x-5"
                fullWidth
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default Questions;
