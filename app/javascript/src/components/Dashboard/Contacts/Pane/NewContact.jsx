import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewContact = ({
  setContacts,
  isNewContactPaneOpen,
  setIsNewContactPaneOpen,
}) => {
  const onClose = () => setIsNewContactPaneOpen(false);

  return (
    <Pane isOpen={isNewContactPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form
        contact={CONTACTS_FORM_INITIAL_FORM_VALUES}
        setContacts={setContacts}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewContact;
