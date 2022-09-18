// Basic types in javascript
const isOpen: boolean = false;
// const name: string = 'ricky'; // name is defined on the window object by typescript
const myAge: number = 33;
const list: number[] = [1, 2, 3];
const me: [string, number, boolean] = ['steve', 32, false];
enum Job { webdev, webdesigner, prime minister};
const job: Job = Job.webdev;
const phone: any = 'pixel';
const tablet: any = 3;

// functions in typescript

// params and returns explicit types
// ? for optional params
const sayWord = (word?: string): string => {
  console.log(word);
  return word; // must be string
};

const printNum = (num = 5, ...otherNumbers: number[]): number => {
  console.log(otherNumbers);
  return num; // must be number
};

sayWord('dave');
printNum(3, [2, 5, 8]);

// Implicit types

// typescript infers type on instanciation and will error when type is changed, use :any to override but probably shouldn't
let newName = 'mark';
newName = 'bill'; 
newName = 19;

// type is inferred from other variables as well when instanciation not when changed 
let newNameTwo = newName;
newNameTwo = 19;

// Union types with | 
 const makeMargin = (x: string | number): string => {
   return `margin: ${x}px;`;
 };
  
 makeMargin(10);
 makeMargin('10');
 makeMargin(false);

 // Null types
 // null is included
 let dog: string | undefined = 'sal';
 dog = null;
 dog = 'bo';
 dog = undefined;
