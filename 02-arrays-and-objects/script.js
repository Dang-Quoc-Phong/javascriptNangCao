// 01-array-basics

// let x;

// // Array Literal
// const numbers = [12, 45, 33, 29, 39, 102];
// const mixed = [12, 'Hello', true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', 'orange');

// // Get value by index
// x = numbers[0];

// x = numbers[0] + numbers[3];

// x = `My favorite fruit is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';

// // length is not read-only
// // fruits.length = 2;

// fruits[3] = 'strawberry';

// // Using the length as the index will always add on the the end
// fruits[fruits.length] = 'blueberry';
// fruits[fruits.length] = 'peach';

// x = fruits;

// console.log(x);

// 02-array-methods

// let x;

// const arr = [28, 38, 44, 29, 109];


// arr.push(100);


// arr.pop();
// arr.unshift(99);


// arr.shift();


// arr.reverse();


// x = arr.includes(445);

// x = arr.indexOf(28);


// x = arr.toString();
// x = arr.join();

// x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(4, 1);

// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);

// 03-array-nesting-concat-spread

// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// // Nesting arrays

// // Nesting berries inside of fruits
// fruits.push(berries);

// // Now we can access 'blueberry' with the following
// x = fruits[3][1];

// // Create a new variable and nest both arrays
// const allFruits = [fruits, berries];

// x = allFruits[1][2];

// // concat() - Concatenate arrays
// x = fruits.concat(berries);

// // spread operator (...) - Concatenate with
// x = [...fruits, ...berries];

// // flat() - Flatten an array
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();

// // Static methods of Array object

// // isArray() - Check is is an array
// x = Array.isArray(fruits);

// // from() - Create an array from an array like value
// x = Array.from('12345');

// // of() - Create an array from a set of values
// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);

// console.log(x);

// 04-array-challenge
// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr.push(6);
arr.unshift(0);
arr.reverse();

console.log(arr);

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);