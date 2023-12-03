function nice (name) {
    console.log("Hey " + name + " you are nice.")
    console.log("Hey " + name + " you are good.")
    console.log("hey " + name + " your Tshirt is good.")
    console.log("hey " + name + " your course is good too.")
}

nice("amaresh");

function sum( a , b) {
    console.log( a + b )
    return a + b;
}

result = sum(3 , 5 );

console.log("the sum of these numbers is : ", result)

function summ(a , b , c=3) {
    return a + b + c;
    
}

result1 = summ( 2 , 4 , 12)

console.log("the sum of numbers is : ", result1);

const function1 = (x) => {
    console.log("I am an arrow function", x)
}

function1(34)