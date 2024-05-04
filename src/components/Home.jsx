import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { myContext } from "../context/Appcontext";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Home = () => {
  const homeContext = useContext(myContext);
  const { formArray, setFormArray, flag, setId, setFlag1 } = homeContext;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDelete = (id) => {
    const filterData = formArray.filter((e) => e.props.id != id);
    setFormArray(filterData);
    setId("");
    setFlag1(false);
  };

  return (
    <>
      {!flag && (
        <>
          <div
            style={{ backgroundColor: "rgb(241,241,251)", height: "90vh" }}
            className="flex"
          >
            <div className="home w-full flex flex-col gap-2 items-center justify-center">
              <span className=" font-bold text-3xl font-mono">
                Welcome To Form Builder Web......
              </span>
              <span className=" text-2xl font-mono">
                Click create and Build From.....
              </span>
              <span className="font-bold text-2xl font-mono py-1 px-2 fixed bottom-0 left-0">
                @ash-forms
              </span>
            </div>
            <Sidebar />
          </div>
        </>
      )}
      {flag && (
        <>
          <div className=" flex w-full">
            <div className="flex w-full gap-3 flex-col p-5">
              <h1 className=" flex justify-center text-4xl font-bold mb-2 mt-0">
                Create a form..
              </h1>
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "rgb(241,241,251)",
                }}
                className="flex w-full gap-3 flex-col p-5  border-2  border-black  "
              >
                <h1 className=" font-bold text-2xl">FORM CREATER</h1>
                <div className=" flex flex-col gap-3">
                  {formArray.map((e) => (
                    <>
                      <div className="flex gap-3">
                        {e}{" "}
                        <FaEdit
                          onClick={() => setId(e.props.id)}
                          size={27}
                          color="darkviolet"
                          className=" cursor-pointer"
                        />
                        <MdDeleteForever
                          onClick={() => handleDelete(e.props.id)}
                          size={30}
                          color="red"
                          className=" cursor-pointer"
                        />
                      </div>
                    </>
                  ))}
                </div>
              </form>
              <div className="btns flex justify-center ">
                <button
                  style={{ width: "15rem" }}
                  className="text-black flex items-center justify-center text-xl gap-2 bg-yellow-500 hover:bg-blue-700 font-bold py-1 p-10  rounded-full"
                >
                  Save
                </button>
              </div>
            </div>
            <Sidebar />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
