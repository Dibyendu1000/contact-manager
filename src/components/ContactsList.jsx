import axios from "axios";
import React, { useEffect, useState } from "react";
import ContactDetails from "./ContactDetails";

const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const res = await axios.get("http://localhost:4000/contacts");
      setContacts(res.data);
    };
    getContacts();
  }, []);
  return (
    <div className="mt-4 flex flex-col gap-4">
      {contacts.map((contact) => (
        <ContactDetails
          id={contact.id}
          name={contact.name}
          email={contact.email}
        />
      ))}
    </div>
  );
};

export default ContactsList;
