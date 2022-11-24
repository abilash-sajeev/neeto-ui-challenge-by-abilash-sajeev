import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

const NewNote = ({ fetchNotes, isNewNotePaneOpen, setIsNewNotePaneOpen }) => {
  const onClose = () => setIsNewNotePaneOpen(false);

  return (
    <Pane isOpen={isNewNotePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default NewNote;
