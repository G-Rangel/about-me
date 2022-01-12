'use strict';

// console.log('Howdy Howdy!')

let user=prompt('Please enter name');
alert(`Thank you, Welcome ${user}`);

alert('Time to answer questions!');

let q1=prompt('Do I live in Seattle, WA?').toLowerCase();

if(q1 === 'yes' || q1 === 'y') {
//  console.log('yes');
  alert('Correct! Next question.');
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
}else {
//  console.log('Invalid input');
  alert('Please answer yes or no.');
}

let q3=prompt('Do I have a dog?').toLowerCase();

if(q3 === 'yes' || q3 === 'y') {
// console.log('yes');
  alert('I do! His name is Nubs');
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
} else if(q5 === 'no' || q5 === 'n') {
// console.log('no');
  alert('My partner and I own about 60 house plants.');
}else {
// console.log('Invalid input');
  alert('Please answer yes or no.');
}

alert(`Good effort ${user}! Thank you for playing.`);

