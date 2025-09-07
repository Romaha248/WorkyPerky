import React from "react";
import { useParams } from "react-router-dom";

const CafePage = () => {
  const { cafe } = useParams<{ cafe: string }>();

  const unslugify = (slug: string) =>
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="main-bg bg-[url('src/assets/cafe.jpg')] bg-cover bg-center h-screen overflow-hidden">
      <h1 className="mt-20">{unslugify(cafe!)}</h1>
    </div>
  );
};

export default CafePage;
