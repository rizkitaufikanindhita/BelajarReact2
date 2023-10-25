import React, { useState } from "react";

const Tambah = () => {
  const counter = 0;

  const [getCounter, setCounter] = useState(counter); // [getter, setter

  const Tambahin = () => {
    setCounter(getCounter + 1);
  };

  const Kurangin = () => {
    if (getCounter > 0) {
      setCounter(getCounter - 1);
    } else {
      alert("Counter tidak boleh kurang dari 0");
    }
  };

  return (
    <div>
      <h3>Counter : {getCounter}</h3>
      <button
        onClick={() => {
          Tambahin();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          Kurangin();
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Tambah;
