/*
///////////////////////////////////////
//variables & Datatypes 
/!*

/!*var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);*!/


/!*var a ;

console.log(a);*!/


///////////////////////////////////////
// variables & type coercion

var name = 'John';
var age = 26;

/!*console.log(name + age);
console.log(age + age);*!/

var job, isMarried;

//console.log(job);

//job = 'teacher';
isMarried = false;

console.log(name + ' ' + age + ' ' + job + '' + isMarried +  '');

//console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

//console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


//var lastName = prompt('What is the last name?');
//console.log(lastName);

//alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

*!/



///////////////////////////////////////
// Javascript operators
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

/!*
var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*!/



///////////////////////////////////////
// if/else statements
/!*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;

if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}
*!/



///////////////////////////////////////
// boolean logic and switch
/!*
var age = 20;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is a man.');
}


var job = 'teacher';

job = prompt('What does john do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon.');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.');
}
*!/


///////////////////////////////////////
// Functions

/!*
function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageMary);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(retirement);
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*!/



///////////////////////////////////////
// Functions Statements and expressions
/!*

// This is function statement
function someFun(par) {
    //code
}

// This is function expression
var someFun = function(par) {
    //code
}

//Expressions
3 + 4;
var x = 3;

//statements
if (x === 5) {
    //do soemthing
}
*!/



///////////////////////////////////////
// Arrays
/!*var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);
console.log(names);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
console.log(john);
john.unshift('Mr.');
//console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);

alert(john.indexOf('Smith'));
if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher.');
}*!/



///////////////////////////////////////
// Objects & properties: In objects we don't have any defined order.
// first way to create objects.
/!*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);



// second way to create objects.
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*!/



///////////////////////////////////////
// Objects and methods

// v1.0
/!*var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - yearOfBirth;
    }
};

console.log(john.calculateAge(1970));

// v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());


var age = john.calculateAge();
john.age = age;

console.log(john);



//v3.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();
console.log(mike);*!/



///////////////////////////////////////
// Loops

/!*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*!/

/!*
0, true, print 0, update i to 1
1, true, print 1, update i to 2
.
.
.
9, true, print 9, update i to 10
10, FALSE, end loop!
*!/

/!*
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
for (var i = 1; i <= 5; i++) {
    console.log(i);
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    
    console.log(i);
}
*!/



///////////////////////////////////////
// CODING CHALLENGE 2

/!*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*!/

/!*
function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);
        }
    }
    
    return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);
*!/



*/
