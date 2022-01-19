'use strict';
console.log('app js connected');


// showMsg();

// //function Declaration
// function showMsg() {
//   console.log('I am the showMsg function');
// }
// //function expression
// const msgExpression = function() {
//   console.log('I am the msgExpression function expression');
// };

// msgExpression();

// //global scope
// const name = 'Dan';
// function globalFunc() {
//   console.log('I can be called anywhere');
// }



// //function scope
// function scopyFunc(doggy) {

//   function privateFunc() {
//     const privateVar = 'woof!';
//     return doggy + ' says ' + privateVar;
//   }

//   // console.log(privateVar);
//   console.log('doggy is only defined inside scopyFunc: ' + doggy );
//   return privateFunc();

// }

// scopyFunc('Fido');









//object context
const teacherBot = {
  first: 'Dan',
  last: 'Schwartz',
  age: 35,
  speak: function() {
    return 'Hello humanoid, I am ' + this.first + ' ' + this.last;
  }
};


console.log(teacherBot.age);