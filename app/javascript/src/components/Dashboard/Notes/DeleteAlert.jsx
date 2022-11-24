import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  isOpen,
  selectedNote,
  setSelectedNote,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await notesApi.destroy({ ids: [selectedNote.id] });
      onClose();
      setSelectedNote({});
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Alert
      isOpen={isOpen}
      isSubmitting={isDeleting}
      title="Delete Note"
      message={
        <>
          Continue deleting&nbsp;
          <span className="neeto-ui-font-bold">{selectedNote.title}</span>? This
          action cannot be undone.
        </>
      }
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
