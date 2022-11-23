import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import { customizeValuesByDeletionType } from "./utils";

const DeleteAlert = ({
  setContacts,
  onClose,
  isOpen,
  selectedContact,
  setSelectedContact,
  selectedContactIds,
  setSelectedContactIds,
  deletionType,
}) => {
  const [deleting, setDeleting] = useState(false);

  const [ids, title, message] = customizeValuesByDeletionType(
    deletionType,
    selectedContact,
    selectedContactIds
  );

  const destroyContacts = ({ ids }) => {
    setContacts(contacts =>
      contacts.filter(contact => !ids.includes(contact.id))
    );

    Toastr.success(
      `${ids.length > 1 ? "Contacts" : "Contact"} deleted successfully`
    );
  };

  const handleDelete = () => {
    setDeleting(true);
    destroyContacts({ ids });
    onClose();
    setSelectedContact({});
    setSelectedContactIds([]);
    setDeleting(false);
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={deleting}
      message={message}
      title={title}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
