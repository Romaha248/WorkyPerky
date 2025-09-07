import React from "react";
import { Link } from "react-router-dom";

interface AllCitiesProps {
  cities: {
    [cityName: string]: string[];
  };
}

const AllCities = () => {
  const citiesData: AllCitiesProps = {
    cities: {
      "New York": ["Statue of Liberty", "Central Park", "Times Square"],
      "Los Angeles": ["Hollywood Sign", "Venice Beach", "Universal Studios"],
      Chicago: ["Willis Tower", "Millennium Park", "Navy Pier"],
      Houston: ["Space Center", "Museum District", "Buffalo Bayou"],
      Phoenix: ["Desert Botanical Garden", "Camelback Mountain", "Papago Park"],
      Philadelphia: [
        "Liberty Bell",
        "Philadelphia Museum of Art",
        "Reading Terminal Market",
        "aoksjigddsiofjgosdfjgoisdfg",
        "sdjaiughoihdfsiogosdfjgiodsfjg",
        "sidfoghjoidsfjigojigsdoi",
        "asfgojoigogsijogfsdijogijo",
      ],
      "San Antonio": ["The Alamo", "River Walk", "San Antonio Missions"],
    },
  };

  const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="bg-white mt-25 center justify-center flex-col p-8">
      <h1 className="text-5xl font-bold text-black mb-12">All Cities</h1>
      {Object.entries(citiesData.cities).map(([city, cafes]) => (
        <div key={city} className="center justify-center flex-col mb-8 mt-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">{city}</h2>
          <div className="center justify-center flex-wrap gap-4">
            <ul className="list-none center justify-center flex-wrap gap-4">
              {cafes.map((cafe, index) => (
                <li key={index} className="mb-12">
                  <Link
                    to={`/cities/${slugify(cafe)}`}
                    className="text-gray-800 text-xl rounded-xl px-4 py-2 mx-3 shadow-xl  hover:bg-black hover:text-white transition duration-300 ease-in-out hover:shadow-lg"
                  >
                    {cafe}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCities;
