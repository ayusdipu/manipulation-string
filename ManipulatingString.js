// Manipulation of String

const sentenceA = "Hello World!";
const sentenceB = "Good Bye!";

console.log(sentenceA);
console.log(sentenceB);

// Level 1
const sentenceC = sentenceA + " " + sentenceB;
console.log(sentenceC);
const sentenceD = `${sentenceA} ${sentenceB}`;
console.log(sentenceD);

// Level 2
var senE = sentenceA.toUpperCase();
console.log(senE);
var senF = sentenceB.toLowerCase();
console.log(senF);

// Level 3
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
var senG = toTitleCase(sentenceA);
console.log(senG);