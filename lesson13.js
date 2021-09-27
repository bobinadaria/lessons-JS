// "use strict";

// // if (4 == 4) {
// //     console.log('Ok!');
// // }
// /* или */  
// // if (1) {
// //     console.log('Ok!');
// // } else {
// //     console.log('Error');
// // }


// // const num = 50;
// // if (num < 49) {
// //     console.log('Error')
// // } else if (num > 100) {
// //     console.log('Много');
// // } else {
// //     console.log('Ok!');
// // }

// // (num === 50) ? console.log('Ok!') : console.log('Error');


// // const num = '50';
// // switch (num) {
// //     case 49:
// //         console.log('Neverno');
// //         break;
// //     case 100:
// //         console.log('Neverno');
// //         break;
// //     case '50':
// //         console.log('V tochku!');
// //         break; 
// //     default:
// //         console.log('Ne v etot raz');
// //         break;
// // }
//                                                                  // ЦИКЛЫ

// // "use strict";
// // let num = 50;
// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }
// /* или */
// let num = 50;    
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }
// /* или */
// let i = 3;
// while (i) alert(i--);


// let num = 50;
// for (let i = 0; i < 11; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if (i=== 6) {
//         // break;
//         continue;
//     }
//     console.log(i);  
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }






// "use strict";

// let num = 20;

// function showFirstMessege(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessege("Hello World!");
// console.log(num);




// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));




// function ret() {
//     let num = 50;

//     //


//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);




// const logger = function() {
//     console.log("Hello");
// };
// logger();




// const calc = (a, b) => { return a + b };
// const calc = (a, b) => a + b ;
// const calc = a => a + b ;

// const calc = (a, b) => { 
//     console.log('1');
//     return a + b;
// };



// "use strict";

// const str = "teSt";
// // const arr = [1, 2, 4];
// // console.log(arr.length);
// // console.log(str[2] = 'd'); так нельзя
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);


// const fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));
// console.log(fruit.indexOf("q"));
// console.log(fruit.indexOf("e"));


// const logg = "Hello world";
// // console.log(logg.slice(6, 11)); начало и конец того, что необходимо вырезать, можетбыть отрицательным
// console.log(logg.slice(6, 10));
// console.log(logg.slice(6));
// console.log(logg.slice(2));
// console.log(logg.slice(-6, -1));
// // console.log(logg.substring(6, 11)); начало и конец, можно задавать первый арг больше второго, не поддерживает ориц знач
// console.log(logg.substring(6, 11));
// // console.log(logg.substr(6, 3)); начало и сколько символов необходимо вырезать
// console.log(logg.substr(6, 3));


// const num = 12.2;
// console.log(Math.round(num));


// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));







// "use strict";

// function first() {
//     // Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();




// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done); 


// "use strict"

// // const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// // console.log(Object.keys(options).length);

// // console.log(options["colors"]["border"]);

// // delete options.name;

// // console.log(options);

// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
// // }
// // console.log(counter);









const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));




"use strict";

let a = 5,
    b = a;


b = b + 5;

console.log (b);