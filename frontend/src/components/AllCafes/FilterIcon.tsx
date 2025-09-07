import React from "react";

interface Icon {
  img: string;
  title: string;
}

const FilterIcon = ({ img, title }: Icon) => {
  return (
    <div className="mr-5 rounded-2xl center flex-col justify-center h-20 w-20 cursor-pointer bg-white hover:invert transition">
      <img src={img} alt="filt img" className="h-8 w-8" />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default FilterIcon;
