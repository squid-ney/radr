import React from "react";

interface DetailFieldProps {
  field: string;
  value: string | number;
}
export const DetailField = ({ field, value }: DetailFieldProps) => {
  return (
    <div>
      <p>{field}</p>
      <p>{value}</p>
    </div>
  );
};
