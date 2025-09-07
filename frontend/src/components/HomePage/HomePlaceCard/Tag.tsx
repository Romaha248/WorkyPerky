import React from "react";

interface TagProps {
  TagName: string;
}

const Tag = ({ TagName }: TagProps) => {
  return (
    <div className="center justify-center rounded-3xl text-cl-tag p-1.5 m-5 w-30">
      <h1>{TagName}</h1>
    </div>
  );
};

export default Tag;
