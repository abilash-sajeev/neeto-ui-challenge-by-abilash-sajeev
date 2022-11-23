import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_DATA as contacts } from "./constants";
import MenuBar from "./MenuBar";
import Table from "./Table";

const noop = () => {};

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <>
      <MenuBar showMenuBar={showMenuBar} />
      <Container>
        <Header
          actionBlock={<Button label="Add Contact" size="small" />}
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="All Contacts"
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length > 0 ? (
          <Table
            contacts={contacts}
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => noop}
            primaryActionLabel="Add Contact"
            subtitle="Add your contacts here."
            title="Looks like you don't have any contacts!"
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
