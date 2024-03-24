/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Additem.css";

const Additem = () => {
  const [item, setitem] = useState({
    name: "",
    calorie: "",
    protien: "",
    vitandmin: "",
    fat: "",
  });

  const Additem = (e) => {
    setitem({ ...item, [e.target.name]: e.target.value });
  };

  const sendItem = async () => {
    console.log(item);
    await fetch("http://localhost:4000/additem", {
      method: "Post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
  };

  return (
    <div>
      <h1>Hello Everyone, Welcome </h1>
      <p>enter the details of any food item eg: calorie,protien etc</p>
      <div className="additem">
        <h1>For now we Add Veg Food Items</h1>
        <div className="additem-items">
          <p>Name: </p>
          <input
            value={item.name}
            onChange={Additem}
            type="text"
            name="name"
            placeholder="Enter the Name"
          />
        </div>
        <div className="additem-items">
          <p>Calories: </p>
          <input
            value={item.calorie}
            onChange={Additem}
            type="number"
            placeholder="Enter the Calories"
            name="calorie"
          />
        </div>
        <div className="additem-items">
          <p>Protines: </p>
          <input
            value={item.protien}
            onChange={Additem}
            type="number"
            placeholder="Enter the Protines"
            name="protien"
          />
        </div>
        <div className="additem-items">
          <p>Vitams and Minerals: </p>
          <input
            value={item.vitandmin}
            onChange={Additem}
            type="string"
            placeholder="Enter the Vit & Min"
            name="vitandmin"
          />
        </div>
        <div className="additem-items">
          <p>Fats: </p>
          <input
            value={item.fat}
            onChange={Additem}
            type="number"
            placeholder="Enter the fats"
            name="fat"
          />
        </div>

        <button
          onClick={() => {
            sendItem();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Additem;
