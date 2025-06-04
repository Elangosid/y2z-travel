// pages/api/places.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Activity } from "@/types/type";

const places: Activity[] = [
  {
    id: "1",
    title: "India Gate",
    rating: 4.6,
    reviews: "281,124",
    description:
      "India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers...",
    image: "/assets/images/India-gate.jpg",
  },
  {
    id: "2",
    title: "Red Fort",
    rating: 4.5,
    reviews: "168,729",
    description:
      "The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna.",
    image: "/assets/images/red-fort.jpg",
  },
  {
    id: "3",
    title: "Qutub Minar",
    rating: 4.5,
    reviews: "151,556",
    description: "Qutub Minar is a minaret or a victory tower located in the Qutub complex...",
    image: "/assets/images/minar.jpg",
  },
  {
    id: "4",
    title: "Lotus Temple",
    rating: 4.5,
    reviews: "67,772",
    description:
      "Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baháʼí faith.",
    image: "/assets/images/lotus.jpg",
  },
  {
    id: "5",
    title: "Humayun's tomb",
    rating: 4.6,
    reviews: "46,024",
    description: "Humayun's tomb is the final resting place of the Mughal Emperor...",
    image: "/assets/images/humayun.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Activity[]>
) {
  res.status(200).json(places);
}
