import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-row-2 main-bg bg-[url('src/assets/cafee.jpg')] bg-cover bg-center h-screen">
        <div className="center justify-center p-1 mt-80">
          <h1 className="text-cl text-6xl font-extrabold">
            Your Office, Anywhere.
          </h1>
        </div>
        <div className="center justify-center p-1 my-15 mt-10 flex-col space-y-2">
          <h1 className="text-cl text-4xl font-bold my-25 p-2 border-4 rounded-3xl button-cl">
            <a href="#">Find Your Perfect Workspace</a>
          </h1>
          <h1 className="text-cl text-4xl font-bold">
            Fuel Up. Plug In. Get Things Done.
          </h1>
          <h1 className="text-cl text-4xl font-bold">
            Because Great Ideas Deserve Great Spaces.
          </h1>
          <p className="text-cl">Couldn't find your favorite place</p>
          <p className="text-cl p-1.5 border-4 rounded-3xl button-cl">
            <a href="#">Suggest a new place right here</a>
          </p>
        </div>
      </div>
      <div className="center justify-center p-8"></div>
    </>
  );
};

export default HomePage;
