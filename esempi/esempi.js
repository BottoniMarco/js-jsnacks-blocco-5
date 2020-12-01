// esempi const

const obj = {
  "a" : 1
}
obj.b = 2;
console.log(obj);

const array = ["a","b","c"];
array.push("d");
console.log(array);

// const string = "alfa";
// string += "beta";
// console.log(string);
// Errore


// esempi let e template literal

let letString = "alfa";
letString += " beta";
console.log(letString);

let letString1 = "a";
let letString2 = "c";


console.log(
  `
    ${letString1}b${letString2}

    d
  `
);

// esempi arrow function

var funzione = () => 2+2;
console.log(funzione());

document.getElementById('container').addEventListener('click',
  function() {
    console.log(this);
  }
);

// document.getElementById('container').addEventListener('click',
//   () => {
//     console.log(this);
//   }
// );

var funzione2 = () => "mimmo";
console.log(
  funzione2()
);

const funzione3 = () => {1 + 1};
console.log(funzione3());//errore

// esempi operatore Spread

let arraySpread1 = [1,2,3];
let arraySpread2 = [8,9,10];

let merged = [...arraySpread1,...arraySpread2];
console.log(merged);

let a = 1;
let b = 2;
let c = 3;
const d = 4;


let objSpread = {
  a,
  b,
  c
}

console.log(objSpread);



const objSpread2 = {
  a:a,
  b:b,
  c:c,
  d:d,
};

console.log(objSpread2);
