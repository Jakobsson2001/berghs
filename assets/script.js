(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open);
  });

  // Close menu when a link is clicked (mobile)
  links.addEventListener('click', function (ev) {
    if (ev.target && ev.target.matches('a')) {
      setOpen(false);
    }
  });
})();

// Live HTML demo (html.html)
(function () {
  const input = document.getElementById('live-html-input');
  const frame = document.getElementById('live-html-preview');
  const resetBtn = document.getElementById('live-html-reset');
  const copyBtn = document.getElementById('live-html-copy');
  const status = document.getElementById('live-html-status');
  if (!input || !frame) return;

  const starter = input.value.trim();

  function wrap(html) {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Preview</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; line-height: 1.5; padding: 16px; }
      img, video { max-width: 100%; height: auto; }
      * { box-sizing: border-box; }
    </style>
  </head>
  <body>
    ${html}
  </body>
</html>`;
  }

  let timer = null;
  function render() {
    try {
      if (status) status.textContent = 'Rendering…';
      frame.srcdoc = wrap(input.value);
      if (status) status.textContent = 'Updated';
    } catch (e) {
      if (status) status.textContent = 'Error rendering';
    }
  }

  function debounceRender() {
    clearTimeout(timer);
    timer = setTimeout(render, 150);
  }

  input.addEventListener('input', debounceRender);
  render();

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      input.value = starter + '\n';
      render();
      if (status) status.textContent = 'Reset to example';
    });
  }

  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(input.value);
        if (status) status.textContent = 'Copied to clipboard';
      } catch (_) {
        if (status) status.textContent = 'Copy failed';
      }
    });
  }
})();

// Smooth scroll for in-page TOC links with easing slowdown
(function () {
  const toc = document.querySelector('.prose .toc');
  if (!toc) return;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function getOffsetTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
  }

  function scrollToTarget(targetEl) {
    const header = document.querySelector('.navbar .container');
    const headerH = header ? header.offsetHeight : 64;
    const start = window.scrollY;
    const dest = Math.max(0, getOffsetTop(targetEl) - headerH - 8);
    const distance = dest - start;
    const duration = Math.min(1000, Math.max(400, Math.abs(distance) * 0.5));
    let startTime = null;

    function step(ts) {
      if (startTime === null) startTime = ts;
      const t = Math.min(1, (ts - startTime) / duration);
      const eased = easeOutCubic(t);
      window.scrollTo(0, start + distance * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  toc.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    scrollToTarget(target);
    history.replaceState(null, '', `#${id}`);
  });
})();


/* comment 
here is comment
*/


var a = 5;
var b = 10;
var c = "I am a string"

a = a + 1;
b = b + 5;
c = c + "String!";


// Declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Assignments
STUDLYCAPVAR = 10;
PRoper CAmelCAse = "A String";
tITLECASEOVER = 9000;


var sum = 10 + 0;

var myVar = 87;
myVar = myVar + 1;


myVar--;

var a = 3;
var b = 17;
var c = 12;


a = a - 6;
b = b - 15;
c = c - 1;

a -= 6;
b -= 15;
c -= 1;



a = a * 5;
b = 3 * b;
c = c * 10;

a *= 5;
b *= 3;
c *= 10;



a = a / 5;
b = 3 / b;
c = c / 10;

a /= 5;
b /= 3;
c /= 10;

var firstName = "Alan";
var lastName = "Turing";

var myStr = "I am a "double quoted" string inside "double quotes"";

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

var outStr = "I come first. ";

outStr +0 "I come sevond.";




var ourName = "freeCodeCamp";
var outStr = "Hello, our name is " + ourName + ", how are you?";


var anAdjective = "Awesome!";
var outStr = "freeCodeCamp is "
outStr += "anAdjective";

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;


var firstLetterOfFirstName ="";
var firstName = "Ada";

firstLetterOffFirstName = firstNam[0];

var myStr = "Jello World";

myStr[0] = "H";

var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length +1];



function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) [

var result= "";
result +="The " + myAdjective + " " + myNoun + " " + myVerb + " to the store"
return result;
]

console.log(wordBlanks("dog", "big", "ran", "quickly"));


var ourArray = ["John", 23];

var ourArray = [["John", 23], ["everything", 101010]]

var ourArray = [50,60,70];
var ourData = ourArray[0];

var ourArray = [18,64,99];
ourArray[1] = 45 //our array will nmow equals [18,45,99]


var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14,]]
var myData = myArray[0][0]

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"])
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]


var ourArray = ["Stimpson", "J", "cat"];
ourArray.push("happy");
console.log(ourArray);

["Stimpson", "J", "cat", "happy"]

var ourArray = [1,2,3]
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equls 3, and ourArray now equals [1,2]

var myList = [["cereal", 3], ["milk", 2], ["bananas", 23], ["juice", 2], ["eggs",12]]

function ourReusableFunction() {
  console.log("Heyya, World");
}
ourReusableFunction();

function ourReusableFunction() {
  console.log("Hi Worild")
}

document.getElementById("myBtn").addEventListener("click", ourReusableFunction);

function ourFunctionWithArgs(a, b){
  console.log(a-b);
}

ourFunctionWithArgs(10,5); // this will output 5

var myGlobal = 10;

functionfun1(){
  var oopsGlobal= 5;
}

function myLocalScrope {
  var myVar = 5;
  console.log(myVar);
}

myLocalScope();

console.log(myVar);


function myLocalScope() {          // ✅ Definierar en funktion med namnet "myLocalScope"
  var myVar = 5;                   // ✅ Skapar en lokal variabel "myVar" och ger den värdet 5
  console.log(myVar);              // ✅ Loggar värdet 5 i konsolen (fungerar eftersom vi är inne i funktionen)
}

myLocalScope();                    // ✅ Anropar/kör funktionen. Detta gör att koden ovan körs.

console.log(myVar);                // ❌ ERROR! Försöker logga "myVar", men variabeln existerar inte här utanför funktionen.


var outerWear = "T-shirt" //denna variabel är global scope

functionmyOutfit() {
  var outerWear = "sweater";
  return outerWear; // eftersom att varibeln ovan är global kommer denna retunera T-shirt
}

console.log(myOutfit()); //När vi loggar det kommer vi få T-shirt


function minusSeven(num) {
  return num -7;
}

console.log(minusSeven(10));

var sum = 0;
  function addThree(){
    sum = sum + 3
  }

  var sum = 0;

function addThree() {
  sum = sum + 3;
}

addThree();
console.log(sum);            // → 3
console.log(addThree());     // → undefined



var changed = 0;
function change(num) {
  return (num +5) / 3
}

changed = change(10);

var processed = 0;

function processArg(num) {
return (num + 3) / 5;
}



var changed = 0;                 // Skapar variabeln "changed" och sätter startvärdet till 0

function change(num) {           // Skapar en funktion som heter "change" och tar parametern "num"
  return (num + 5) / 3;          // Returnerar resultatet av (num + 5) delat med 3
}

changed = change(10);            // Anropar change(10) → funktionen returnerar 5 → "changed" blir 5


function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



function nextInLine(arr, item) {
  arr.push(item);       // 1. Lägg till det nya värdet längst BAK i arrayen
  return arr.shift();   // 2. Ta bort OCH returnera första värdet i arrayen
}

var testArr = [1, 2, 3, 4, 5];  // En array med fem värden

console.log("Before: " + JSON.stringify(testArr)); 
// JSON.stringify gör arrayen läsbar i textform → "Before: [1,2,3,4,5]"

console.log(nextInLine(testArr, 6));  
// Kör funktionen med testArr och item = 6
// Returnerar och loggar första värdet som togs bort (1)

console.log("After: " + JSON.stringify(testArr));
// Efter funktionen: testArr är nu [2,3,4,5,6]


function ourTrueOrFalse (isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
}
  return "No, it's false";
}

function trueOrFalse (wasThatTrue) {

}

trueOrFalse(true);


function myCoolFunction(input) {
  if (input) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(myCoolFunction(true));   // Yes, it's true
console.log(myCoolFunction(false));  // No, it's false

function testEqualFunction(val) [
  if (val == 12) [
    return "Equal";
  ]
  return "Not Equal";
]

testEqualFunction(10);

function testEqualFunction(val) {       // 🔹 Skapar en funktion som heter "testEqualFunction"
  // 🔹 Den tar emot en parameter som heter "val"
  // 🔹 "val" fungerar som en variabel inuti funktionen

if (val == 12) {                       // 🔹 IF-sats: kontrollerar om värdet i "val" är lika med 12
  // 🔹 "==" betyder jämför (inte tilldela)
return "Equal";                      // 🔹 Om villkoret är sant → returnera texten "Equal"
}

return "Not Equal";                    // 🔹 Om villkoret inte är sant → returnera texten "Not Equal"
}

testEqualFunction(10);                   // 🔹 Anropar funktionen och skickar in värdet 10 som argument
  // 🔹 Då blir "val" = 10 inuti funktionen
  // 🔹 IF-satsen testar: 10 == 12 → false
  // 🔹 Returnerar därför: "Not Equal"



  function testGreaterThan(val) {
    if (val > 100) {
      return "Over 100";
    }
  
    if (val > 10) {
      return "Over 10";
    }

    return "10 Or under";
  }


  function testElse(val) {
    let result;  "";

    if (val > 5) {
      result = "Bigger than 5"
    } else {
      result = "5 or Smaller";
    }
    
 
    return result;
  }
 
 console.log(testElse(10)); 


 function testElseIf(val){
  if (val > 10) {
    return "Greaer than 10";
  } else if (val < 5) {
    return "Smaller than 5";
    else {
      return "Between 5 and 10";
    }
 }
  
 function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else{
    return "Huge"
  }
}

function caseInSwitch(val) {
  var answer = ""

  switch(val) {
    case 1:
    case 2:
    case 3:
    case 4:
      answer = "alla";
      break;
}
  return answer;

}
console.log(caseInSwitch(2))



function caseInSwitch(val) {        // Skapar en funktion som heter caseInSwitch med parametern "val"
  var answer = "";                  // Skapar en variabel "answer" som börjar som en tom string

  switch(val) {                     // Startar en switch-sats som jämför värdet i "val"

    case 1:                         // Om val === 1
      answer = "alpha";             // sätt answer till "alpha"
      break;                        // avsluta switchen här (annars fortsätter den)

    case 2:                         // Om val === 2
      answer = "beta";              // sätt answer till "beta"
      break;                        // stoppa här

    case 3:                         // Om val === 3
      answer = "gamma";             // sätt answer till "gamma"
      break;                        // stoppa här

    case 4:                         // Om val === 4
      answer = "delta";             // sätt answer till "delta"
      break;                        // stoppa här
  }

  return answer;                    // Returnera det värde som satts i answer
}

console.log(caseInSwitch(2));       // Anropar funktionen med värdet 2 och loggar resultatet i konsolen



function isLess(a,b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

function isLess(a,b) {
  return a < b;
}


isLess(10,15)


var person = {
  name: "Jonathan",
  age: 22,
  city: "Stockholm"
};

person.name    // "Jonathan"
person.age     // 22
person.city    // "Stockholm"



var ourDog = {
  "name": Camper,
  "legs": 4,
  "tails": 1
  "friends": ["everything!"]

};

person.name    // "Jonathan"
person.age     // 22
person.city    // "Stockholm"



var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"

};

  var hatValue = testObj.hat;
  var shirtValue = testObj.shirt;



  var testObj = {
    "hat head": "ballcap",
    "shirt body": "jersey",
    "shoes foot": "cleats"
  
  };
  
    var hatValue = testObj["hat head"];
    var shirtValue = testObj["shirt body"];
    var shoesValue = testObj["shoes foot"];

    var testObj = {
      12: "Namath",
      16: "Montana",
      19; "Unitas"
    }:
var playerNumber = 16
var player = testObj[playernumber];


var ourDOG= {
  "name":"Camper",
  "legs": 4,
  "tails": 1,
  "freinds": ["everything!"]
};

ourDog.head = "1"


var ourDog = {
  "name":"Camper",
  "legs": 4,
  "tails": 1,
  "freinds": ["everything!"]
};

ourDog.["head"] = "1"


var ourDog= {
  "name":"Camper",
  "legs": 4,
  "tails": 1,
  "freinds": ["everything!"]
 };
 
 
 delete ourDog.bark;


 funkction phoneticLookup(val) {
var result = "";

var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "frank"
};

result = lookup[val];
return result;

 }

 console.log(phoneticLookup("charlie"));

 }

 var myObj ={
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
 }

 function checkObj (checkProp) {
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];

  } else {
    return "Not Found"
  }

 }