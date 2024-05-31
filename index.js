// Exercise 1
let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;
let remainder = a % b;
let exp = a ** b;
a += b; // a is now 24
a -= b; // a is now 20
a *= b; // a is now 80
a /= b; // a is now 20
a %= b; // a is now 0
a **= b; // a is now 0**4 which is 0
console.log(add, minus, multiply, dividing, remainder, exp, a, b);

// Exercise 2
let num = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log(num + str); // '1111'
console.log(num + str2); // '11eleven'
console.log(num + isPresent); // 12
console.log(num + firstName); // 11Jackie
console.log(num + lastName); // 11Chan
console.log(str + isPresent); // '11true'
console.log(str + firstName); // '11Jackie'
console.log(str + lastName); // '11Chan'
console.log(isPresent + firstName); // trueJackie
console.log(isPresent + lastName); // trueChan

// Exercise 3
let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;
let firstName2 = "Robin";
let lastName2 = "Williams";

val == str3; // true
val === str3; // false
!isPresent2; // true
(false && true) || true; // true
"eleven" == str4 && val >= str3; // false
!isPresent2 || isPresent2; //  true

0 == false; // true
0 === false; // false
0 != false; // false
0 !== false; // true
