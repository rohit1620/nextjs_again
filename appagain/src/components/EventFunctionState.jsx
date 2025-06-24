"use client";
import { useState } from "react";

const EventFunctionState = () => {
  let value = "rohit";
  const [val, setVal] = useState(value);
  const sayHello = (name) => {
    alert(`My name is ${name}`);
  };

  const changevalue = () => {
    value = "malav";
    setVal(value);
  };

  return (
    <div>
      <h2>You know my name is EventFunctionState </h2>
      {/* <button
        className="bg-black text-white border-2 border-blue-800 px-4"
        onClick={() => alert("Rohit kumar malav")}
      >
        alert
      </button> */}

      <button
        className="bg-black text-white border-2 border-blue-800 px-4"
        onClick={() => sayHello("anjali")}
      >
        sayHello
      </button>
      <p className="text-9xl font-bold">
        changeValue:<span className="text-yellow-600">{val}</span>
      </p>
      <button
        className="bg-black text-white border-2 border-blue-800 px-4"
        onClick={changevalue}
      >
        Change onClick
      </button>
    </div>
  );
};

export default EventFunctionState;
