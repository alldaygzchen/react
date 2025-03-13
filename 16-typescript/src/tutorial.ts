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
// consider alternative steps when parameter is optional
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
// first example: there is an object with property id
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

// const propName = "age";

// type Animal = {
//   [propName]: number;
// };

// let tiger: Animal = { [propName]: 5 };
// console.log(tiger);

///////////////////////
// [ Interface - Fundamentals ]
// optional parameter and readonly in interface
///////////////////////

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",
// };

// deepWork.title = "New Title"; // allowed
// // deepWork.isbn = 654321; // not allowed

///////////////////////
// [ Interface - Methods ]
// write function in instance directly
// this can be used in regular function
///////////////////////

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
// };

// deepWork.printAuthor();

///////////////////////
// [ Interface - Methods (more options) ]
// add method as a property
// aware of arrrow function
// multiple ways to write your function
///////////////////////

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   // method
//   printAuthor(): void;
//   printTitle(message: string): string;
//   printSomething: (someValue: number) => number;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: "Deep Work",
//   author: "Cal Newport",
//   genre: "Self-help",
//   printAuthor() {
//     console.log(this.author);
//   },
//   printTitle(message) {
//     return `${this.title} ${message}`;
//   },
//   // first option
//   // printSomething: function (someValue) {
//   //   return someValue;
//   // },
//   // second option
//   printSomething: (someValue) => {
//     // "this" gotcha
//     console.log(deepWork.author);
//     return someValue;
//   },
//   // third option
//   // printSomething(someValue) {
//   //   return someValue;
//   // },
//   // alternative
//   // printAuthor: () => {
//   //   console.log(deepWork.author);
//   // },
// };
// console.log(deepWork.printSomething(34));

// deepWork.printAuthor();
// const result = deepWork.printTitle("is an awesome book");
// console.log(result);

///////////////////////
// [ Interface - Merging, Extend, TypeGuard ]
//  Declare an interface with the same name more than once, and TypeScript will merge their members
//  Extending an interface in TypeScript is a way to create a new interface
//  Multiple Extending is allowed
//  Type predicate in hw e.g. obj is Manager
///////////////////////

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: "John",
//   age: 30,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
// };

// console.log("person", person);

///////////////////////

// interface Employee extends Person {
//   employeeId: number;
// }

// const employee: Employee = {
//   name: "jane",
//   age: 28,
//   employeeId: 123,
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//   },
// };

// console.log("employee", employee);

///////////////////////

// interface Manager extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Manager = {
//   name: "Bob",
//   age: 35,
//   dogName: "Rex",
//   getDetails() {
//     return `Name: ${this.name}, Age: ${this.age}`;
//   },
//   getDogDetails() {
//     return `Dog Name: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log("Managing people...");
//   },
// };

// console.log("manager", manager);

///////////////////////
// [ Interface vs Type Alias ]
// Type alias for primitive, literal types, computed properties
// Interfaces for  implemented by classes, declaration merging
// Type alias can merge but no declaration merge
///////////////////////

///////////////////////
// [ Tuples ]
// an array with fixed length and ordered with fixed types.
//  tuples in TypeScript are not read-only and can be pushed
///////////////////////

// let person: [string, number] = ["john", 25];
// console.log(person[0]);
// console.log(person[1]);

// let john: [string, number?] = ["john"];
// console.log(john);

// function getPerson(): [string, number] {
//   return ["john", 25];
// }

// let randomPerson = getPerson();
// console.log(randomPerson[0]); // Outputs: john
// console.log(randomPerson[1]);

// // not complaining
// // let susan: [string, number] = ["susan", 25];
// // susan[0] = "bob";
// // susan.push("some random value");

// let susan: readonly [string, number] = ["susan", 25];
// susan[0] = 'bob';
// susan.push('some random value');
// console.log(susan);

///////////////////////
// [ Enums ]
// it is a type and start with 0
// it the values are all number, it also includes reverse mapping result
// we can assign numbers to type enum but not string values

///////////////////////

// enum ServerResponseStatus {
//   Success = 200,
//   Error = "Error",
// }

// interface ServerResponse {
//   result: ServerResponseStatus;
//   data: string[];
// }

// function getServerResponse(): ServerResponse {
//   return {
//     result: ServerResponseStatus.Error, // cannot assign "Error" directly
//     data: ["first item", "second item"],
//   };
// }

// const response: ServerResponse = getServerResponse();
// console.log(response);

///////////////////////
// [ Type Assertion ]
// json parse returns any
///////////////////////

// let someValue: any = "This is a string";

// let strLength: number = (someValue as string).length;
// console.log("strLength", strLength);

// type Bird = {
//   name: string;
// };

// // Assume we have a JSON string from an API or local file
// let birdString = '{"name": "Eagle"}';
// let dogString = '{"breed": "Poodle"}';

// //

// // Parse the JSON string into an object
// let birdObject = JSON.parse(birdString);
// let dogObject = JSON.parse(dogString);

// // We're sure that the jsonObject is actually a Bird
// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name); // undefined

// ///////////////////////

// enum Status {
//   Pending = "pending",
//   Declined = "declined",
// }

// type User = {
//   name: string;
//   status: Status;
// };

// const statusValue = "pending";
// const user: User = { name: "john", status: statusValue as Status };
// console.log(user);

///////////////////////
// [ Type - 'unknown' ]
// a variable could be anything, but we need to perform some type-checking before we can use it.
// error is unknown by default
///////////////////////

// let unknownValue: unknown;
// unknownValue = "Hello World";
// unknownValue = [1, 2, 3];
// unknownValue = 42.3344556;

// if (typeof unknownValue === "number") {
//   // TypeScript knows that unknownValue is a string in this block
//   console.log(unknownValue.toFixed(2)); // OK
// }

// function runSomeCode() {
//   const random = Math.random();
//   if (random < 0.5) {
//     throw new Error("Something went wrong");
//   } else {
//     throw "some error";
//   }
// }

// try {
//   runSomeCode();
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message);
//   } else {
//     console.log(error);
//     console.log("there was an error....");
//   }
// }

///////////////////////
// [Type - "never" ]
// we cannot assign a value to type never
///////////////////////

// type Theme = "light" | "dark";

// function checkTheme(theme: Theme): void {
//   if (theme === "light") {
//     console.log("light theme");
//     return;
//   }
//   if (theme === "dark") {
//     console.log("dark theme");
//     return;
//   }
//   // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
//   theme;
// }

// enum Color {
//   Red = "Red",
//   Blue = "Blue",
// }

// function getColorName(color: Color) {
//   switch (color) {
//     case Color.Red:
//       return "Red";
//     case Color.Blue:
//       return "Blue";
//     default:
//       // at build time
//       let unexpectedColor: never = color;
//       // at runtime
//       throw new Error(`Unexpected color value: ${unexpectedColor}`);
//   }
// }

// console.log(getColorName(Color.Red)); // Red
// console.log(getColorName(Color.Blue)); // Blue
// console.log(getColorName("Green" as Color)); // Green

///////////////////////
// [ Modules ]
// Treat all scripts as global scope, thus it also has name collisions
// solution1: "moduleDetection": "force" in tsconfig.json
// solution2: include import and export

// Functions, variable, type can all be exported and imported
///////////////////////

// export function sayHello(name: string): void {
//   console.log(`Hello ${name}!`);
// }

// export let person = "susan";

// export type Student = {
//   name: string;
//   age: number;
// };

// const newStudent: Student = {
//   name: "peter",
//   age: 24,
// };

// export default newStudent;

// import newStudent, { sayHello, person, type Student } from "./actions";

// sayHello("TypeScript");
// console.log(person);
// console.log(newStudent);

// const anotherStudent: Student = {
//   name: "bob",
//   age: 23,
// };

// console.log(anotherStudent);

///////////////////////
// [ Type Guarding ]
// Some expression that performs a runtime check that guarantees the type in some scope
// typeof, .type (Equality Narrowing), in (Check for property), Truthy/Falsy guard, instanceof guard, type predicate(not only booleans but also narrow down type)
///////////////////////

///////////////////////
// typeof
// type ValueType = string | number | boolean;
// function checkValue(value: ValueType): void {
//   if (typeof value === "string") {
//     console.log(value.toLowerCase());
//     return;
//   }
//   if (typeof value === "number") {
//     console.log(value.toFixed(2));
//     return;
//   }
//   console.log(`boolean: ${value}`);
// }
// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;
// checkValue(value);

///////////////////////

// .type (Equality Narrowing)
// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark();
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow();
//   }
// }

// makeSound({ type: "dog", name: "max", bark: () => console.log("woooo") });

///////////////////////

// in (Check for property)
// function makeSound2(animal: Animal) {
//   if ("bark" in animal) {
//     // TypeScript knows that `animal` is a Dog in this block
//     animal.bark();
//   } else {
//     // TypeScript knows that `animal` is a Cat in this block
//     animal.meow();
//   }
// }
// makeSound2({ type: "dog", name: "max", bark: () => console.log("woooo") });

///////////////////////

// Truthy/Falsy guard
// function printLength(str: string | null | undefined) {
//   if (str) {
//     // In this block, TypeScript knows that `str` is a string
//     // because `null` and `undefined` are falsy values.
//     console.log(str.length);
//   } else {
//     console.log("No string provided");
//   }
// }

// printLength("Hello"); // Outputs: 5
// printLength(null); // Outputs: No string provided
// printLength(undefined); // Outputs: No string provided

///////////////////////

// instanceof guard
// try {
//   throw new Error("This is an error");
// } catch (error) {
//   if (error instanceof Error) {
//     console.log("Caught an Error object: " + error.message);
//   } else {
//     console.log("Caught an unknown error");
//   }
// }

// function checkInput(input: Date | string): string {
//   if (input instanceof Date) {
//     return input.getFullYear().toString();
//   }
//   return input;
// }

// const year = checkInput(new Date());
// const random = checkInput("2020-05-05");
// console.log(year);
// console.log(random);

///////////////////////

// Type Predicate
// verbose , prefered solution:  give a type property to the object (discriminated union) [hw] or type assertion e.g. person as Student

// type Student = {
//   name: string;
//   study: () => void;
// };

// type User = {
//   name: string;
//   login: () => void;
// };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("Studying") }
//     : { name: "mary", login: () => console.log("Logging in") };
// };

// const person = randomPerson();
// function isStudent(person: Person): person is Student {
//   // return 'study' in person;
//   return (person as Student).study !== undefined;
// }

// // Usage

// if (isStudent(person)) {
//   person.study(); // This is safe because TypeScript knows that 'person' is a Student.
// } else {
//   person.login();
// }

///////////////////////
// [ Generics ]
// It still can infer type, but not recommended, it is only used in some cases such as function
// Promise is define as a generic interface in ts
// React also uses generics
// Type and interface both can use generic
// function processValue<T extends number | string>(value: T): T {
//   console.log(value);
//   return value;
// }
// function printName<T extends { name: string }>(input: T): void {
//     console.log(input.name);
//   }
///////////////////////

// // Define generic array
// let array1: Array<string> = ["Apple", "Banana", "Mango"];
// let array2: Array<number> = [1, 2, 3];
// let array3: Array<boolean> = [true, false, true];
// console.log(array1, array2, array3);

// // Define a generic function
// function genericFunction<T>(arg: T): T {
//   return arg;
// }

// console.log(genericFunction<string>("Hello World"));
// console.log(genericFunction<number>(2));

///////////////////////

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   result = Array(length).fill(value);
//   return result;
// }

// let arrayStrings = createArray<string>(3, "hello"); // ["hello", "hello", "hello"]
// let arrayNumbers = createArray<number>(4, 100); // [100, 100, 100, 100]

// console.log(arrayStrings);
// console.log(arrayNumbers);

///////////////////////

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }

// // Usage (inference)
// // let pairResult = pair<number, string>(123, "Hello");
// let pairResult = pair(123, "Hello");
// console.log(pairResult); // Output: [123, "Hello"]

///////////////////////

// // Define a generic interface
// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }
// const genericString: GenericInterface<string> = {
//   value: "Hello World",
//   getValue() {
//     return this.value;
//   },
// };
// console.log(genericString);

// // Promise
// // must

// async function someFunc(): Promise<string> {
//   return "Hello World";
// }

// const result = someFunc();
// console.log(result);

// // Generics - Inferred Type and Type Constraints
// function processValue<T extends number | string>(value: T): T {
//   console.log(value);
//   return value;
// }

// processValue("hello");
// processValue(12);
// // compile error
// // processValue(blue);

///////////////////////

// type Car = {
//   brand: string;
//   model: string;
// };

// const car: Car = {
//   brand: "ford",
//   model: "mustang",
// };

// type Product = {
//   name: string;
//   price: number;
// };

// const product: Product = {
//   name: "shoes",
//   price: 1.99,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// const student: Student = {
//   name: "peter",
//   age: 20,
// };

// // function printName<T extends Student | Product>(input: T): void {
// //   console.log(input.name);
// // }
// // printName(student);
// // printName(product);

// function printName<T extends { name: string }>(input: T): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);

///////////////////////

// Generics - Default Value

// interface StoreData<T = any> {
//   data: T[];
// }

// const storeNumbers: StoreData<number> = {
//   data: [1, 2, 3, 4],
// };

// // const randomStuff: StoreData<any> = {
// //   data: ["random", 1],
// // };

// const randomStuff: StoreData = {
//   data: ["random", 1],
// };

// console.log(storeNumbers);
// console.log(randomStuff);

///////////////////////

// axios
// the response.data will have the format of { name: string }[]

// const { data } = axios.get(someUrl);

// axios.get<{ name: string }[]>(someUrl);

// export class Axios {
//   get<T = any, R = AxiosResponse<T>, D = any>(
//     url: string,
//     config?: AxiosRequestConfig<D>
//   ): Promise<R>;
// }

// export interface AxiosResponse<T = any, D = any> {
//   data: T;
//   status: number;
//   statusText: string;
//   headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
//   config: InternalAxiosRequestConfig<D>;
//   request?: any;
// }

// sometime we do not know the response.data format
// sol1: any
// const response = await axios.get(someUrl);
// console.log(response.data);
// sol2: docs
// interface User {
//     name: string;
//     age: number;
//   }

//   const response = await axios.get<User[]>(someUrl);
// sol3: zod
// import { z } from "zod";

// const UserSchema = z.object({
//   name: z.string(),
//   age: z.number(),
// });

// const response = await axios.get<unknown>(someUrl);
// const parsedData = UserSchema.array().safeParse(response.data);

// if (parsedData.success) {
//   console.log(parsedData.data); // Now TypeScript knows this is valid
// } else {
//   console.error("Invalid response:", parsedData.error);
// }

///////////////////////
// [ Fetch data and Declararation Files ]
//
///////////////////////

const url = "https://www.scourse-api.com/react-tours-project";

// Define a type for the data you're fetching.
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
  // Add more fields as necessary.
};

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Tour[] = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "there was an error...";
    console.error(errMsg);

    // throw error;
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour.name);
});

///////////////////////
// axios

///////////////////////

// zod - runtime check (13:25)
