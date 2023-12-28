import React, { useEffect } from "react";
import { styles } from "../styles";
import { Star } from "@mui/icons-material";
import { Typography } from "@material-tailwind/react";
import { commentaries } from "../data/data";

const Commentaries = () => {
  useEffect(() => {
    document.title = "Sharhlar";
  });

  return (
    <div className={`${styles.container}`}>
      <section className="py-3">
        <Typography variant="h3">Izohlar</Typography>
        <ul className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {commentaries.map((note) => {
            return (
              <li
                key={note.id}
                className="w-full min-w-[320px] min-h-[320px] px-8 py-10 bg-red-800 font-normal text-base flex flex-col justify-between text-white transition-all duration-300 hover:-translate-y-5 shadow-xl"
              >
                <div className="space-y-5">
                  <div>
                    {note.rating.map((star) => {
                      return <Star key={star} />;
                    })}
                  </div>
                  <p className="tracking-[0.5px]">{note.comment}</p>
                </div>
                <p className="tracking-[0.5px] text-sm">{note.from}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Commentaries;
