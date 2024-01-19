const s1 = 'Chief';
console.log(s1);
const s2 = "Mahedi";
console.log(s2);
const s3 = "\xA9";
console.log(s3);
const s4 = "\u00A9";
console.log(s4);
const stringObj = new String("This is a string object"); 
console.log(stringObj);
console.log(typeof stringObj);
const sentence = 'JavaScript is awesome';
const index = 7;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
const words = sentence.split(' ');
console.log(words);
console.log(words[0]);
const slicedSentence = sentence.slice(2, 10)
console.log(slicedSentence);