import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Dropdown, Typography } from "neetoui";

import { formatDate } from "../utils";

const { Menu, MenuItem } = Dropdown;

const renderAvatarWithNameAndRole = (
  _,
  { firstName, lastName, role, userAvatarUrl }
) => (
  <div className="flex space-x-2">
    <Avatar size="large" user={{ imageUrl: userAvatarUrl }} />
    <div className="flex flex-col">
      <Typography className="neeto-ui-text-gray-800" style="h5">
        {firstName} {lastName}
      </Typography>
      <Typography className="neeto-ui-text-gray-600" style="body3">
        {role}
      </Typography>
    </div>
  </div>
);

const renderDropdownMenu = () => (
  <Dropdown buttonStyle="text" icon={() => <MenuHorizontal size={16} />}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger">Delete</MenuItem.Button>
    </Menu>
  </Dropdown>
);

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
        currentPageNumber={pageNumber}
        defaultPageSize={10}
        handlePageChange={setPageNumber}
        rowData={contacts}
        selectedRowKeys={selectedContactIds}
        columnData={[
          {
            title: "Name & Role",
            dataIndex: "NameAndRole",
            key: "NameAndRole",
            render: renderAvatarWithNameAndRole,
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "Created at",
            dataIndex: "createdAt",
            key: "createdAt",
            render: formatDate,
          },
          {
            title: "",
            dataIndex: "action",
            key: "action",
            width: "48px",
            render: renderDropdownMenu,
          },
        ]}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
