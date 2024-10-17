import React from "react";
import { Field, Form, Formik } from "formik";
import Modal from "./Modal";
import axios from "axios";

const AddandUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      await axios.post("http://localhost:4000/contacts", contact);
      location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const updateContact = async (contact, id) => {
    console.log("Contact", contact);
    try {
      await axios.put(`http://localhost:4000/contacts/${id}`, contact);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate
              ? { name: contact.name, email: contact.email }
              : { name: "", email: "" }
          }
          onSubmit={(values) => {
            if (isUpdate) {
              console.log(values);
              updateContact(values, contact.id);
            } else {
              console.log(values);
              addContact(values);
            }
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 rounded-lg border pl-4" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="h-10 rounded-lg border pl-4"
              />
            </div>
            <button className="self-end rounded-lg border bg-amber-600 px-2 py-1.5">
              {isUpdate ? "Update " : "Add "} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddandUpdate;
