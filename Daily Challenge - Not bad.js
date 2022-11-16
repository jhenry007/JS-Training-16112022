var sentence = "The movie is not that bad, I like it";
var wordNot = sentence.indexOf("not");
console.log(wordNot);
var wordBad = sentence.indexOf("bad");
console.log(wordBad);

//converting to num
let wordNotnum = (parseInt(wordNot));
let wordBadnum = (parseInt(wordBad));

if (wordBadnum > wordNotnum) {
let splitbyspace = sentence.split(' ');
console.log(splitbyspace);
//['The', 'movie', 'is', 'not', 'that', 'bad,', 'I', 'like', 'it']
splitbyspace.splice(3,3,'good,');
console.log(splitbyspace);
var joinsentence = splitbyspace.join(" ");
console.log(joinsentence);
}
  else {
  console.log(sentence);
}
