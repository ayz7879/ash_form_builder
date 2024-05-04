import React, { useContext, useEffect } from "react";
import { IoAddCircle } from "react-icons/io5";
import { myContext } from "../context/Appcontext";
import uuid from "react-uuid";

const Sidebar = () => {
  const sideContext = useContext(myContext);
  const { addInputs } = sideContext;

  return (
    <div
      style={{ width: "20%", height: "100vh" }}
      className=" bg-slate-800 flex px-2 py-2 flex-col gap-5"
    >
      <button
        onClick={() =>
          addInputs(
            <input
              style={{ width: "30rem", height: "3rem" }}
              className=" rounded-md px-3 font-bold border-2  border-green-200"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 px-10 rounded-full"
      >
        Inputs <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              style={{ width: "1.2rem", height: "1.5rem" }}
              type="checkbox"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 px-10 rounded-full"
      >
        CheckBox <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              style={{ width: "1.5rem", height: "1.5rem" }}
              type="radio"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
      >
        Radio <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              style={{ width: "10rem", height: "3rem" }}
              type="date"
              placeholder="Enter text here..."
              className=" p-2"
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
      >
        Date <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              type="number"
              style={{ width: "30rem", height: "3rem" }}
              className=" rounded-md px-3 font-bold border-2  border-green-200"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
      >
        Number <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              type="url"
              style={{ width: "30rem", height: "3rem" }}
              className=" rounded-md px-3 font-bold border-2  border-green-200"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
      >
        Url <IoAddCircle color="lightgreen" size={30} />
      </button>
      <button
        onClick={() =>
          addInputs(
            <input
              type="submit"
              style={{ width: "10rem", height: "3rem" }}
              className=" rounded-md px-3 font-bold border-2  cursor-pointer  border-green-200 bg-blue-700 text-white"
              placeholder="Enter text here..."
              id={uuid()}
            />
          )
        }
        className="text-white flex items-center justify-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-1 rounded-full"
      >
        Button <IoAddCircle color="lightgreen" size={30} />
      </button>
    </div>
  );
};

export default Sidebar;
