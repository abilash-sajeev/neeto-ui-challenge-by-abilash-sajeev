import React, { useState } from "react";

import dayjs from "dayjs";
import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  ROLES_DATA,
  CONTACTS_FORM_VALIDATION_SCHEMA,
  USER_AVATAR_URL,
} from "../constants";
import { generateUUID } from "../utils";

const Form = ({ onClose, setContacts, contact }) => {
  const [submitted, setSubmitted] = useState(false);

  const createContact = contact => {
    setContacts(contacts =>
      contacts.concat([
        {
          ...contact,
          id: generateUUID(),
          role: contact.role.label,
          userAvatarUrl: USER_AVATAR_URL,
          createdAt: dayjs(),
        },
      ])
    );
  };

  const handleSubmit = contact => {
    createContact(contact);
    Toastr.success("Contact added successfully");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between space-x-6">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              placeholder="Select Role"
              options={ROLES_DATA.map(({ label, value }) => ({
                label,
                value,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
