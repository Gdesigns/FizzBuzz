//for is used when you know how many times you want to execute a code
//variable - i = 1 | i is less than/equal to 100 | i++ (loop) counts up incrementally
for(var i=1; i<=100; i++){
	// if i is divisible by 3 | && = (Logical Operator) AND | if i is divisible by 5 - display as Fizzbuzz
	if ((i%3 == 0) && (i%5 ==0)) {
		document.write('FizzBuzz'+"<br />");
	}
	// if i is divisible by 3 - display as Fizz
	else if (i%3 == 0) {
		document.write('Fizz'+"<br />");
	}
	// if i is divisible by 5 - display as Buzz
	else if (i%5 == 0) {
		document.write('Buzz'+"<br />");
	}
	// display number
	else {
		document.write(i+"<br />");
	}
}