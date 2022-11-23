import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_DATA } from "./constants";
import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS_DATA);

  return (
    <>
      <MenuBar showMenuBar={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(showMenuBar => !showMenuBar)}
          title="All Contacts"
          actionBlock={
            <Button
              label="Add Contact"
              size="small"
              onClick={() => setShowNewContactPane(true)}
            />
          }
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
            primaryAction={() => setShowNewContactPane(true)}
            primaryActionLabel="Add Contact"
            subtitle="Add your contacts here."
            title="Looks like you don't have any contacts!"
          />
        )}
        <NewContactPane
          setContacts={setContacts}
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
