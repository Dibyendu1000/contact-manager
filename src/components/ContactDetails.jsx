import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { IoTrash } from "react-icons/io5";
import { LiaEdit, LiaEditSolid } from "react-icons/lia";
import { RiEditCircleLine } from "react-icons/ri";

const ContactDetails = (contact) => {
  return (
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
        <LiaEdit className="cursor-pointer" />
        <IoTrash className="cursor-pointer text-red-600" />
      </div>
    </div>
  );
};

export default ContactDetails;
