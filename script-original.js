//for is used when you know how many times you want to execute a code
//variable - i = 1 | i is less than/equal to 100 | i++ (loop) counts up incrementally
for(var i=1; i<=100; i++){
	// if i is divisible by 3 | && = (Logical Operator) AND | if i is divisible by 5 - display number as Fizzbuzz
	if ((i%3 == 0) && (i%5 ==0)) {
		console.log('FizzBuzz');
	}
	// else if i is divisible by 3 - display number as Fizz
	else if (i%3 == 0) {
		console.log('Fizz');
	}
	// else if i is divisible by 5 - display number as Buzz
	else if (i%5 == 0) {
		console.log('Buzz');
	}
	// else display number
	else {
		console.log(i);
	}
}