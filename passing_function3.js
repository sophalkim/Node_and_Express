function printWord(someFunction, word) {
	someFunction(word);
}

function someFunction(word) {
	console.log(word);
}

printWord(someFunction, "We are passing the function around");