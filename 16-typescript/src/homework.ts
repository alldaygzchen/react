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
