import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/NewContactPane";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS_DATA);
  const [selectedContact, setSelectedContact] = useState({});
  const [deletionType, setDeletionType] = useState("");

  const handleBulkDelete = () => {
    setDeletionType("bulk");
    setShowDeleteAlert(true);
  };

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
          <>
            <SubHeader
              rightActionBlock={
                <Button
                  disabled={!selectedContactIds.length}
                  icon={Delete}
                  label="Delete"
                  size="small"
                  onClick={handleBulkDelete}
                />
              }
            />
            <Table
              contacts={contacts}
              selectedContactIds={selectedContactIds}
              setDeletionType={setDeletionType}
              setSelectedContact={setSelectedContact}
              setSelectedContactIds={setSelectedContactIds}
              setShowDeleteAlert={setShowDeleteAlert}
            />
          </>
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
        <DeleteAlert
          deletionType={deletionType}
          isOpen={showDeleteAlert}
          selectedContact={selectedContact}
          selectedContactIds={selectedContactIds}
          setContacts={setContacts}
          setSelectedContact={setSelectedContact}
          setSelectedContactIds={setSelectedContactIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      </Container>
    </>
  );
};

export default Contacts;
