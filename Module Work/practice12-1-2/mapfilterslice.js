// Using maps() method to transform data

// example in which all the numbers of an array are doubled; "num" argument can be named whatever
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// same example using fat arrow
var numbers = [1,2,3,4,5];
var doubled = numbers.map(num => num * 2);
console.log(doubled);

// example in which all the numbers of an array have 5 added
var numbers = [1,2,3,4,5];
var fiveup = numbers.map(function(count){
    return count + 5;
});
console.log(fiveup);

// extract a specific property from each object in an array.  cityNames is an array of only the city names.
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// Like map(), filter() performs an operation on every element in the original array. 
// Unlike map(), however, filter()does not necessarily return an array whose length is the same as the original array.

// return numbers greater than 1
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

// return words that start with s

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sWord = words.filter(function(sss){
    return sss.startsWith('s'); 
})

console.log(sWord);

// sorting numbers; code tests for positive/negative differences of values to sort order
// Appending reverse() sorts the array in descending order.
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b).reverse();
console.log(sortedAge);

// slicing; index position 0 - next argument, 2, denotes the position of the array where the slicing ceases
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);

// slice first three elements of the array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(0,3);

// slice everything after the first three
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );


