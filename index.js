//using test method
//use test to check if a check word '/word/' exist in a string
let a = "The men are at work";
let aA = /Are/;
let aB = /work/;
// test the check word against a string
let aresult = aA.test(a);
console.log(aresult);

//or operator in testing

let b = "we have cat, dog, and fish";
let bA = /car|lion|fish/;
let bresult = bA.test(b);
console.log(bresult);

//ignore lower or upper case

let c = "queen owen is BaCk in town";
let cA = /bAck/i;
let cresult = cA.test(c);
console.log(cresult);

//...........match method........

let d = "working so hard to give my best";
let dA = /give/i;
let dresult = d.match(dA);
console.log(dresult);

//...global all
let e = "bill with Bill bill in the house";
//two regex
let eA = /bill/gi;
let eresult = e.match(eA);
console.log(eresult);

// ........period...
//start with or end with  => this is indicated with '.' full stop
let f = "I'll hum a song";
let f1 = "Bear hug";
let fA = /hu./;
console.log(f.match(fA));
console.log(f1.match(fA));

let g = "Let's have fun with regular expressions!";
let gA = /.un/;
let gresult = gA.test(g);
console.log(gresult);

// ----picking ALL method-----
// --------matching out all the characters in string

let h = "plenty of thIngs dey run for my mind";
let hA = /[aeiou]/gi;
let hresult = h.match(hA);
console.log(hresult);

// ------match all alphabetic characters and number
// ------e.g    /[2-6h-s]/ig => 2 to 6 also letter h to s
let k = "1. learn 2.regular expressrion 12";
let kA = /[a-z]/gi;
let kB = /[0-9]/gi;
let kresult = k.match(kA);
let kres = k.match(kB);
console.log(kresult);
console.log(kres);

// dont want to match ...excepting  we use the .. ^ sign to exempt

let l = "3 blind mice.";
let lA = /[^0-9aeiou]/gi;
let lresult = l.match(lA);

console.log(lresult);

// --------occurance one or more times
let j = "mishsissppis";
let jA = /[s]+/gi;
let jresult = j.match(jA);
console.log(jresult);

// ...------limit wild characters
let string = "titanic";
let regex = /t[a-z]*?i/;
string.match(regex);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*>/;
let work = text.match(myRegex);

console.log(work);

// ======begining of a string ...but if cal is move to the middle it will return false
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let ult = calRegex.test(rickyAndCal);
console.log(ult);

//========check ending of a string
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let jj = lastRegex.test(caboose);
console.log(jj);

// -------to match any letter or number or underscore using /\w/ excluding the space
// ------ not a letter or number use uppercase W
let quoteSample = "The five boxing wizards  jump quick__";
let alphabetRegexV2 = /\w/g;
let upper = /\W/g;
let nnn = quoteSample.match(upper).length;
let nn = quoteSample.match(alphabetRegexV2).length;
console.log(nn);
console.log(nnn);

// ---------maatch out all numbers
let numString = "Your 0 sandwich will be $5.00";
let numRegex = /\d/g;
let numee = /\D/g;
let qq = numString.match(numee);
let result = numString.match(numRegex).length;
console.log(result);
console.log(qq);

// ------------possible usernames
/*
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two-letter names can't have numbers.
// */
// ^ => for the begining, $ => for the end

let username = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/; // Change this line
let usernameresult = userCheck.test(username);

// -------------------match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let w = /\S/g;
let samresult = sample.match(countWhiteSpace);
let samres = sample.match(w);
console.log(samres);
console.log(samresult);

// --------------- specify the lower number of match
let haStr = "Hazzzzah";
let haRegex = /z{4,}/; // Change this line
let esult = haRegex.test(haStr);

// .....
let words = "@hhbhbasdkjkdj hbdffbjds hdbfbasd  54242sdhbfdb sdhb.";
let nns = /[^a-zA-Z]/gi;
let sfsf = words.replace(nns, "4");
let gdg = words.match(nns);
console.log(gdg.join(""));
console.log(sfsf);

// -------serach and replace
// in the parameter the first is the regex pattern while the second is the element to replace them with
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// Returns "Camp Code"

let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let rt = huhText.replace(fixRegex, replaceText);

// ----------white space
let ds = " d g is big enough";
let fr = /\s+/g;
let sd = ds.match(fr);
console.log(sd);

// ------remove all white space at the begining and the end, '|' was use for OR

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let relt = hello.replace(wsRegex, ""); // Change this line
console.log(result);


//---------------remove first word and last word --------------------

const removeChar = (str) => str.replace(/^.|.$/g, "");
OR
const removehar = (str) => str.replace(/^\w|\w$/g, "");



// SUMMARRY

// Character classes
// .	any character except newline
// \w\d\s	word, digit, whitespace
// \W\D\S	not word, digit, whitespace
// [abc]	any of a, b, or c
// [^abc]	not a, b, or c
// [a-g]	character between a & g

// Anchors
// ^abc$	start / end of the string
// \b\B	word, not-word boundary
// Escaped characters
// \.\*\\	escaped special characters
// \t\n\r	tab, linefeed, carriage return
// Groups & Lookaround
// (abc)	capture group
// \1	backreference to group #1
// (?:abc)	non-capturing group
// (?=abc)	positive lookahead
// (?!abc)	negative lookahead
// Quantifiers & Alternation
// a*a+a?	0 or more, 1 or more, 0 or 1
// a{5}a{2,}	exactly five, two or more
// a{1,3}	between one & three
// a+?a{2,}?	match as few as possible
// ab|cd	match ab or cd
