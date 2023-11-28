const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

let employeesA = {};
employeesA.name = "Alicia";
employeesA.age = 29;
employeesA.hobbies = ["Shopping", "Reading"];
employees.push(employeesA);

let employeesB = {};
employeesB.name = "Kody";
employeesB.age = 19;
employeesB.hobbies = ["Computer Games", "Wakeboard"];
employees.push(employeesB);

// or employees.push({name: "Alicia",age: 29,hobbies: ["Shopping", "Reading"]},{name: "Kody",age: 19,hobbies: ["Computer Games", "Wakeboard"]},)

// delete employees[3];

// let updateEmployees = employees;
console.log(employees);
