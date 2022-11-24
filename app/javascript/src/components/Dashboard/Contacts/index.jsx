import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Delete } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header, SubHeader } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { CONTACTS_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewContactPane from "./Pane/NewContact";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS_DATA);
  const [selectedContact, setSelectedContact] = useState({});
  const [deletionType, setDeletionType] = useState("");

  const handleBulkDelete = () => {
    setDeletionType("bulk");
    setIsDeleteAlertOpen(true);
  };

  return (
    <>
      <MenuBar isMenuBarOpen={isMenuBarOpen} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              label="Add Contact"
              size="small"
              onClick={() => setIsNewContactPaneOpen(true)}
            />
          }
          menuBarToggle={() =>
            setIsMenuBarOpen(isMenuBarOpen => !isMenuBarOpen)
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
              setIsDeleteAlertOpen={setIsDeleteAlertOpen}
              setSelectedContact={setSelectedContact}
              setSelectedContactIds={setSelectedContactIds}
            />
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setIsNewContactPaneOpen(true)}
            primaryActionLabel="Add Contact"
            subtitle="Add your contacts here."
            title="Looks like you don't have any contacts!"
          />
        )}
        <NewContactPane
          isNewContactPaneOpen={isNewContactPaneOpen}
          setContacts={setContacts}
          setIsNewContactPaneOpen={setIsNewContactPaneOpen}
        />
        <DeleteAlert
          deletionType={deletionType}
          isOpen={isDeleteAlertOpen}
          selectedContact={selectedContact}
          selectedContactIds={selectedContactIds}
          setContacts={setContacts}
          setSelectedContact={setSelectedContact}
          setSelectedContactIds={setSelectedContactIds}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </>
  );
};

export default Contacts;
