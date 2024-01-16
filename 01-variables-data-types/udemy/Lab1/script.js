const restaurant = {
    name: 'Classico Italiano',
    locatior: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian',
    'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
    thu: {
    oper: 12,
    close: 22,
    },
    fri: {
    oper: 11,
    close: 23,
    },
    sat: {
    oper: 0, //.Open.24-hours
    close: 24,
    },
},
order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
},
 orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '19:00', address}) {
    console.log(`Order received! ${this.starterMenu} and ${this.mainMenu[mainIndex]}
    will be deliverd to ${address} at ${time}`
    );
 },
};
restaurant.orderDelivery({
    time: '14:32',
    address: 'Ha Noi, 30',
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: 'Nam tu lien, 12',
    starterIndex: 1,
});

const{name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
const {
    name: restaurantName,
     openingHours: hours,
categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a,b} = obj);
console.log(a, b);
// nested objects

const{tri: {open: o, close: c},
} = openingHours;
console.log(o, c);
