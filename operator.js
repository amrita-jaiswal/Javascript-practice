var massMark =78;
var heightMark = 1.70;//metres

var massJohn = 80;
var heightJohn =1.95;

var BMIMark= massMark/(heightMark * heightMark);
var BMIJohn = massJohn/(heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

var MarkHigherBMI =BMIJohn > BMIMark;
console.log('Is Mark\'s BMI is higher than John\'s ? ' +MarkHigherBMI);