import React from "react";
import wifi from "../../assets/wi-fi.png";
import clock from "../../assets/clock.png";
import mapMark from "../../assets/maps-and-flags.png";
import like from "../../assets/anlike.png";
import com from "../../assets/com.png";

function PlaceCard() {
  return (
    <div className="flex flex-wrap gap-4 justify-start items-start w-full cursor-pointer hover:bg-gray-200">
      <div>
        <img src={wifi} alt="dadada" className="h-18 mr-12" />
      </div>
      <div>
        <h3>AMR HOTEL</h3>
        <div className="flex items-center">
          <img src={clock} alt="clock" className="h-4 mr-1" />
          <p>Unknown</p>
        </div>
        <div className="flex items-center">
          <img src={mapMark} alt="clock" className="h-4 mr-1" />
          <p>Address</p>
        </div>
      </div>
      <div className="ml-auto text-right mt-1 mr-2">
        <div className="flex items-center border-2 rounded-md px-2 py-1">
          <div className="pr-3 mr-3 border-r-2 h-full flex items-center">
            <img src={like} alt="icon" className="h-5" />
          </div>
          <p className="text-lg font-semibold">76%</p>
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
    </div>
  );
}

export default PlaceCard;
