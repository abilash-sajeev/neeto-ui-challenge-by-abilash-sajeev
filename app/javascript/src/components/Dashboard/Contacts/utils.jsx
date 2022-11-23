import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";

import { formatDate } from "../utils";

const { Menu, MenuItem } = Dropdown;

export const renderAvatarWithNameAndRole = (
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

export const renderDropdownMenu = () => (
  <Dropdown buttonStyle="text" icon={() => <MenuHorizontal size={16} />}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger">Delete</MenuItem.Button>
    </Menu>
  </Dropdown>
);

export const buildColumnData = () => {
  const columnData = [
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
  ];

  return columnData;
};

export const generateContactsData = (contacts, multiplier = 2) =>
  Array(multiplier)
    .fill(contacts)
    .flat()
    .map((contact, index) => ({ ...contact, id: index }));
