
// Exercise 1

let a = 20
let b = 4
let add = a + b
let minus = a - b
let multiply = a * b
let dividing = a / b
console.log(add, minus, multiply, dividing)

// Exercise 2

let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(a + str)  // '1111'
console.log(a + str2)  // '11eleven'
console.log(a + isPresent) // 12
console.log(a + firstName) // 11Jackie
console.log(a + lastName) // 11Chan


// Exercise 3

let d = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

d == str3  // true
d === str3  // false
!isPresent2  // true

//  (false && true)
(“eleven” == str4 && d >= str3)  // false

// (true or false)
(!isPresent2 || isPresent2)  //  true

0 == false  // true
0 === false  // false
0 != false  // false
0 !== false  // true

// Operator precedence
// ==  11
// &&  7
// >=  12
