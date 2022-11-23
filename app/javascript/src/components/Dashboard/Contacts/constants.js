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
