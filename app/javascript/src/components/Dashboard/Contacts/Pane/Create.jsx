import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewContactPane = ({ setContacts, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
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

export default NewContactPane;
