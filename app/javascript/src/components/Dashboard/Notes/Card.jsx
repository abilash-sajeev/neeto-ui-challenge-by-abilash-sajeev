import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Avatar, Dropdown, Tooltip, Tag, Typography } from "neetoui";

import {
  calculateCreatedAgo,
  formatDateRelativeToNow,
} from "components/Dashboard/utils";

import { USER_NAME, USER_AVATAR_URL } from "../constants";

const { Menu, MenuItem } = Dropdown;

const Card = ({ note, setSelectedNote, setIsDeleteAlertOpen }) => {
  const { created_at: noteCreationTimestamp } = note;

  const handleDeleteNote = () => {
    setSelectedNote(note);
    setIsDeleteAlertOpen(true);
  };

  return (
    <div className="neeto-ui-shadow-xs neeto-ui-rounded-sm mb-4 flex w-full flex-col border p-4">
      <div className="flex items-start justify-between">
        <Typography style="h4" weight="bold">
          {note.title}
        </Typography>
        <Dropdown buttonStyle="text" icon={() => <MenuVertical size={16} />}>
          <Menu>
            <MenuItem.Button>Edit</MenuItem.Button>
            <MenuItem.Button style="danger" onClick={handleDeleteNote}>
              Delete
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
      <hr className="my-3" />
      <div className="flex flex-row justify-between">
        <Tag label="Getting Started" style="secondary" type="outline" />
        <div className="flex items-center space-x-2">
          <Clock size={12} />
          <Tooltip
            content={calculateCreatedAgo(noteCreationTimestamp)}
            position="bottom-end"
          >
            <Typography
              className="neeto-ui-text-gray-600"
              style="body3"
            >{`Created ${formatDateRelativeToNow(
              noteCreationTimestamp
            )}`}</Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              name: USER_NAME,
              imageUrl: USER_AVATAR_URL,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
