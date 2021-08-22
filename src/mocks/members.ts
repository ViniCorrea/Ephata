const memberListItem = {
  fullName: "John Brown",
  role: "Presbítero",
  age: "32 anos",
  fullAddress: "New York No. 1 Lake Par",
  tags: ["Nice", "Developer"],
};

export const member = {
  id: 1,
  fullName: "John Brown",
  role: "Presbítero",
  age: "32 anos",
  fullAddress: "New York No. 1 Lake Par",
  tags: ["Nice", "Developer"],
};

export const membersList = (quantity = 15) => {
  const list = [];
  for (var i = 0; i < quantity; i++) {
    list.push({ id: i, ...memberListItem });
  }
  return list;
};
