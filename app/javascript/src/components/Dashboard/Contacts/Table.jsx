import React, { useState } from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildColumnData } from "./utils";

const Table = ({
  contacts = [],
  selectedContactIds,
  setSelectedContactIds,
}) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="contacts-table-height w-full">
      <NeetoUITable
        rowSelection
        columnData={buildColumnData()}
        currentPageNumber={pageNumber}
        defaultPageSize={10}
        handlePageChange={setPageNumber}
        rowData={contacts}
        selectedRowKeys={selectedContactIds}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
