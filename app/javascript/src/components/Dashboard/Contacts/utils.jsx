import React from "react";

import dayjs from "dayjs";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";

import { USER_AVATAR_URL } from "../constants";
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

export const renderDropdownMenu = handleDeleteContact => (
  <Dropdown buttonStyle="text" icon={() => <MenuHorizontal size={16} />}>
    <Menu>
      <MenuItem.Button>Edit</MenuItem.Button>
      <MenuItem.Button style="danger" onClick={handleDeleteContact}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);

export const buildColumnData = handleDeleteContact => [
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
    render: () => renderDropdownMenu(handleDeleteContact),
  },
];

export const generateUUID = () => Math.random().toString(36).slice(-6);

export const generateContactsData = (contacts, multiplier = 2) =>
  Array(multiplier)
    .fill(contacts)
    .flat()
    .map(contact => ({ ...contact, id: generateUUID() }));

export const customizeValuesByDeletionType = (
  deletionType,
  selectedContact,
  selectedContactIds
) => {
  if (deletionType === "single") {
    return [
      [selectedContact.id],
      "Delete Contact",
      <>
        Continue deleting&nbsp;
        <span className="neeto-ui-font-bold">
          {selectedContact.firstName} {selectedContact.lastName}
        </span>
        ? This action cannot be undone.
      </>,
    ];
  }

  return [
    selectedContactIds,
    `Delete ${
      selectedContactIds.length > 1
        ? `${selectedContactIds.length} Contacts`
        : "Contact"
    }`,
    `Are you sure you want to delete ${
      selectedContactIds.length > 1 ? "these contacts" : "this contact"
    }? This action cannot be undone.`,
  ];
};

export const destroyContacts = ({ ids, setContacts }) => {
  setContacts(contacts =>
    contacts.filter(contact => !ids.includes(contact.id))
  );
};

export const createContact = ({ contact, setContacts }) => {
  setContacts(contacts =>
    contacts.concat([
      {
        ...contact,
        id: generateUUID(),
        role: contact.role.label,
        userAvatarUrl: USER_AVATAR_URL,
        createdAt: dayjs(),
      },
    ])
  );
};
