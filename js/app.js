'use strict';

// console.log('Howdy Howdy!')

let count=0;

let user=prompt('Please enter name');
alert(`Thank you, Welcome ${user}`);

alert('Time to answer questions!');

let q1=prompt('Do I live in Seattle, WA?').toLowerCase();

if(q1 === 'yes' || q1 === 'y') {
//  console.log('yes');
  alert('Correct! Next question.');
  count++;
} else if(q1 === 'no' || q1 === 'n') {
//  console.log('no');
  alert('I do live in Seattle AKA the Emerald City.');
}else {
//  console.log('Invalid input');
  alert('Please answer yes or no.');
}

let q2=prompt('Do I hate coffee?').toLowerCase();

if(q2 === 'yes' || q2 === 'y') {
// console.log('yes');
  alert('Nope, I love coffee!');
} else if(q2 === 'no' || q2 === 'n') {
//  console.log('no');
  alert(`Good one ${user}, I love coffee.`);
  count++;
}else {
//  console.log('Invalid input');
  alert('Please answer yes or no.');
}

let q3=prompt('Do I have a dog?').toLowerCase();

if(q3 === 'yes' || q3 === 'y') {
// console.log('yes');
  alert('I do! His name is Nubs');
  count++;
} else if(q3 === 'no' || q3 === 'n') {
// console.log('no');
  alert('Sorry, I do have a furry friend in my home.');
}else {
// console.log('Invalid input');
  alert('Please answer yes or no.');
}

let q4=prompt('Does an exotic animal live in my home?').toLowerCase();

if(q4 === 'yes' || q4 === 'y') {
//  console.log('yes');
  alert('Agnes is a tarantula, She has been with me for 2 years.');
  count++;
} else if(q4 === 'no' || q4 === 'n') {
// console.log('no');
  alert('I do keep a tarantula in my home.');
}else {
// console.log('Invalid input');
  alert('Please answer yes or no.');
}

let q5=prompt('Do I care for many plants in my home?').toLowerCase();

if(q5 === 'yes' || q5 === 'y') {
//  console.log('yes');
  alert('Correct! So many plants.');
  count++;
} else if(q5 === 'no' || q5 === 'n') {
// console.log('no');
  alert('My partner and I own about 60 house plants.');
}else {
// console.log('Invalid input');
  alert('Please answer yes or no.');
}

let myNum=9;
let left=4;
let q6=20;
// Number Value info https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

//let q6= Number (prompt('What number am I thinking of between 1-15? You have 4 guesses.'));

while(left >= 1 && q6 !== myNum){
  if(q6 === 20){
    q6--;
    let q6= Number (prompt('What number am I thinking of between 1-15? You have 4 guesses.'));
    console.log(q6);
  }else if(q6 > myNum){
    left--;
    alert('Too High, Try again');
    let q6= Number (prompt(`What number am I thinking of between 1-15? You have ${left} try(s) left.`));
    console.log(q6);
  }else if(q6 < myNum){
    left--;
    alert('Too Low, Try again');
    let q6= Number (prompt(`What number am I thinking of between 1-15? You have ${left} try(s) left.`));
    console.log(q6);
  }else if(q6 === myNum){
    alert(`Way to go ${user}, That's correct!`);
    count++;
  }else if(left === 0){
    alert('Out of guesses. The answer was 9.');
  }
}







alert(`Good effort ${user}! You got ${count} correct out of 7. Thank you for playing.`);

