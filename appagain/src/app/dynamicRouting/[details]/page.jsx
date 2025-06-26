"use client";
import { use } from "react";

const Number = ({ params }) => {
  const { details } = use(params);
  return (
    <div>
      <h1>Number Deatails</h1>
      <h3>Number:{details}</h3>
    </div>
  );
};
export default Number;
