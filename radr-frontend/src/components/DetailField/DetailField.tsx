import React from "react";

export const DetailField = ({ field, value }) => {
  console.log("detail field ", { field, value });
  return (
    <div>
      <p>{field}</p>
      <p>{value}</p>
    </div>
  );
};
