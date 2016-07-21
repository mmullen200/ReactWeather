var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name) {
	console.log('forEach', name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';

console.log(returnMe('Michael'));


// Anonymous functions have a this binding, which can screw things up.
// Arrow functions take on their parent's this binding

var person = {
	name: 'Andrew',
	greet: function () {
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name)
		});
	}
};

person.greet();

function add(a, b) {
	return a + b;
}

var addStatement = (a, b) => {
	return a + b;
}

// No need for a return statement here. Anything after the arrow is automatically returned.
var addExpression = (a, b) => a + b;


console.log(add(1 ,3));

console.log(add(9, 0));

console.log(addStatement (6, 11));
console.log(addExpression(40, 20));











