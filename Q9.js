// Question 9

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value, or returns the first value if both of them
// are equal.
// Then test your function inside of a console.log by calling it with two
// different numbers and again in another console.log with two equal numbers.

var c
function maxOf2(a,b){

    if (a>b) {
        console.log(a);
    }
    else if (a<b) {
        console.log(b);
    }
    else  console.log(a +" "+ b);
}


maxOf2(2,3);
maxOf2(9,7);
maxOf2(9,9);