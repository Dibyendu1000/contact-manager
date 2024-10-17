import axios from "axios";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoTrash } from "react-icons/io5";
import { LiaEdit } from "react-icons/lia";
import useDisclose from "../hooks/useDisclose";
import AddandUpdate from "./AddandUpdate";

const ContactDetails = (contact) => {
  const { onOpen, onClose, isOpen } = useDisclose();
  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/contacts/${id}`);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-4xl text-amber-600" />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex gap-2 text-3xl">
          <LiaEdit onClick={onOpen} className="cursor-pointer" />
          <IoTrash
            onClick={() => {
              onDelete(contact.id);
            }}
            className="cursor-pointer text-red-600"
          />
        </div>
      </div>
      <AddandUpdate
        isUpdate
        contact={contact}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};

export default ContactDetails;
