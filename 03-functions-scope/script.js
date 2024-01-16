// Define a function
// function sayHello() {
//     console.log('Hello World');
//   }
  
//   // Gọi, thực thi hoặc gọi một hàm
//   sayHello();
  
//  // Định nghĩa hàm có tham số
//   function add(num1, num2) {
//     console.log(num1 + num2);
//   }
  
//   // Invoke function with arguments
//   add(5, 10);
  
  
//   // Returning a value
//   function subtract(num1, num2) {
//     return num1 - num2;
  
//     console.log('After the return');
//   }
  
//   // Gán giá trị trả về cho một biến
//   const result = subtract(10, 2);
  
//   console.log(result, subtract(20, 5));


// 02-params-arguments
// Default Params
// function registerUser(user = 'Bot') {
//     // Old way - before using `=`
//     // if (!user) {
//     //   user = 'Bot';
//     // }
  
//     return user + ' is registered';
//   }
  
//   console.log(registerUser());
  
//   // Rest Params
//   function sum(...numbers) {
//     let total = 0;
  
//     for (const num of numbers) {
//       total += num;
//     }
  
//     return total;
//   }
  
//   console.log(sum(1, 2, 3, 4, 5, 6, 100));
// // Đối tượng là tham số
//   function loginUser(user) {
//     return `The user ${user.name} with the id of ${user.id} is logged in`;
//   }
  
//   const user = {
//     id: 1,
//     name: 'John',
//   };
  
//   console.log(loginUser(user));
//   console.log(
//     loginUser({
//       id: 2,
//       name: 'Sara',
//     })
//   );
  
//   // Arrays as params
//   function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);
  
//     const item = arr[randomIndex];
  
//     console.log(item);
//   }
  
//   getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//   03-global-function-scope
// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
// const x = 100;

// console.log(x, 'in global');

// function run() {
//   // Access global vars in functions
//   console.log(window.innerHeight);
//   console.log(x, 'in function');
// }

// run();
// // Truy cập các vars toàn cục theo khối



// if (true) {
//   console.log(x, 'in block');
// }

// function add() {
//   // Ghi đè x toàn cục (làm mờ biến)
//   const x = 1;
//   const y = 50;
//   console.log(x + y);
// }
// // Không thể truy cập biến phạm vi hàm trong phạm vi toàn cục

// console.log(y);

// add();


// 04-block-scope
// const x = 100;

// // An If statement is a block
// if (true) {
//   console.log(x);
//   const y = 200;
//   console.log(x + y);
// }

// // console.log(y); // ReferenceError: y is not defined

// // A loop is a block
// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

// // console.log(i); // ReferenceError: i is not defined

// // Using var
// if (true) {
//   const a = 500;
//   let b = 600;
//   var c = 700;
// }

// console.log(c);
// // var IS có phạm vi chức năng

// function run() {
//   var d = 100;
//   console.log(d);
// }

// run();

// // console.log(d);


// const foo = 1;
// var bar = 2; // Đặt vào đối tượng cửa sổ


// 05-nested-scope
// function first() {
//     const x = 100;
  
//     function second() {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     // console.log(y);
  
//     second();
//   }
  
//   first();
  
//   if (true) {
//     const x = 100;
  
//     if (x === 100) {
//       const y = 200;
//       console.log(x + y);
//     }
  
//     console.log(y);
//   }

// 06-declaration-vs-expression
// Function Declaration
// function addDollarSign(value) {
//     return '$' + value;
//   }
//   // Khi sử dụng khai báo, bạn có thể gọi hàm trước khi khai báo. Với biểu thức, bạn không thể
//   console.log(addDollarSign(100));
  
//   // Function Expression
//   const addPlusSign = function (value) {
//     return '+' + value;
//   };
  
//   console.log(addPlusSign(200));


// 07-arrow-functions
//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
// const add = (a, b) => {
//     return a + b;
//   };
//   // Trả về ngầm
//   const subtract = (a, b) => a - b;
  
// // Có thể bỏ qua () với một tham số duy nhất
//   const double = (a) => a * 2;
  
//  // Trả về một đối tượng
//   const createObj = () => ({
//     name: 'Brad',
//   });
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   numbers.forEach(function (n) {
//     console.log(n);
//   });
  
//   // Hàm mũi tên trong lệnh gọi lại
//   numbers.forEach((n) => console.log(n));
  
//   console.log(add(1, 2));
//   console.log(subtract(10, 5));
//   console.log(double(10));
//   console.log(createObj());


// 08-iife
// Cú pháp IFFE (Có phạm vi riêng và chạy ngay)
// (function () {
//     const user = 'John';
//     console.log(user);
//     const hello = () => console.log('Hello from the IIFE');
//     hello();
//   })();
  
//  // Thông số
//   (function (name) {
//     console.log('Hello ' + name);
//   })('Shawn');
//   // Đặt tên là IIFE (Chỉ có thể gọi đệ quy)
//   (function hello() {
//     console.log('Hello');
//   })();


// 09-function-challenges

// //Challenge 1
// // function getCelsius(f) {
// //   const celsius = ((f - 32) * 5) / 9;
// //   return celsius;
// // }

// const getCelsius = (f) => ((f - 32) * 5) / 9;

// console.log(`The temp is ${getCelsius(35)} \xB0C `);

// // Challenge 2
// function minMax(arr) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   return {
//     min,
//     max,
//   };
// }

// console.log(minMax([2, 31, 4, 5, 6]));

// // Challenge 3
// ((length, width) => {
//   const area = length * width;

//   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

//   console.log(output);
// })(20, 10);


// 10-execution-context-in-action
// Chuyển đến tab 'nguồn' và thêm điểm dừng ở dòng đầu tiên và xem qua để xem giai đoạn thực thi đang hoạt động
// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);


// 11-call-stack
// Open 'sources' tab and put a breakpoint at the first() function

// First Example

// function first() {
//     console.log('first...');
//   }
  
//   function second() {
//     console.log('second...');
//   }
  
//   function third() {
//     console.log('third...');
//   }
  
//   first();
//   second();
//   third();



//   Second Example
  
//   function first() {
//     console.log('first...');
//     second();
//   }
  
//   function second() {
//     console.log('second...');
//     third();
//   }
  
//   function third() {
//     console.log('third...');
//   }
  
//   first();

