import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

import { customizeValuesByDeletionType, destroyContacts } from "./utils";

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
  const [isDeleting, setIsDeleting] = useState(false);

  const [ids, title, message] = customizeValuesByDeletionType(
    deletionType,
    selectedContact,
    selectedContactIds
  );

  const handleDelete = () => {
    setIsDeleting(true);
    destroyContacts({ ids, setContacts });
    Toastr.success(
      `${ids.length > 1 ? "Contacts" : "Contact"} deleted successfully`
    );
    onClose();
    setSelectedContact({});
    setSelectedContactIds([]);
    setIsDeleting(false);
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={isDeleting}
      message={message}
      title={title}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
