import React, { useState } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  return { contacts, setContacts };
};

export default useContacts;
