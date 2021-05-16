'use strict';

/* ---------------------- 1. Scope and The Scope Chain -------------------- */

function calcAge(birthYear) {
  const age = 2021 - birthYear;
  //   console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  if (birthYear >= 1981 && birthYear <= 2001) {
    // Creating NEW variable with same name as outer scope's variable
    const firstName = 'Simha';
    var str = `Oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function add(a, b) {
      return a + b;
    }

    // Reassigning outer scope's variable
    // output = 'NEW OUTPUT';
  }
  // str is printed outside block, as it is function scoped
  console.log(str);
  // console.log(add(2, 3));

  printAge();
  return age;
}

//  GLOBAL SCOPE
const firstName = 'Bharath';
calcAge(2000);
//  console.log(age);  REFERENCE ERROR
// printAge();

/* ---------------------- 2. Variable Environment: Hoisting and The TDZ -------------------- */

// ! TDZ: TEMPORAL DEAD ZONE
/* 
   Temporal Dead Zone  starts at the beginning of the scope until the line where it is defined.
   And the variable is only safe to use after the TDZ. 
*/

// ! Hoisting with  Variables

console.log(me); // undefined
// console.log(job); // ReferenceError  TDZ
// console.log(year); // ReferenceError TDZ

var me = 'Bharath';
let job = 'Student';
const year = 2000;

// ! Hoisting with functions

console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// ! Declaring expr and arrow functions with var

/* 
 console.log(addExprVar(2, 3)); // TypeError: addExprVar is not a function
 console.log(addArrowVar(2, 3)); // TypeError: addArrowVar is not a function
 console.log(addArrowVar); //undefined
*/
// ! IT IS SIMILAR TO undefined(2,3) // TypeError: undefined is not a function

var addExprVar = function (a, b) {
  return a + b;
};

var addArrowVar = (a, b) => a + b;

// ! Example

console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// ! BEST PRACTICES

/*
  1. Just don't use var to declare variables.
  2. Use const most of the time to declare variables and let, if you really need to change the variable later.
  3. Also in order to write clean code, you should declare your variables at the top of each scope.
     That will just make your code at least look a little bit better.
  4. Finally, always declare all your functions first and use them only after the declaration.
     And this applies to all types of functions, even function declarations, which are hoisted.
  5. So you could use function declarations before you declare them, 
     but still just don't do that it's just not clean.

Okay, so what I just told you

are the best practices,

not the rules of how it works in JavaScript. */

var x = 1;
let y = 2;
const z = 3;
// Type window in console
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
// Variables declared with var will create a property on the global window object.

/* ---------------------- 3. this Keyword -------------------- */

// ! this keyword for variable

console.log(this); // window {...}

// ! this keyword for function

const calcAge1 = function (birthYear) {
  console.log(2021 - birthYear); // 21
  console.log(this); // undefined
};
calcAge1(2000);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear); // 21
  console.log(this); // window {...}
};
calcAgeArrow(2000);

// ! EXPLANATION
/* 
  1. Arrow function does not get its own this keyword.So instead the arrow function simply uses the lexical
     this keyword, which means that it uses the this keyword of its parent function or of its parents scope.
  2. Well, it is window because window is the this keywords here in the global scope. 
  3. So in this case, this, this keyword here will simply point to the this keyword in the global scope
     and so therefore it will point to window.
  4. And like here in this normal function which does actually get it's own this keyword
     it's simply as undefined here.
*/

// ! this keyword for method

const bharath = {
  year: 2000,
  calcAge: function () {
    console.log(this); // {year: 2000, calcAge: ƒ}
    console.log(2021 - this.year); // 21
  },
};
bharath.calcAge();

const simha = {
  year: 2012,
};
simha.calcAge = bharath.calcAge; // method borrowing
simha.calcAge();
// OUTPUT
// {year: 2012, calcAge: ƒ}
// 9

const f = bharath.calcAge;
// f(); // ! Simple function call this = undefined

// ! EXPLANATION
/*
  So this happens because this f function here is now just a regular function call.
  It is not attached to any object.There is no owner of this f function anymore here at this point.
  And therefore it is just a regular function call just like here, for example.
  And so therefore the this keyword is then also undefined.
*/

/* ---------------------- 4. Regular Functions vs. Arrow Functions -------------------- */
// !  PITFALLS OF this KEYWORD

// ! 1.  without var

const gbharath2 = {
  firstName: 'Bharath',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

gbharath2.greet(); // Hey undefined
console.log(this.firstName); // undefined

// ! 2. with var

var first_name = 'simha';

const gbharath1 = {
  first_name: 'Bharath',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },

  greet: () => console.log(`Hey ${this.first_name}`),
};

gbharath1.greet(); // Hey simha
console.log(this.first_name); // simha

// ! (IMP) EXPLANATION
/*
  1. The variables declared with var, actually create properties on the global object.
  2. As a best practice, you should never ever use an arrow function as a method.
  3. And in my opinion, that's even true if you're not even using the this keyword in a particular method.
  4. Because if you have this rule of never using an arrow function as a method, 
     then you never have to think about which type of function you should use.
  5. You will always just use a normal function expression,
     and like this, you will then prevent this kind of mistakes from happen.
*/

//  But even then, Hey undefined is still a bug.It's still not correct.
//  And so that would have easily been avoided by just using a regular function.

const gbharath = {
  firstName: 'Bharath',
  year: 2000,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

gbharath.greet(); // Hey Bharath

// ! 3. Function inside a method

const gbharath3 = {
  firstName: 'Bharath',
  year: 2000,
  calcAge: function () {
    //console.log(this);
    //console.log(2021 - this.year);

    const self = this; // (self or that) SOLUTION FOR ERROR IN LINE 267
    const isMillenial = function () {
      // console.log(this.year >= 1991 && this.year <= 2002); ERROR
      console.log(self.year >= 1991 && self.year <= 2002);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

gbharath3.calcAge(); // true

// ! FIRST SOLUTION (USING SELF)
/*
  1. This self will be equal to this.So self is referenced here but it's not of course in the scope.
     And so JavaScript goes up the scope chain, into the parent scope, which is calcAge.
  2. So here is where self is defined, and it is defined as this.
     So as to this keyword.And so this is a way in which we can preserve the this keyword.
  3. self can also be called as that.
*/

// ! SECOND SOLUTION (USING ARROW FUNCTION)
// Arrow function inherits the this keyword from the parent scope.

const gbharath4 = {
  firstName: 'Bharath',
  year: 2000,
  calcAge: function () {
    //console.log(this);
    //console.log(2021 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 2002);
    };
    isMillenial();
  },

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

gbharath4.calcAge(); // true

// ! arguments Keyword

var addExpr2 = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr2(2, 5);
// This can be useful when we need a function to accept more parameters than we actually specify.
addExpr2(2, 5, 8, 12);

var addArrow2 = (a, b) => {
  //console.log(arguments);
  return a + b;
};
addArrow2(2, 3, 8); // ! ERROR

/* 
  arguments keyword can only be exists in regular functions(both in function expressions and declarations) 
  but not in arrow functions.
*/

/* ---------------------- 5. Primitives vs. Objects (Primitive vs. Reference Types) -------------------- */

let age = 20;
let oldAge = age;
age = 21;
console.log(age); // 21
console.log(oldAge); // 20

const me1 = {
  name: 'Bharath',
  age: 20,
};

const friend = me1;
friend.age = 22;
console.log('Me', me1); // Me {name: "Bharath", age: 22}
console.log('Friend', friend); // Friend {name: "Bharath", age: 22}

// ! FOR PRIMITIVE TYPES
let lastName = 'Akhila';
let oldLastName = lastName;
lastName = 'Jinga';
console.log(lastName, oldLastName); // Jinga Akhila

// ! FOR REFERENCE TYPES
const simhaV = {
  firstName: 'Vijaya',
  lastName: 'Simha',
  age: 10,
};

const marriedSimha = simhaV;
marriedSimha.lastName = 'Jinga';
console.log('Before Marriage: ', simhaV);
// Before Marriage: {firstName: "Vijaya", lastName: "Jinga", age: 10}
console.log('After Marriage: ', marriedSimha);
// After Marriage:  {firstName: "Vijaya", lastName: "Jinga", age: 10}

// marriedSimha = {}; Assignment to constant variable.
// ! We can't change the value into a new memory address. So this doesn't work.
// ! But if it is let in line 365, then it is allowed.

// ! Copying objects

const simha1 = {
  firstName: 'Vijaya',
  lastName: 'Simha',
  age: 10,
};

const simhaCopy = Object.assign({}, simha1);
simhaCopy.lastName = 'Jinga';
console.log(simha1);
// {firstName: "Vijaya", lastName: "Simha", age: 10}
console.log(simhaCopy);
// {firstName: "Vijaya", lastName: "Jinga", age: 10}
// ! A new object was created in the heap and simhaCopy is now pointing to that object(it has reference to that new object).

/* // ! READ THIS 
  However, there is still a problem because using this technique of object.assign only works on the first level.
  Or in other words, if we have an object inside the object, then this inner object will actually 
  still be the same.So, it will still point to the same place in memory.
  And that's why we say that this object.assign only creates a shallow copy
  and not a deep clone which is what we would like to have.
  So, again, a shallow copy will only copy the properties in the first level 
  while a deep clone would copy everything.
*/

const simha2 = {
  firstName: 'Vijaya',
  lastName: 'Simha',
  age: 10,
  family: ['Bharath', 'Indira'],
};

const simhaCopy1 = Object.assign({}, simha2);
simhaCopy1.lastName = 'Jinga';
simhaCopy1.family.push('RL');
simhaCopy1.family.push('GNR');

console.log('Before Marriage: ', simha2);
// family: (4) ["Bharath", "Indira", "RL", "GNR"]
console.log('After Marriage: ', simhaCopy1);
// family: (4) ["Bharath", "Indira", "RL", "GNR"]

/*
  However, the family object is a deeply nested object.And so therefore, object.assign did not really,
  behind the scenes, copy it to the new object.
  So in essence, both the objects, simha2 and simhaCopy1 have a property called family,
  which points at the same object in the memory heap, and that object is, of course, this array.
  And so, when we change the array in one of them, it's also gonna be changed in the other one.
  Now, a deep clone is what we would need here, but it is not easy to achieve,
*/
// ! SHALLOW COPY VS DEEP COPY
/*
  Shallow Copy reflects changes made to the new/copied object in the original object.	
  Deep copy doesn’t reflect changes made to the new/copied object in the original object.
*/
