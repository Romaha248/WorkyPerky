import React from "react";
import PlaceCard from "./HomePlaceCard/PlaceCard";
import couple from "../../assets/couple.png";
import star from "../../assets/favorites.png";
import cloud from "../../assets/communication.png";
import photo from "../../assets/cafee.jpg";
import coffee from "../../assets/coffee-cup.png";

const HomePage = () => {
  return (
    <>
      <section className="grid grid-row-2 main-bg bg-[url('src/assets/cafee.jpg')] bg-cover bg-center h-screen overflow-hidden">
        <div className="center justify-center p-1 mt-40">
          <h1 className="text-cl text-6xl font-extrabold">
            Your Office, Anywhere.
          </h1>
        </div>
        <div className="center justify-center p-1 my-15 mt-10 flex-col space-y-2">
          <a
            href="#"
            className="text-cl text-4xl font-bold my-25 px-4 py-2 border-4 rounded-full button-cl opacity-75 hover:opacity-100 ease-in-out duration-300"
          >
            Find Your Perfect Workspace
          </a>
          <h1 className="text-cl text-4xl font-bold">
            Fuel Up. Plug In. Get Things Done.
          </h1>
          <h1 className="text-cl text-4xl font-bold">
            Because Great Ideas Deserve Great Spaces.
          </h1>
          <p className="text-cl">Couldn't find your favorite place :(</p>
          <a
            href="#"
            className="text-cl px-3 py-1 border-4 rounded-full button-cl opacity-75 hover:opacity-100 ease-in-out duration-300"
          >
            Suggest a new place right here
          </a>
        </div>
      </section>
      <section className="main-bg">
        <div className="center justify-center p-8">
          <h1 className="text-cl-h1 text-4xl font-bold mt-10">
            Explore spaces
          </h1>
        </div>
        <div className="center justify-center p-8 mb-8">
          <PlaceCard
            rate={2}
            title="Cedar"
            tags={["Coffee", "Wi-Fi", "Quiet"]}
            image={photo}
          />
          <PlaceCard
            rate={3}
            title="Sadaviga"
            tags={["Pidari", "Wi-Fi", "Quiet"]}
            image={photo}
          />
          <PlaceCard
            rate={4}
            title="Gatten"
            tags={["Coffee", "Wi-Fi", "NIgerri"]}
            image={photo}
          />
        </div>
      </section>
      <section className="bg-amber-50">
        <div className="center justify-center p-8">
          <h1 className="text-cl-h1 text-4xl font-bold mt-10">For Coworkers</h1>
        </div>
        <div className="center justify-center m-10">
          <div className="center justify-center flex-col p-8 pr-80">
            <img src={couple} alt="image" className="h-70 w-70 mb-5" />
            <p className="text-4xl text-cl-h1 font-bold leading-relaxed text-center">
              Connect with fellow <br />
              remote workers
            </p>
          </div>
          <div className="center justify-center flex-col p-8  pr-80">
            <img src={star} alt="image" className="h-70 w-70 mb-5" />
            <p className="text-4xl text-cl-h1 font-bold leading-relaxed text-center">
              Save your <br />
              favorite spots
            </p>
          </div>
          <div className="center justify-center flex-col p-8">
            <img src={cloud} alt="image" className="h-70 w-70 mb-5" />
            <p className="text-4xl text-cl-h1 font-bold leading-relaxed text-center">
              Leave reviews <br />& share vibes
            </p>
          </div>
        </div>
      </section>
      <section className="main-bg flex flex-col items-center justify-center text-center">
        <div className="center justify-center p-8 mt-15">
          <img src={coffee} alt="coffee" className="h-18 w-18 mb-6 mr-5" />
          <h2 className="text-[min(10vw,48px)] font-bold text-[#5b4636]">
            Let’s Start
          </h2>
        </div>
        <p className="text-[min(6vw,22px)] text-[#7a6651] mb-6 max-w-xl">
          Find your next favorite spot to work. Discover cozy cafes, modern
          workspaces, and plug-in ready corners around you.
        </p>
        <a
          href="#"
          className="bg-[#a67c52] text-white px-8 py-4 mb-8 rounded-full shadow-lg hover:bg-[#8a6743] transition"
        >
          Explore Spaces
        </a>
        <p className="text-[#7a6651] mb-1">
          Couldn't find your favorite place :(
        </p>
        <a
          href="#"
          className="text-cl bg-[#a67c52] px-4 py-2 mb-12 border-4 rounded-full hover:bg-[#8a6743] transition"
        >
          Suggest a new place right here
        </a>
      </section>
    </>
  );
};

export default HomePage;
