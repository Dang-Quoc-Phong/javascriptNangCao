// 'use strict';

// const bookings = [];
// const createBooking = function(
//     flightNum,
//      numPassengers = 1,
//       price = 99 * numPassengers
//       ) {
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2 );
// createBooking('LH123', 5);



// const flight = 'LH234';
// const jonas = {
//     name: 'Dang Phong',
//     passport: 234567,
// };
// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH99';
//     passenger.name = 'Mr.' + passenger.name;

//     if(passenger.passport === 1245788345) {
//         alert('Check in');
//     }else {
//         alert('Wrong passport!');
//     }
// };
// checkIn(flight, jonas);
// console.log(flight); 
// console.log(jonas);

// // Is the same as doing..
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000);

// };
// newPassport(jonas);
// checkIn(flight,jonas);

// 132.Functions Accepting Callback Functions
const oneWrod = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};
const upperFirsWord = function(str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
};

// Higher-order function
const transformer = function(str,fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirsWord);
transformer('JavaScript is the best!', oneWrod);
// JS uses callbacks all the time

const high5 = function () {
    console.log('😎');

};
 document.body.addEventListener('click', high5);
 ['Janas', 'Martha','Adam'].forEach(high5);