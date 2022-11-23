import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildColumnData } from "./utils";

const Table = ({
  contacts = [],
  selectedContactIds,
  setSelectedContactIds,
  setSelectedContact,
  setShowDeleteAlert,
  setDeletionType,
}) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleDeleteContact = () => {
    setDeletionType("single");
    setShowDeleteAlert(true);
  };

  return (
    <div className="contacts-table-height w-full">
      <NeetoUITable
        rowSelection
        columnData={buildColumnData(handleDeleteContact)}
        currentPageNumber={pageNumber}
        defaultPageSize={10}
        handlePageChange={setPageNumber}
        rowData={contacts}
        selectedRowKeys={selectedContactIds}
        onRowClick={(_, contact) => setSelectedContact(contact)}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
