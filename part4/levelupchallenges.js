//write a for loops through the array ' [ green tea, black tea, chai, oolong tea] and stops the loop when it finds "chai".
//Store all teas before chai in a new array named selected teas.

// let teas = ["green tea", "black tea", "chai", "oolong tea"];
// let selectedteas = [];
// for (let i = 0; i < teas.length; i++) {
//   if (teas[i] == "chai") {
//     break;
//   }
//   selectedteas.push(teas[i]);
// }
// console.log(selectedteas);

//for loop that loops through the array [London, new york, berlin, paris] and skips paris. Store the other cities in a new array named visitedcities.

// let states = ["London", "New York", "Berlin", "Paris"];
// let visitedcities = [];
// for (let i = 0; i < states.length; i++) {
//   if (states[i] == "Paris") {
//     break;
//   }
//   visitedcities.push(states[i]);
// }
// console.log(visitedcities);

//3 use a for of loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found . store the numbers before 4 in an array named smallnumbers

// let numbers = [1, 2, 3, 4, 5];
// let smallnumbers = [];

// for (const element of numbers) {
//   if (element === 4) {
//     break;
//   }
//   smallnumbers.push(element);
// }
// console.log(smallnumbers);

//for loops use index and for of loops use elements

//use a for of loop to iterate through thr array ["chai", green tea, herbal tea, black tea] and skip herbal tea store the other teas in an array named preffered teas.

// let teas = ["Chai", "green tea", "herbal tea", "black tea"];
// let prefferedteas = [];

// for (const element of teas) {
//   if (element == "herbal tea") {
//     continue;
//   }
//   prefferedteas.push(element);
// }
// console.log(prefferedteas);

//use a for in loop to loop through an object containing city populations. store the loop when the population of berlin is found and store all prveious cities populations in a new object named city populations.

// let citiespopulation = {
//   London: 8900000,
//   "New York": 9888888,
//   Berlin: 3500000,
//   Paris: 4500000,
// };

// let citypopulations = {};

// for (const cities in citiespopulation) {
//   if (cities == "Berlin") {
//     break;
//   }
//   citypopulations[cities] = citiespopulation[cities];
// }
// console.log(citypopulations);

//use a for in loop to loop through an object containing city populations, skip any city with a population below 3 million and store the rest in a new object named largeCities.

// let citiesPopulatioin = {
//   London: 890000,
// };

// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

//write a for each loop that interates through the array [earl grey, green tea, chai , oolong tea]
//stop the loop when chai is found and store all previous tea types in an array named avaliable teas.

// let teas = ["earl grey", " green tea", "Chai", "Oolong Tea"];
// let avaliableteas = [];
// teas.forEach((element) => {
//   if (element === "Chai") {
//     return;
//   }
//   avaliableteas.push(element);
// });
// console.log(avaliableteas);

//write a foreach loop that iterates through the array [ berlin, tokyo, sydney, paris]
//skip sydney and store to othercities in a new array named Traveled cities.

// let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
// let traveledcities = [];
// cities.forEach((element) => {
//   if (element == "Sydney") {
//     return;
//   }
//   traveledcities.push(element);
// });
// console.log(traveledcities);

//9  write a for loop that iterates through thre array 2 , 5, 7, 9 and skip the value 7 and multiply the rest by 2, store the results in a new array named doubled numbers

let numbers = [2, 5, 7, 9];
let doublednumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    continue;
  }
  doublednumbers.push(numbers[i] * 2);
}
console.log(doublednumbers);

//10 use a for of loop to iterate through the array [ chai, green tea, black tea, jasmine tea, herbal tea] and stop when length of current tea name is greater than 10 , store the teas iterated over in an array named shortteas.

// let teas = ["Chai", " green tea", " black tea", "Jasmine tea", "Herbal Tea"];
// let shortteas = [];
// for (const element of teas) {
//   if (element.length > 10) {
//     break;
//   }
//   shortteas.push(element);
// }
// console.log(shortteas);
