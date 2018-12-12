'use strict';

//URLify a string
// Input: tauhida parveen
// Output: tauhida%20parveen
// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een
// O(n)
function urlifyString(string) {
  let url = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      url += '%20';
    } else {
      url += string[i];
    }
  }
  return url;
}

// console.log(urlifyString('tauhida parveen'));
// console.log(urlifyString('www.thinkful.com /tauh ida parv een'));


//filtering an array 
//input: [1,2,5,5,8]
//output: [5,5,8]
// O(n)
function filterArray(arr) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      filteredArr.push(arr[i]);
    }
  } return filteredArr;

}

// console.log(filterArray([1,2,5,5,8])); 

// Max sum in the array 
// Input: [4,6,-3,5,-2,1]
// Output: 12 = 4+6+-3+5
// O(n)
function maxSum(arr) {
  let currentMax = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    currentMax += arr[i];
    if (currentMax > max) {
      max = currentMax;
    }
  }

  return max;
}

// console.log(maxSum([4, 6, -3, 5, -2, 1]));



//mergeArrays 
//Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
// concat is O(n), depending on engine for sorting sort can be O(n^2) or O(n log n)
function mergeArrays(arr1, arr2) {
  // let finalArray = []; 
  // for ( let i = 0; i<arr1.length; i++){
  //   finalArray.push[arr1[i]];
  //   for (let j = 0; j<arr2.length; i++){
  //     finalArray.push[arr2[j]]; 
  //   }
  // }
  return arr1.concat(arr2).sort(function (a, b) { return a - b; });
}

// console.log(mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

//remove characters
//Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'
// O(n)
function removeCharacters(string, filter) {
  let filterArray = [];
  for (let i = 0; i < filter.length; i++) {
    filterArray.push(filter[i]);
  }
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (!filterArray.includes(string[i])) {
      newString += string[i];
    }
  }
  return newString;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));