"use client";

import Carousel from "./components/Carousel";

export type Slide = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Home() {
  let slides: Slide[] = [
    {
      src: "/images/carousel/slide_1.jpg",
      alt: "Slide 1",
      width: 4608,
      height: 2592,
    },
    {
      src: "/images/carousel/slide_2.jpg",
      alt: "Slide 2",
      width: 4608,
      height: 2592,
    },
    {
      src: "/images/carousel/slide_3.jpg",
      alt: "Slide 3",
      width: 4608,
      height: 2592,
    },
  ];

  return (
    <main className="pb-20">
      <Carousel slides={slides} />
    </main>
  );
}
