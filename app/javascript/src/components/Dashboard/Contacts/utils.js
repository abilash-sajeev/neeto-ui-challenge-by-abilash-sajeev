export const generateContactsData = (contacts, multiplier = 2) =>
  Array(multiplier)
    .fill(contacts)
    .flat()
    .map((contact, index) => ({ ...contact, id: index }));
