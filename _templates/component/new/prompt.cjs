module.exports = [
  {
    type: "input",
    name: "name",
    message: "Component Name: ",
  },
  {
    type: "select",
    name: "type",
    message: "Select the component level (Atomic Design):",
    choices: ["atoms", "molecules", "organisms"],
  },
];
