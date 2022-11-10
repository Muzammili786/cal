// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// This function display values
function display(value) {
  document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

// function Vowal() {
//   let husnan = "abcdef";
//   let reg = /[aeiou]/gi;
//   let result = husnan.match(reg);
//   console.log(result.length);
//   console.log(result);
// }
// Vowal();

// function upcas() {
//   let hus = "Abcd"
//   let regx = /^[A-Z]/g;

//   if (regx.test(hus)) {
//     console.log("first letter is uppercase");
//   }
//   else {
//     console.log("not an uppercase");
//   }

// }
// upcas();

// function card() {
//   let card = "221234567897548";

//   let rag = /^(?:2[27][0-9]{13})$/g;

//   if (card.match(rag)) {
//     //   return true;
//     console.log("true");
//   }
//   else {
//     alert("start with 22!");
//     return false;
//   }
// }
// card();

// // function WordCount(str) {  
// //     return str.split(" ").length;
// //   }

// //   console.log(WordCount("hello world"));

// function WordCount() {
//   let abc = "Long live Pakistan";
//   let rus = abc.split(" ").length;
//   console.log(rus);
// }
// WordCount();


// function email() {
//   let mail = "awanmiqbal@gmail.com";
//   let reag = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g;

//   if (reag.test(mail)) {
//     console.log("valid mail");
//   }
//   else {
//     console.log("not valid");
//   }
// }

// email();



// class Shape {
//   name;
//   sides;
//   sidesLength;

//   constructor(name, sides, sidesLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sidesLength = sidesLength;
//   }
//   calcPerimeter() {
//     this.perimeter = this.sides + this.sidesLength;

//     console.log(this.perimeter);
//   }
// }
// const square = new Shape('square', 4, 5);
// square.calcPerimeter();
// const triangle = new Shape('triangle', 4, 3);
// triangle.calcPerimeter();



// class playerID {
//   playerName;
//   playerRuns;
//   playerDateOfBirth;
//   playerShirtNumber;
//   constructor(playerName, playerRuns, playerDateOfBirth, playerShirtNumber) {
//     this.playerName = playerName;
//     this.playerRuns = playerRuns;
//     this.playerDateOfBirth = playerDateOfBirth;
//     this.playerShirtNumber = playerShirtNumber;
//   }
//   displayInfo() {
//     return {
//       playerName: this.playerName,
//       playerRuns: this.playerRuns,
//       playerDateOfBirth: this.playerDateOfBirth,
//       playerShirtNumber: this.playerShirtNumber,
//     };
//   }

//   addRuns() {
//     let a = prompt("Enter the runs");
//     let sum = parseInt(a) + this.playerRuns;
//     console.log("Total new added runs of player are", sum);
//     this.playerRuns = sum;
//   }

// }
// let result = new playerID("Alex Hales", 13, "22 - 05 - 1998", 96);
// console.log(result.displayInfo());
// result.addRuns();






// var library = [
//   {
//     title: 'Bill Gates',
//     author: 'The Road Ahead',
//     readingStatus: true
//   },
//   {
//     title: 'Steve Jobs',
//     author: 'Walter Isaacson',
//     readingStatus: true
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     readingStatus: false
//   }];

// for (var i = 0; i < library.length; i++) {
//   var book = library[i].title + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }






// class bankaccount {
//   accountID = 12;
//   #accountTitle;
//   #balance;
//   #emailId;

//   setaccountID(accountID) {
//     this.accountID = accountID;
//     return this.accountID;
//   }
//   // getName(){
//   //   return this.#name;
//   // }
// }
// bankaccount.accountID = 14;










