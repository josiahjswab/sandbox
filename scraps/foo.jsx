

D = "Darrell Sturdivant"

J = "Jinhwan Kim"

2 = "Josiah Swab"


const TechnoCraft = D + J + 2;

OurGoal = 
  "Migrate the SDCS website from Wordpress" +
  "into a Server Side Rendered React App.";

              dfqe


               Result =
                "We're Live!"
                "www.sdcs.io";
  


//#region
// Number(a) === +a // both of these force number coersion.

// var arrExample = '1plus1plus1plus1plus1plus2plus4plus5minus2'; //14

// function calculate(str) {
//   let result = '';

//   result = str
//   .split('plus').join(' ')
//   .split('minus').join(' -')
//   .split(' ').reduce((a,c)=> Number(a) + Number(c));

//   return result;
// }
// console.log(calculate(arrExample)); //14
// console.log(calculate('1plus2plus3minus4')); //2
// console.log(calculate('1minus2minus3minus4')); //-8
// console.log(calculate("1plus2plus3plus4")); //2

//#endregion

//#region : CodeWar .reverse() .indexOf()

// var wolf = ['sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep',];
// var wolfReverse = wolf.reverse();
// console.log(wolfReverse);
// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
//   }

// console.log(warnTheSheep(wolf));

// const arr = [0,0,0,0,0];
// console.log(arr.length);

//#endregion

//#region : Redux // This will not run in browser as it is not transpiled.

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCERMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const { createStore} = Redux;
// const store = createStore(counter);

// const render = ( => {
//   document.body.innerText = store.getState();
// });

// store.subscribe(render);
// render();

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCERMENT'});
// });

//#endregion

//#region : Map method.

// var tasks = [

//     {

//       'name'     : 'Write for Envato Tuts+',

//       'duration' : 120

//     },

//     {

//       'name'     : 'Work out',

//       'duration' : 60

//     },

//     {

//       'name'     : 'Procrastinate on Duolingo',

//       'duration' : 240

//     }

//   ];

// var task_names = tasks.map(function (task) {

//   return task.name;
// });

// document.getElementById('root').innerHTML = task_names;

//#endregion

//#region : Arrow function ES6
// function sum(a, b) {
//     return a + b;
// }
// let sum2 = (a, b) => {
//     return a + b;
// }
// let sum2 = (a, b) => a + b;

// function isPositive(number) {
//     return number >= 0;
// }
// let isPositive2 = (number) => number >= 0;

// function randomNumber() {
//     return Math.random
// }

// let randomNumber2 = () => Math.random;

// document.addEventListener('click', function() {
//     console.log('click')
// })

//#endregion

//#region : Switch statments.

// function caseInSwitch(val) {
//     var answer = "";
//     switch(val) {
//       case 1:
//         return 'alpha';
//         break;
//       case 2:
//         return 'beta';
//         break;
//       case 3:
//         return 'gamma';
//         break;
//       case 4:
//         return 'delta';
//         break;
//     default:
//         return 'Error';
//         break;
//     }
// }
//   console.log(caseInSwitch(4));

// function sequentialSizes(val) {
//     var answer = "";
//     switch(val) {
//         case 1: // By putting multiple cases in line before calling a return you are able to group multiple inputs with the same outcome.
//         case 2:
//         case 3:
//         return 'Low';
//         break;
//         case 4:
//         case 5:
//         case 6:
//         return 'Mid';
//         break;
//         case 7:
//         case 8:
//         case 9:
//         return 'High';
//         break;
//     }
//     return answer; // I believe this is the default answer for cases not defined.
// }
//   console.log(sequentialSizes(8));

// function chainToSwitch(val) {
//     var answer = "";
//         switch(val) {
//         case 'bob':
//             return 'Marley';
//             break;
//         case 42:
//             return 'The Answer';
//             break;
//         case 1:
//             return 'There is no #1';
//             break;
//         case 99:
//             return 'Missed me by this much!'
//             break;
//         case 7:
//             return 'Ate Nine';
//             break;
//         default:
//             return 'Didn\'t expect that variable!';
//             break;
//     }
//     return answer;
//   }
//   console.log(chainToSwitch(3));
//   var count = 0;

//   function cc(card) {
//     switch(card) {
//       case 2:
//       case 3:
//       case 4:
//       case 5:
//       case 6:
//         count ++; // This case is interesting because it displaces the return with the var to count the incerment of inputted values.
//         break;
//       case 10:
//       case 'J':
//       case 'Q':
//       case 'K':
//       case 'A':
//         count --;
//         break;
//       default:
//     }
//     if (count > 0) {
//       return count + ' Bet';
//     } else {
//       return count + ' Hold';
//     }
//     return;
//   }

//   cc(2); cc(3); cc(7); cc('K'); cc('A');

//#endregion

//#region : If statements.

// var value = 100;

// function lessGreaterThenAndAnd(value) {
//     if(value <= 100 && value >= 50) { // && logical and operator allows us to test more then one thing in a single if statment.
//         return 'this value is between 50-100'
//     }
//     {
//         return 'this value is above 100 or below 50'
//     }
// }
// console.log(lessGreaterThenAndAnd(value))

// function lessGreaterThen(value) {
//     if(value < 100) {
//         return 'this value is less then 100'
//     }
//     if (value == 100) {
//         return 'this value is 100!'
//     }
//     {
//         return 'this value is more then 100'// Less then 100 is covered in first if statment. 100 is second and anything else returns the else statment from second if statement.
//     }

// }
// console.log(lessGreaterThen(value));

// var num = 'nan'; // Try diffrent values here to trigger diffrent parts of the if statement.
// function testSize(num) {
//     if(num < 5) {
//       return 'Tiny'
//     }
//     else if (num < 10) {
//       return 'Small'
//     }
//     else if (num < 15) {
//       return 'Medium'
//     }
//     else if (num < 20) {
//       return 'Large'
//     }
//     else if (num >= 20) {
//       return 'Huge'
//     }
//     else {
//       return 'Error: Something went wrong!'
//     }
// }
// console.log(testSize(num))

// function golfScore(par, strokes) {
//     if(strokes == 1) {
//       return 'Hole-in-one!'
//     }
//     else if (strokes <= par - 2) {
//       return 'Eagle'
//     }
//     else if (strokes == par - 1) {
//       return 'Birdie'
//     }
//     else if (strokes == par) {
//       return 'Par'
//     }
//     else if (strokes == par + 1) {
//       return 'Bogey'
//     }
//     else if (strokes == par + 2) {
//       return 'Double Bogey'
//     }
//     else if (strokes >= par + 3) {
//       return 'Go Home!'
//     }
//   }
//   golfScore(5, 4);// Addition with more steps.

//#endregion

//#region : Console log a function

// Note: A function can include the returnstatement but it does not have to.
// In the case that the function doesn't have a returnstatement, when you call it,
// the function processes the inner code but the returned value is undefined.

// function understandingParameters(num) {
//     return num - 100;
// }
// console.log(understandingParameters(1000)); // Adding the argument to a fucntion inside a console.log allows us to preview the return of the function.

// var a = understandingParameters(101);// This var represents a function with an argument.
// console.log(a);

//#endregion

//#region : Add and remove values from array.

//// add remove values to array
// var array = [1,2,3];

// array.push('pushed onto array');
// array.unshift(['I just put this array inside an array', 'Array Inceptio\'n'])//This is putting an array into the array.
// array[0].shift()//this removed the first index of the inner array.

// function iterateArray() {
//     console.log(array);
// }

//#endregion

//#region : Generator = function* nameOfFunction()

// function* counter() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }

//   for( let val of counter() ) {
//     console.log( val += ' help' );
//   }

//#endregion

//#region : forloop

// let myArray = ['hot', 'sauce', 'eat', 'mas']
//     console.log(myArray);

// let reverseArray = myArray.reverse();
//     console.log(myArray);

// for(i = 0; i < myArray.length; i++) {
//     myArray[i] += ' addiction' // this adds the string text to each array item
//     console.log(myArray[i]);
// }

//#endregion

//#region : Set timeout.

//// setTimeout method pushes the function inside of it into an external API and puts it into the callback queue
// console.log('This string loads without a setTimeout method!');

// setTimeout( () => {
//     console.log('This string loads after the setTimeout method time has been met.');

// }, 5000) //This number is the minimum amount of miliseconds before the function inside the setTimeout method is executed.

//#endregion

//#region : Throw error to view stack at time of error thrown.

// function foo() {
//     throw new Error('I created this error throw.');
// }

// function bar() {
//     foo();
// }

// bar();

//#endregion

//#region : Math.min

// var theDice = [1, 2, 3, 4];

// function removeSmallest(theDice) {
//     let indexOfMin = theDice.indexOf(Math.min(...theDice));
//     return [...theDice.slice(0, indexOfMin), ...theDice.slice(indexOfMin + 1)]
// }

// console.log(removeSmallest(theDice))

// var theNumArray = [3, 6, 8, 21];

// console.log(Math.min(...theNumArray))

//#endregion

//#region : Mutability

// var isItImutable = 5;

// console.log(isItImutable + ' mutable before');

// isItImutable = 5+2;

// console.log(isItImutable + ' mutable after');

//#endregion

//#region : Logic or operator

// function greet(name) {
//     vis = 'john'
//     name = vis || 'visitor' // if variable vis is false then displays || content on this side of double bars.
//     console.log('Hello, ' + name);
// }
// console.log(greet);
// console.log(greet());

//#endregion

//#region : Console log tactics.

// //the below log show how Document Object Model <DOM> is used to bring data into JS from the index.html document

// console.log (document);

// //this log shows how you can pull specific parts/areas of the document. In this example we are pulling the <head> tag

// console.log(document.head);

// // Another example. Make sure to view this log this in the browser console.

// console.log(document.body);

// function add(nums) {
//   console.log(arguments); //Calls to see what arguments are being passed into function.
// }

// add(4, 5, 6);

// let animeArray = ['demon', 'slayer', 'fear'];
//     console.log(animeArray.includes('demon')); // Boolean that that verifies that the array includes the argument inputted.

//#endregion

//#region : toUpperCase

// function abbrevName(name){

//     var str = "steve jobs"
//     var nameArray = str.split(' ');

//     return (nameArray[0][0].toUpperCase() + '.' + nameArray[1][0].toUpperCase());
// }
// console.log(abbrevName());

//#endregion

//#region : Parameters in a function

// function addressGenerator(city, state) {
//     const sendMeYourLocation = {city, state};

//     console.log(sendMeYourLocation);
// }
// addressGenerator('Austin', 'Texas');

//#endregion

//#region : Parameters and Template Literate

// function addressMaker(address) {
//     const {city, state} = address;
//     const newAddress = {
//         city,
//         state,
//         country: 'United States'
//     };
//     console.log(typeof `${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
//     console.log(typeof newAddress.city);

// }
// addressMaker({city: 'Austin', state: 'Texas'});

//#endregion

//#region : ES^ forLoop using intergers

// let incomes = [62000, 67000, 75000];
// let total = 0;

// for (const income of incomes) {
//     console.log(income);
//     total += income;
// }
// console.log(total);

//#endregion

//#region : forLoop using a string.

// let fullName = "Dylan Coding God Israel";

// for (const char of fullName) {
//     console.log(char);
// }

//#endregion

//#region : Spread operator.

// let example1 = [1,2,3,4,5,6];
// let example2 = [...example1];
// example2.push(7);

// console.log(example1);
// console.log(example2);

//#endregion

//#region : Rest operator.

// function add(...nums) {
//     let total = nums.reduce((x, y) => x+y);

//     console.log(total);
// }
// add(4, 5, 7, 8, 12);

//#endregion

//#region : Const principles.

// const example3 = {}; // Constants can have modified objects and arrays but not values. Cannot change primitive type values.
// example3.firstName = 'Josiah';
//     console.log(example3);

//#endregion
