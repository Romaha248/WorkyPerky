import React from "react";
import Tag from "./Tag";
import Stars from "./Stars";

interface PlaceCardProps {
  rate: number;
  title: string;
  tags: string[];
  image: string;
}

const PlaceCard = ({ rate, title, tags, image }: PlaceCardProps) => {
  return (
    <div className="mx-20 border-1 rounded-3xl border-gray-300 overflow-hidden bg-amber-50 relative h-135 w-105">
      <img src={image} alt="place" className="h-[40%] w-full object-cover" />
      <h2 className="text-cl-h1 text-3xl pl-5 pt-3 font-bold">{title}</h2>
      <div className="center justify-center">
        {tags.map((tag, index) => (
          <Tag key={index} TagName={tag} />
        ))}
      </div>

      <Stars rate={rate} />
      <div className="center justify-center mt-15">
        <a
          href="#"
          className="center justify-center border-1 rounded-3xl border-gray-300 p-3 w-[75%] text-2xl mt-5 hover:bg-neutral-300 hover:text-white hover:ease-in-out"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;
