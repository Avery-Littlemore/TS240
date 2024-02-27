type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
};

// function formatName(options: NameOptions): string {
//   const title = options.title ? `${options.title} ` : "";
//   const firstName = options.firstName ?? 'John'
//   const lastName = options.lastName ?? 'Doe'
//   return `${title}${firstName} ${lastName}`;
// }

function formatName({
  firstName = 'John',
  lastName = 'Doe',
  title,
}: NameOptions): string {
  let formattedName = title ? title + ' ' : '';
  formattedName += firstName + ' ' + lastName
  return formattedName;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
});

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe