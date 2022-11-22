import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const CONTACTS_DATA = buildSelectOptions([
  "Ronald Richards",
  "Jacob Jones",
  "Albert Borer",
  "Eve Smith",
]);

export const TAGS_DATA = buildSelectOptions([
  "Getting Started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
]);

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string().oneOf(CONTACTS_DATA.map(contact => contact.label)),
      value: yup.string().oneOf(CONTACTS_DATA.map(contact => contact.value)),
    })
    .required("Assigned contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().oneOf(TAGS_DATA.map(tag => tag.label)),
        value: yup.string().oneOf(TAGS_DATA.map(tag => tag.value)),
      })
    )
    .min(1, "Atleast one tag is required")
    .required("Tag is required"),
});

export const USER_NAME = "Oliver Smith";

export const USER_AVATAR_URL = "https://i.pravatar.cc/300";
