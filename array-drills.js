'use strict';

//URLify a string
// Input: tauhida parveen
// Output: tauhida%20parveen
// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een
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

console.log(urlifyString('tauhida parveen'));
console.log(urlifyString('www.thinkful.com /tauh ida parv een'));


