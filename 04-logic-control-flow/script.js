// 01-if-statements
// If Statement Syntax
// if (true) {
//     console.log('This is true');
//   }
  
//   if (false) {
//     console.log('This is NOT true');
//   }
  
//   // Biểu thức đánh giá
//   const x = 10;
//   const y = 5;
  
//   if (x >= y) {
//     console.log(`${x} is greater than or equal to ${y}`);
//   }
  
//   if (x === y) {
//     console.log(`${x} is equal to ${y}`);
//   } else {
//     console.log(`${x} is NOT equal to ${y}`);
//   }
//   // Phạm vi khối
//   if (x !== y) {
//     const z = 20;
//     console.log(`${z} is 20`);
//   }
  
//   console.log(z); // Throw error
//   // Viết tắt If/Else
//   if (x >= y)
//     console.log(`${x} is greater than or equal to ${y}`),
//       console.log('This is true');
//   else console.log('This is false');


// 02-else-if-nesting
// const d = new Date(10, 30, 2022, 6, 0, 0);
// const hour = d.getHours();

// if (hour < 12) {
//   console.log('Good Morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');
// }
// // Nếu lồng nhau
// if (hour < 12) {
//   console.log('Good Morning');

//   if (hour === 6) {
//     console.log('Wake Up!');
//   }
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');

//   if (hour >= 20) {
//     console.log('zzzzzzzz');
//   }
// }

// if (hour >= 7 && hour < 15) {
//   console.log('It is work time!');
// }

// if (hour === 6 || hour === 20) {
//   console.log('Brush your teeth!');
// }


// 03-switches
// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();
// // Đánh giá giá trị ngay lập tức
// switch (month) {
//   case 1:
//     console.log('It is January');
//     break;
//   case 2:
//     console.log('It is February');
//     break;
//   case 3:
//     console.log('It is March');
//     break;
//   default:
//     console.log('It is not Jan, Feb or March');
// }
// // Đánh giá phạm vi
// switch (true) {
//   case hour < 12:
//     console.log('Good Morning');
//     break;
//   case hour < 18:
//     console.log('Good Afternoon');
//     break;
//   default:
//     console.log('Good Night');
// }


// 04-calculator-challenge
// function calculator(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         result = num1 / num2;
//         break;
//       default:
//         result = 'Invalid Operator';
//     }
  
//     console.log(result);
//     return result;
//   }
  
//   calculator(5, 2, '&');


// 05-truthy-falsy

// // Falsy Values:
// // - false
// // - 0
// // - "" or '' (Empty string)
// // - null
// // - undefined
// // - NaN

// // Truthy Values:
// // - Everything else that is not falsy
// // - true
// // - '0' (0 in a string)
// // - ' ' (space in a string)
// // - 'false' (false in a string)
// // - [] (empty array)
// // - {} (empty object)
// // - function () {} (empty function)

// const x = function () {};

// if (x) {
//   console.log('This is truthy');
// } else {
//   console.log('This is falsy');
// }

// console.log(Boolean(x));

// // Cảnh báo trung thực và giả dối
// const children = 3;
// // Kiểm tra chữ 0

// if (children) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }
// // Giải pháp
// if (!isNaN(children)) {
//   console.log(`You have ${children} children`);
// } else {
//   console.log('Please enter number of children');
// }
// // Kiểm tra mảng trống
// const posts = ['Post One'];
// // Luôn đúng ngay cả khi trống
// if (posts) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }
// // Giải pháp
// if (posts.length > 0) {
//   console.log('List Posts');
// } else {
//   console.log('No Posts To List');
// }
// // Kiểm tra các đối tượng trống
// const user = {
//   name: 'Brad',
// };
// // Luôn đúng ngay cả khi không có thuộc tính
// if (user) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }
// // Giải pháp
// if (Object.keys(user).length > 0) {
//   console.log('List User');
// } else {
//   console.log('No User');
// }
// // Bình đẳng lỏng lẻo (==)
// console.log(false == 0); // true
// console.log('' == 0); // true
// console.log(null == undefined); // true

// // Bình đẳng nghiêm ngặt
// console.log(false === 0); // false
// console.log('' === 0); // false
// console.log(null === undefined); // false


// 06-logical-operators
// console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
// console.log(10 > 20 || 30 < 15); // Only one has to be true
// // && - Sẽ trả về giá trị sai đầu tiên hoặc giá trị cuối cùng
// let a;

// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && 0 && 30;
// a = 10 && '' && 0 && 30;

// console.log(a);

// const posts = ['Post One', 'Post Two'];
// posts.length > 0 && console.log(posts[0]);

// // || - Sẽ trả về giá trị trung thực đầu tiên hoặc giá trị cuối cùng


// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null || '' || undefined;

// console.log(b);
// // ?? - Trả về toán hạng bên phải khi toán hạng bên trái rỗng hoặc không xác định

// let c;

// c = 10 ?? 20;
// c = null ?? 20;
// c = undefined ?? 30;
// c = 0 ?? 30;
// c = '' ?? 30;

// console.log(c);


// 07-logical-assignment
// // ||= chỉ gán giá trị bên phải nếu bên trái là giá trị sai.
// let a = null;

// // if (!a) {
// //   a = 10;
// // }

// // a = a || 10;

// a ||= 10;

// console.log(a);
// // &&= chỉ gán giá trị bên phải nếu bên trái là giá trị trung thực.

// let b = 10;

// if (b) {
//   b = 20;
// }

// b = b && 20;

// b &&= 20;

// console.log(b);
// // ??= chỉ gán giá trị bên phải nếu bên trái là null hoặc không xác định.

// let c = null;

// if (c === null || c === undefined) {
//   c = 20;
// }

// c = c ?? 20;

// c ??= 20;

// console.log(c);


// 08-ternary-operator
const age = 17;
// Sử dụng câu lệnh if
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}
// Sử dụng toán tử bậc ba
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');
// Gán giá trị có điều kiện cho một biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);
// Nhiều câu lệnh

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);
// Ternary không có gì khác
auth ? console.log('Welcome to the dashboard') : null;
// Viết tắt của ternary không có else
auth && console.log('Welcome to the dashoard');