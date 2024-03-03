// Define two interfaces, Person and Employee. Person should have name and age. Employee should extend Person and add an employeeId. 
// Then create an object of type Employee.

// Expected outcome:
// The Employee type object should adhere to both Person properties and its own employeeId.

interface Person2 {
  name: string,
  age: number,
}

interface Employee2 extends Person2 {
  employeeId: number,
}

let employee2: Employee2 = {
  name: 'ave',
  age: 31,
  employeeId: 101,
}