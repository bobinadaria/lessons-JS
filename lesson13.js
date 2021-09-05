"use strict";

// if (4 == 4) {
//     console.log('Ok!');
// }
/* или */  
// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }


// const num = 50;
// if (num < 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');


// const num = '50';
// switch (num) {
//     case 49:
//         console.log('Neverno');
//         break;
//     case 100:
//         console.log('Neverno');
//         break;
//     case '50':
//         console.log('V tochku!');
//         break; 
//     default:
//         console.log('Ne v etot raz');
//         break;
// }
                                                                 // ЦИКЛЫ

// "use strict";
// let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
/* или */
let num = 50;    
do {
    console.log(num);
    num++;
}
while (num < 55);

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}

let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
}
/* или */
let i = 3;
while (i) alert(i--);


let num = 50;
for (let i = 0; i < 11; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i=== 6) {
        // break;
        continue;
    }
    console.log(i);  
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }