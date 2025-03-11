// https://github.com/john-smilga/react-course-v3/blob/main/13-typescript-tutorial/README.md
// console.log('ts tutorial');

///////////////////////
// [ Type Annotations ]
///////////////////////

// let awesomeName: string = 'shakeAndBake';
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();

// let amount: number = 12;
// amount = 12 - 1;

// let isAwesome: boolean = true;
// isAwesome = false;

///////////////////////
// [ Type Inference ]
///////////////////////

// let awesomeName = 'shakeAndBake';
// awesomeName = 'something';
// awesomeName = awesomeName.toUpperCase();

///////////////////////
// [ Union Type ]
// allow literal value
///////////////////////

// let tax: number | string = 10;
// tax = 100;
// tax = '$10';

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';
// requestStatus = 'success';
// requestStatus = 'error';

///////////////////////
// [ Any Type ]
///////////////////////

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false;

///////////////////////
// [ Practical Application of Type Annotation]
// undefined is a primitive default value
// any is a default type is ts
///////////////////////

// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }

// console.log(foundBook?.length);

///////////////////////
// [ Arrays - Fundamentals ]
///////////////////////

// let prices: number[] = [100, 75, 42];
// let noValues: [] = [];
// let array: (string | boolean)[] = ['apple', true, 'orange', false];
// console.log(prices);
// console.log(noValues);
// console.log(array);

///////////////////////
// [ Objects - Fundamentals ]
// ? in type
///////////////////////

// let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };
// car.brand = 'ford';

// let car2: { brand: string; year?: number } = { brand: 'audi' };
// console.log(car2);

// let book = { title: 'book', cost: 20 };
// let pen = { title: 'pen', cost: 5 };
// let notebook = { title: 'notebook' };
// let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// console.log(items);
// //items[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property

///////////////////////
// [ Functions - Fundamentals ]
// any sometimes will lead runtime error
///////////////////////

// function sayHi(name: string) {
//   console.log(`Hello there ${name.toUpperCase()}!!!`);
// }

// sayHi('john');

// function calculateDiscount(price: number): number | string {
//   // price.toUpperCase();
//   const hasDiscount = true;
//   if (hasDiscount) {
//     return 'Discount Applied';
//   }
//   return price * 0.9;
// }

// const finalPrice = calculateDiscount(200);
// console.log(finalPrice);

// // "any" example
// function addThree(number: any) {
//   let anotherNumber: number = 3;
//   return number + anotherNumber;
// }
// const result = addThree(2);
// const someValue = result;

// // run time error
// someValue.myMethod();

///////////////////////
// [ Functions - Optional and Default Parameters ]
// consider steps when parameter is optional
///////////////////////

// function calculatePrice(price: number, discount?: number) {
//   return price - (discount || 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);
// console.log(priceAfterDiscount); // Output: 80

// let priceWithoutDiscount = calculatePrice(300);
// console.log(priceWithoutDiscount); // Output: 300

// function calculateScore(initialScore: number, penaltyPoints: number = 0) {
//   return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateScore(100, 20);
// console.log(scoreAfterPenalty); // Output: 80

// let scoreWithoutPenalty = calculateScore(300);
// console.log(scoreWithoutPenalty); // Output: 300

///////////////////////
// [ Function - rest parameter ]
// numbers:number[]
///////////////////////

// function sum(message: string, ...numbers: number[]): string {
//   const doubled = numbers.map((num) => num * 2);
//   console.log(doubled);

//   let total = numbers.reduce((previous, current) => {
//     return previous + current;
//   }, 0);
//   return `${message} ${total}`;
// }

// let result = sum('The total is:', 1, 2, 3, 4, 5);
// console.log(result);

///////////////////////
// [ Functions - "void" return type ]
///////////////////////

// function logMessage(message: string): void {
//   console.log(message);
// }
// logMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!

///////////////////////
// [ Functions - Using Objects as Function Parameters ]
// first example: there is an object with property id (destructor)
///////////////////////

// function createEmployee({ id }: { id: number }): {
//   id: number;
//   isActive: boolean;
// } {
//   return { id, isActive: id % 2 === 0 };
// }

// const first = createEmployee({ id: 1 });
// const second = createEmployee({ id: 2 });
// console.log(first, second);

// // alternative
// function createStudent(student: { id: number; name: string }) {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: 'anna',
// };

// createStudent(newStudent);

///////////////////////
// [ Gotcha - Excess Property Checks ]
// TypeScript only performs excess property checks on object literals where they're used
///////////////////////

// function createStudent(student: { id: number; name: string }) {
//   console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
// }

// const newStudent = {
//   id: 5,
//   name: 'anna',
//   email: 'anna@gmail.com',
// };

// createStudent(newStudent);
// compile error
// createStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' });

///////////////////////
// [ Type Alias ]
///////////////////////

// type User = { id: number; name: string; isActive: boolean };
// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };
// console.log(john, susan);

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// }
// console.log(createUser(john));

// type StringOrNumber = string | number; // Type alias for string | number
// let value: StringOrNumber;
// value = 'hello'; // This is valid
// value = 123; // This is also valid

// type Theme = 'light' | 'dark'; // Type alias for theme
// let theme: Theme;
// theme = 'light'; // This is valid
// theme = 'dark'; // This is also valid
// function setTheme(t: Theme) {
//   theme = t;
// }
// setTheme('dark');

///////////////////////
// [ Intersection Types ]
// | (union type) or & (intersection type)
///////////////////////

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//   id: 2,
//   name: 'How to Cook a Dragon',
//   price: 15,
// };

// const book2: Book = {
//   id: 3,
//   name: 'The Secret Life of Unicorns',
//   price: 18,
// };

// const discountedBook: DiscountedBook = {
//   id: 4,
//   name: 'Gnomes vs. Goblins: The Ultimate Guide',
//   price: 25,
//   discount: 0.15,
// };

// console.log(book1, book2, discountedBook);

///////////////////////
// [ Type Alias - Computed Properties ]
///////////////////////

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };
console.log(tiger);

// 530
