// import images for the slider in the hero component
import { bmwSalon1, bmwSalon2, bmwSalon3, bmwSalon4 } from "../assets/images";

import { v4 as randomId } from "uuid";

// export images for the slider in the hero component
export const swiperImages = [
  {
    id: randomId(),
    image: bmwSalon1,
  },
  {
    id: randomId(),
    image: bmwSalon2,
  },
  {
    id: randomId(),
    image: bmwSalon3,
  },
  {
    id: randomId(),
    image: bmwSalon4,
  },
];
