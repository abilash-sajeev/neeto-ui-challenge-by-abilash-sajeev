import { buildSelectOptions } from "utils";
import * as yup from "yup";

import { generateContactsData } from "./utils";

export const CONTACTS_DATA = generateContactsData(
  [
    {
      firstName: "Oliver",
      lastName: "Smith",
      role: "Owner",
      userAvatarUrl: "https://i.pravatar.cc/300?img=12",
      email: "oliver@example.com",
      createdAt: "Oct, 2, 2021",
    },
    {
      firstName: "Anna",
      lastName: "Smith",
      role: "Admin",
      userAvatarUrl: "https://i.pravatar.cc/300?img=44",
      email: "anna@example.com",
      createdAt: "Dec, 25, 2021",
    },
    {
      firstName: "Eve",
      lastName: "Smith",
      role: "External User",
      userAvatarUrl: "https://i.pravatar.cc/300?img=5",
      email: "eve@example.com",
      createdAt: "Mar, 30, 2022",
    },
    {
      firstName: "Peter",
      lastName: "Smith",
      role: "Project Manager",
      userAvatarUrl: "https://i.pravatar.cc/300?img=14",
      email: "peter@example.com",
      createdAt: "Jan, 12, 2022",
    },
    {
      firstName: "Adam",
      lastName: "Smith",
      role: "Agent",
      userAvatarUrl: "https://i.pravatar.cc/300?img=59",
      email: "adam@example.com",
      createdAt: "Oct, 21, 2022",
    },
  ],
  5
);

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  role: null,
};

export const ROLES_DATA = buildSelectOptions([
  "Owner",
  "Admin",
  "External User",
  "Project Manager",
  "Agent",
]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email address is required"),
  role: yup
    .object()
    .shape({
      label: yup.string().oneOf(ROLES_DATA.map(role => role.label)),
      value: yup.string().oneOf(ROLES_DATA.map(role => role.value)),
    })
    .required("Role is required"),
});

export const USER_AVATAR_URL = "https://i.pravatar.cc/300";
