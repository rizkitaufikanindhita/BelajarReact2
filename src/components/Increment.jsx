import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Increment = () => {
  const navigate = useNavigate();

  const counter = 0;

  const [getCounter, setCounter] = useState(counter); // [getter, setter]
  const [getNama, setNama] = useState(""); // [getter, setter]

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

  // akan ke trigger ketika component ada perubahan  (karena klik salah satunya)
  useEffect(() => {
    if (getCounter > 5) {
      setNama("Rizki");
    } else {
      setNama("");
    }
  }, [getCounter]);
  // kurung siku yang kosong artinya akan ke trigger base on bukan apa-apa (ke triggernya bukan karena perubahan tapi ketika di load pertama kali)
  // kurung siku ini artinya akan ke trigger ketika ada perubahan pada variabel yang ada di dalam kurung siku

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
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <h5>{getNama}</h5>
    </div>
  );
};

export default Increment;
