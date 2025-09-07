import React from "react";
import wifi from "../../assets/wi-fi.png";
import clock from "../../assets/clock.png";
import mapMark from "../../assets/maps-and-flags.png";
import like from "../../assets/anlike.png";
import com from "../../assets/com.png";
import { Link } from "react-router-dom";

interface Cafe {
  rating: number;
  title: string;
  cityName: string;
}

function PlaceCard({ rating, title, cityName }: Cafe) {
  const getBorderColor = (rating: number) => {
    if (rating >= 80) return "border-green-500";
    if (rating >= 50) return "border-yellow-500";
    return "border-red-500";
  };

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      to={`/cities/${slugify(cityName)}/${slugify(title)}`}
      className="flex flex-wrap gap-4 justify-start items-start w-full cursor-pointer hover:bg-gray-200"
    >
      <div>
        <img src={wifi} alt="dadada" className="h-18 mr-12" />
      </div>
      <div>
        <h3>{title}</h3>
        <div className="flex items-center">
          <img src={clock} alt="clock" className="h-4 mr-1" />
          <p>Unknown</p>
        </div>
        <div className="flex items-center">
          <img src={mapMark} alt="address" className="h-4 mr-1" />
          <p>Address</p>
        </div>
      </div>
      <div className="ml-auto text-right mt-1 mr-2">
        <div
          className={`flex items-center rounded-md px-2 py-1 border-2 ${getBorderColor(
            rating
          )}`}
        >
          <div
            className={`pr-3 mr-3 border-r-2 h-full flex items-center ${getBorderColor(
              rating
            )}`}
          >
            <img src={like} alt="icon" className="h-5" />
          </div>
          <p className="text-lg font-semibold">{rating}%</p>
        </div>

        <div className="flex justify-end w-full text-right">
          <div className="flex items-center mr-2">
            <p className="font-serif mr-1">1</p>
            <img src={like} alt="asdasd" className="h-4" />
          </div>
          <div className="flex items-center">
            <p className="font-serif mr-1">1</p>
            <img src={com} alt="asdasd" className="h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCard;
