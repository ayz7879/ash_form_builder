import React, { useContext } from "react";
import { myContext } from "../context/Appcontext";
import { FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Navbar = () => {
  const navContext = useContext(myContext);
  const { setFormArray, setFlag, setId } = navContext;

  const createForm = () => {
    setFlag(true);
  };
  const clearForm = () => {
    setFlag(false);
    setFormArray([]);
    setId("");
  };

  return (
    <>
      <nav
        style={{ backgroundColor: "rgb(241,241,251)", height: "10vh" }}
        className="flex items-center justify-center gap-20 py-2"
      >
        <span className="font-semibold font-mono text-2xl cursor-pointer">
          @Ash-Form-Builder
        </span>
        <div className="btns flex items-center justify-center gap-8">
          <button
            onClick={createForm}
            className="text-white flex items-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
          >
            Create Form <FaPlus color="yellow" size={20} />
          </button>
          <button
            onClick={clearForm}
            className="text-white flex items-center gap-2 bg-gray-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
          >
            Clear Form <MdDeleteForever color="yellow" size={25} />
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
