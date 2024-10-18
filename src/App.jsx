import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const { onOpen, onClose, isOpen } = useDisclose();
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const res = await axios.get("http://localhost:4000/contacts");
      setContacts(res.data);
    };
    getContacts();
  }, []);
  const onSearch = (e) => {
    const key = e.target.value;
    console.log(key);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(key.toLowerCase()),
    );
    setContacts(filtered);
    return filtered;
  };
  return (
    <>
      <div className="max-w-[370px]: mx-auto px-4">
        <NavBar />
        <div className="flex">
          <div className="relative flex flex-grow items-center gap-2">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={onSearch}
              type="text"
              className="h-10 flex-grow rounded-md border border-white bg-transparent pl-10 text-white"
            />
            <AiFillPlusCircle
              onClick={onOpen}
              className="cursor-pointer text-5xl text-white"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {contacts.map((contact) => (
            <ContactDetails
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
            />
          ))}
        </div>
      </div>
      <AddandUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default App;
