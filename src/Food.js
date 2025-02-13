import { useState } from "react";
import React from "react";
const images = require.context("./assets", false, /\.(jpeg|jpg|png)$/);
export default function Food(props) {
  return (
    <div className="food_items bg-white shadow-md">
      <img src={require(`${props.img}`).default} className="pic" />
      <div className="p-6">
        <div className="infor_food flex justify-between items-center ">
          <p className="text-xl capitalize ">{props.title}</p>
          <p className="px-2 bg-orange-400 text-white rounded-md">
            ${props.price}
          </p>
        </div>
        <br />
        <p className="text-gray-500">{props.desc}</p>
      </div>
    </div>
  );
}
