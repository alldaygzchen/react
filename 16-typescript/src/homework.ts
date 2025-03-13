///////////////////////
// [ Type Annotations,Type Inference ]
///////////////////////

// let greeting: string = 'Hello, TypeScript!';
// greeting = greeting.toUpperCase();

// let age: number = 25;
// age = age + 5;

// // 3. Boolean
// let isAdult: boolean = age >= 18;
// isAdult = !isAdult;

///////////////////////
// [ Union Type, Any Type]
///////////////////////

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
// orderStatus = 'shipped';
// orderStatus = 'delivered';

// let discount: number | string = 20;
// discount = '20%';

///////////////////////
// [ Arrays - Fundamentals ]
///////////////////////

// let temperatures: number[] = [20, 25, 30];
// let colors: string[] = ['red', 'green', 'blue'];
// let mixedArray: (number | string)[] = [1, 'two', 3];
// console.log(temperatures);
// console.log(colors);
// console.log(mixedArray);

///////////////////////
// [ Objects - Fundamentals ]
///////////////////////

// let product1 = { title: 'Shirt', price: 20 };
// let product2 = { title: 'Pants' };
// let products: { title: string; price?: number }[] = [product1, product2];
// console.log(products);

///////////////////////
// [ Functions - Fundamentals ]
///////////////////////

// const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];

// function isNameInList(name: string): boolean {
//   return names.includes(name);
// }

// let nameToCheck: string = 'Jane';
// if (isNameInList(nameToCheck)) {
//   console.log(`${nameToCheck} is in the list.`);
// } else {
//   console.log(`${nameToCheck} is not in the list.`);
// }

///////////////////////
// [ Functions - Using Union Types as Function Parameters ]
///////////////////////

// function processInput(input: string | number) {
//   if (typeof input === 'number') {
//     console.log(input * 2);
//   } else {
//     console.log(input.toUpperCase());
//   }
// }

// processInput(10); // Output: 20
// processInput('Hello'); // Output: HELLO

///////////////////////
// [ Functions - All ]
///////////////////////

// function processData(
//   input: string | number,
//   config: { reverse: boolean } = { reverse: false }
// ): string | number {
//   if (typeof input === 'number') {
//     return input * input;
//   } else {
//     return config.reverse
//       ? input.toUpperCase().split('').reverse().join('')
//       : input.toUpperCase();
//   }
// }

// console.log(processData(10)); // Output: 100
// console.log(processData('Hello')); // Output: HELLO
// console.log(processData('Hello', { reverse: true })); // Output: OLLEH

///////////////////////
// [ Type Alias ]
///////////////////////

// type Employee = { id: number; name: string; department: string };
// type Manager = { id: number; name: string; employees: Employee[] };

// type Staff = Employee | Manager;

// function printStaffDetails(staff: Staff) {
//   if ('employees' in staff) {
//     console.log(
//       `${staff.name} is a manager of ${staff.employees.length} employees.`
//     );
//   } else {
//     console.log(
//       `${staff.name} is an employee in the ${staff.department} department.`
//     );
//   }
// }

// const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
// const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
// const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

// printStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.
// printStaffDetails(bob);

///////////////////////
// [ Interface ]
///////////////////////

// interface Computer {
//   readonly id: number;
//   brand: string;
//   ram: number;
//   upgradeRam(increase: number): number;
//   storage?: number;
// }

// const laptop: Computer = {
//   id: 1,
//   brand: "random brand",
//   ram: 8,
//   upgradeRam(amount: number) {
//     this.ram += amount;
//     return this.ram;
//   },
// };

// laptop.storage = 256;

// console.log(laptop.upgradeRam(4));
// console.log(laptop);

///////////////////////
// [ Interface - Merging, Extend, TypeGuard ]
///////////////////////

// interface Person {
//   name: string;
// }

// interface DogOwner extends Person {
//   dogName: string;
// }

// interface Manager extends Person {
//   managePeople(): void;
//   delegateTasks(): void;
// }

// function getEmployee(): Person | DogOwner | Manager {
//   const random = Math.random();

//   if (random < 0.33) {
//     return {
//       name: "john",
//     };
//   } else if (random < 0.66) {
//     return {
//       name: "sarah",
//       dogName: "Rex",
//     };
//   } else {
//     return {
//       name: "bob",
//       managePeople: () => console.log("Managing people..."),
//       delegateTasks: () => console.log("Delegating tasks..."),
//     };
//   }
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// console.log(employee);

// // compile error
// // function isManager(obj: Person | DogOwner | Manager): boolean {
// //   return "managePeople" in obj;
// // }

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return "managePeople" in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

///////////////////////
// [ Enums ]
///////////////////////

// enum UserRole {
//   Admin,
//   Manager,
//   Employee,
// }

// // Define a type alias named User
// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   contact: [string, string]; // Tuple: [email, phone]
// };

// // Define a function named createUser
// function createUser(user: User): User {
//   return user;
// }

// // Call the createUser function
// const user: User = createUser({
//   id: 1,
//   name: "John Doe",
//   role: UserRole.Admin,
//   contact: ["john.doe@example.com", "123-456-7890"],
// });

// console.log(user);

///////////////////////
// [ Challenge - Discriminated Unions and exhaustive check using the never type ]
///////////////////////

// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action): number {
//   switch (action.type) {
//     case "increment":
//       return state + action.amount;
//     // if remove decrement,, it will have a compile error
//     case "decrement":
//       return state - action.amount;

//     default:
//       const unexpectedAction: never = action;
//       throw new Error(`Unexpected action: ${unexpectedAction}`);
//   }
// }

// const newState = reducer(15, {
//   user: "john",
//   type: "increment",
//   amount: 5,
//   timestamp: 123456,
// });

// console.log("newState", newState);
