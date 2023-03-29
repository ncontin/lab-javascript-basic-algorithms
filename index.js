// Iteration 1: Names and Input

const hacker1 = "Michael";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Dwight";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

//Iteration 3.1

let driverName = "";

for (let i = 0; i < hacker1.length; i++) {
  driverName = driverName + hacker1[i] + " ";
}

console.log(driverName.toUpperCase());

//Iteration 3.2

let navigatorName = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  navigatorName = navigatorName + hacker2[j];
}

console.log(navigatorName);

//Iteration 3.3

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}

//Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula dui nec lorem ornare tempor. Duis consectetur tempus dui. Proin eu tempor tortor. Etiam eu augue molestie, semper tellus id, hendrerit ipsum. Phasellus eget lectus at ex semper cursus. Vivamus cursus, nisi id auctor mollis, nibh dui lobortis ligula, et ultrices arcu ligula in eros. Donec facilisis nec sem et imperdiet. Maecenas quis lorem sed purus efficitur molestie. Proin ultricies lorem eu condimentum accumsan. Praesent sagittis neque dapibus malesuada bibendum. Duis a justo pretium, ullamcorper justo in, tempus libero. Maecenas tellus nibh, auctor ac aliquet a, tempus sit amet dui. Sed sit amet quam eros. Sed venenatis sodales nisi ut fermentum. Praesent pellentesque nulla risus. In nec aliquet diam, sit amet interdum lectus.

Aliquam erat volutpat. Fusce id risus ut nisl tristique commodo. Vestibulum eu sapien et tortor convallis eleifend. Etiam interdum bibendum urna. Cras auctor quam lacus, a congue ligula auctor vel. Morbi blandit massa vitae turpis elementum, sed tempor ligula ultricies. Sed placerat odio sed sapien gravida, ac malesuada risus tincidunt. Suspendisse vel hendrerit dui. Ut vitae ultricies lorem, non pharetra orci. Cras gravida et arcu at euismod. Pellentesque euismod dolor dapibus risus dictum sollicitudin.

Praesent aliquam dolor quis lectus viverra porttitor. Suspendisse orci orci, consectetur pellentesque dictum quis, pellentesque eu augue. Sed felis tellus, finibus ut hendrerit eget, sagittis quis libero. Fusce porttitor leo non pellentesque suscipit. Integer congue molestie leo in fringilla. Nunc vitae ipsum mollis, convallis dui in, hendrerit risus. Maecenas sollicitudin magna justo, in interdum orci mattis aliquam. Aenean eleifend ex posuere nisi dignissim, eget vehicula magna fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque euismod lorem nec maximus pharetra. Ut hendrerit viverra lectus ac viverra. Nam ullamcorper maximus dui eu viverra. Mauris leo elit, pulvinar eu interdum a, iaculis eu velit. Vestibulum ut porttitor purus. Nunc luctus nunc convallis risus iaculis suscipit. Mauris vel semper ligula, eget imperdiet ligula.`;

let counterWord = 0;
let countEt = 0;

for (let k = 0; k < longText.length; k++) {
  if (longText[k] === " ") {
    counterWord++;
  } else if (longText[k] === "e" && longText[k + 1] === "t") {
    countEt++;
  } else if (longText[k] === "E" && longText[k + 1] === "t") {
    countEt++;
  }
}

console.log(counterWord + 3);
console.log(countEt);
