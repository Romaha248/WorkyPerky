import React from "react";
import FilterIcon from "./FilterIcon";
import wifi from "../../assets/wi-fi.png";
import PlaceCard from "./PlaceCard";
import { useParams } from "react-router-dom";

interface FiltersProps {
  filter: {
    [filterTitle: string]: string[];
  };
}

interface Cafe {
  title: string;
  rating: number;
}

interface Cafes {
  cafes: {
    [title: string]: Cafe;
  };
}

const AllCafes = () => {
  const filters: FiltersProps = {
    filter: {
      Productivity: [
        "Wi-Fi",
        "Sockets",
        "Long stays",
        "Tables",
        "Quiet",
        "Calls",
      ],
      Community: ["Work vibe", "Groups"],
      Service: ["Coffee", "Food", "Veggie", "Alcohol", "Cards"],
      Space: ["Light", "Outdoor", "Restroom", "No smoke", "Pets", "Parking"],
    },
  };

  const caffes: Cafes = {
    cafes: {
      "Central Perk": {
        title: "Central Perk",
        rating: 93,
      },
      "Café de Flore": {
        title: "Café de Flore",
        rating: 78,
      },
    },
  };

  const unslugify = (slug: string) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const { place } = useParams<{ place: string }>();
  const cityName = place ? unslugify(place) : "";

  console.log(cityName);

  return (
    <div className="bg-white mt-10 center px-8 pt-8 h-[80vh] flex gap-10">
      <div className="w-[25%] overflow-y-auto h-full pr-4">
        <h1 className="text-4xl font-bold mb-10">FILTERS</h1>
        {Object.entries(filters.filter).map(([title, icons]) => (
          <div key={title}>
            <h2 className="text-2xl font-bold my-3">{title}</h2>
            <ul className="list-none flex flex-wrap gap-4 justify-start items-start">
              {icons.map((icon, index) => (
                <li key={index}>
                  <FilterIcon title={icon} img={wifi} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto h-full">
        <h2 className="text-5xl font-bold mb-6">{cityName}</h2>
        <p className="text-xl mb-10">
          The best work and study-friendly cafes, restaurants, libraries, and
          hotel lobbies in {cityName}. Expand your coworking map with our list
          of casual spots with free and reliable Wi-Fi, ample power sockets, and
          comfy seating areas!
        </p>

        <h3 className="text-3xl font-semibold mb-6">
          {Object.keys(caffes.cafes).length} WORK-FRIENDLY PLACE
          {Object.keys(caffes.cafes).length !== 1 ? "S" : ""}
        </h3>
        {Object.entries(caffes.cafes).map(([id, cafe]) => (
          <div key={id}>
            <PlaceCard
              rating={cafe.rating}
              title={cafe.title}
              cityName={cityName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCafes;
