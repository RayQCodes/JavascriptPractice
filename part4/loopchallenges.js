// //write a   while loop that caluc the sum of all numbers from 1 to 5 and stores the result in a variable named sum.
// // let i = 0;
// // let sum = 0;
// // while (i <= 5) {
// //   sum += i;
// //   i++;
// // }
// // console.log(sum);

// //write a while loop that counts down from 5 to 1 and stores the numbers in an array named countdown.

// let i = 5;
// let countdown = [];
// while (i > 0) {
//   countdown.push(i);
//   i--;
// }
// console.log(countdown);

// // write a do while loop that prompts a user to enter their favorite tea type unit they enter "stop". Store each tea type in an array named teaCollection.
// // let teaCollection = [];
// // let userResponse;
// // do {
// //   userResponse = prompt(`Enter your favorite tea type`);
// //   if (userResponse != "stop") {
// //     teaCollection.push(userResponse);
// //   } else {
// //     console.log(teaCollection);
// //   }
// // } while (userResponse != "stop");

//write a do while loop that adds  number from 1 to 3 and stores the result in a variable named total

// let total = 0;
// let i = 0;
// do {
//   total += i;
//   i++;
// } while (i <= 3);

// console.log(total);

//write a for loop that multipplies each element in the array [2.4.6] by 2 and store the results in a new array named multiplied Numbers

// let firstarray = [2, 4, 6];
// let multarray = [];
// let multiplednumbers = 0;

// for (let i = 0; i < firstarray.length; i++) {
//   multiplednumbers =
//   multarray.push(multiplednumbers);
// }
// console.log(multarray);

//write a for loop that lists all cities in array paris new york tokyo london and store eadch city in new array named city list .

let cities = ["paris", "new york", "tokyo", "london"];
let citylist = [];
let citynames;
for (let i = 0; i < cities.length; i++) {
  citynames = cities[i];
  citylist.push(citynames);
}

console.log(citylist);
