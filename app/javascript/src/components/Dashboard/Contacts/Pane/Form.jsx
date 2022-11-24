import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { ROLES_DATA, CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";
import { createContact } from "../utils";

const Form = ({ onClose, setContacts, contact }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = contact => {
    createContact({ contact, setContacts });
    Toastr.success("Contact added successfully");
    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={isSubmitted}
      validateOnChange={isSubmitted}
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
              onClick={() => setIsSubmitted(true)}
            />
            <Button
              label="Cancel"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
