// // //declare an array named teaflaors that contains the strings greeen tea black tea and oolong tea and access the first element of the array and store in varaible named first tea.

// // // let teafloors = ["green tea", "black tea", " oolong tea"];
// // // const firsttea = teafloors[0];
// // // console.log(firsttea);

// // //2 declare an array named cities containing london tokyo paris and new york and access third element in array and store in varaible named favoritecity

// // // let cities = ["London", "Tokyo", "Paris", "New York"];
// // // const favoritecity = cities[2];
// // // console.log(favoritecity);

// // //3 you have an array named teatypes containing herbal tea,  white tea and masala chai change the second element of array to jasmine tea
// // let teaTypes = ["herbal tea", "white tea", "masala chai"];
// // teaTypes[1] = "Boba";
// // console.log(teaTypes);

// // //4 declared an  array named citiesvisited containing mumbai and sydney add berlin to array using push method

// // let citiesVisited = ["Mumbai", "Sydney"];
// // citiesVisited.push("Berlin");
// // console.log(citiesVisited);

// //you havve an array named tea orders with chai , iced tea, matcha, earl grey , remove last element of array using pop method andstore in variable named last order.

// // let teaOrder = ["Chai", "Iced Tea", "Matcha", "Earl Grey"];
// // let lastorder = teaOrder.pop();

// // console.log(teaOrder);
// // console.log(lastorder);

// //you have an array named popularteas containing green tea , oolong tea, and chai create soft copy of array called softCopyTeas.

// // let popularteas = ["green tea", "oolong tea", "Chai tea"];
// // let softCopytea = popularteas;
// // popularteas.push("black tea");
// // console.log(softCopytea);

// // you have an array named top cities containing brerlin signapore and nrw york create hard copy of this aray named hardcopycities

// let hardcopyCities = [];
// let cities = ["singapore", "new york", "berlin"];
// for (let count = 0; count < cities.length; count++) {
//   hardcopyCities.push(cities[count]);
// }
// cities.pop();
// console.log(hardcopyCities);

//you got two arrays european cities , conraining paris , and rome and asian cities containing gtokyo and bangkok , merge these two arrays named worldcities.

// let europeancities = ["paris", "rome"];
// let asiancities = ["tokyo", "bangkok"];

// let worldcities = europeancities.concat(asiancities);

// console.log(worldcities);

//let tea menu containing masla chai , oolong tea, green tea, and earl grey find lenfth of array and store in varaible named menu length

// let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
// let length = teaMenu.length;
// console.log(length);

// you have an array named citybuketlist containing kyoto, london, cape town, and vancouver check if london is in array and store in result in a varaible named isLondoninlist..

citybucketlist = ["kyoto", "London", "Cape Town", "Vancouver"];
let isLondonList;
if (citybucketlist.includes("London")) {
  console.log("london is here");
} else {
  console.log("it is not here");
}
