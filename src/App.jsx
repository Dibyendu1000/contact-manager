import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import ContactsList from "./components/ContactsList";
import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./hooks/useDisclose";

const App = () => {
  const { onOpen, onClose, isOpen } = useDisclose();
  return (
    <>
      <div className="max-w-[370px]: mx-auto px-4">
        <NavBar />
        <div className="flex">
          <div className="relative flex flex-grow items-center gap-2">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
            />
            <AiFillPlusCircle
              onClick={onOpen}
              className="cursor-pointer text-5xl text-white"
            />
          </div>
        </div>
        <ContactsList />
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
