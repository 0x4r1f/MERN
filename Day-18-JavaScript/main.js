// var studentName = "John Smith"
// var studentName = "2John Smith"
var studentAge = 24;
let studentName = "John Smith"
studentName = "2John Smith"

const JonhAge = 34;
// JonhAge = 34;



console.log (studentName);
console.log(studentAge);
console.log(JonhAge); 

// Data Types 
// Primitive data type 
/**
1. String
2.Number
3.Boolean
4.Null
5.Undefined
 */
// Non-Primitive data type 
/**
1.Object
2.Array
3.Function
 */ 

const age = -18;

if (age < 13 && age >=0) {
    console.log("You are a child");
}else if (age < 20 && age >=13) {
    console.log("You are a Teenager");
}else if (age < 30 && age >=20) {
    console.log("You are young adult.");
}else if (age < 50 && age >=30) {
    console.log("You are an adult.");
}else if (age < 150 && age >=50) {
    console.log("You are a senior.");
}else  {
    console.log("You are not a human.");
}

// Switch
const day = "Friday";
switch (day) {
    case "Sunday":
        console.log("It's Sunday, time to start the week");       
        break;
    case "Monday":
        console.log("It's Monday, Back to work!");       
        break;
    case "Tuesday":
        console.log("It's Tuseday, keep going!");       
        break;
    case "Wednesday":
        console.log("It's Wednesday, halfway through the week!");       
        break;
    case "Thursday":
        console.log("It's Thursday, almost the weekend!");       
        break;
    case "Friday":
        console.log("It's Friday, time to relax!");       
        break;
    case "Satarday":
        console.log("It's Satarday, Enjoy your day!");       
        break;

    default:
        console.log("Invalid day!");
}


// Operators 

// Arithmetic Operators 

/**
 * 1. Addition (+)
 * 2. Subtraction (-)
 * 3. Multiplication (*)
 * 4. Division (/)
 * 5. Modulus (%)
 * 6. Exponentiation (**)
 */

// Assignment Operators 

/**
 * 1. Assignment (=)
 * 2. Addition assignment (+=)
 * 3. Multiplication assignment (-=)
 * 4. Multiplication assignment (*=)
 * 5. Division assignment (/=)
 * 6. Modulus assignment (%=)
 * 7. Exponentiation assignment (**=)
 */

let n = 5;
n +=2;
n -=1;
n *=3;
n /=2;
n %= 4;
n **=239;
console.log(n);

// Comparision Opertors
/**
 * 1. Equal to (==)
 * 2. Not equal to (!=)
 * 3. Strict equal to (===)
 * 4. Strict not equal to (!==)
 * 5. Greater than (>)
 * 6. Less than (<)
 * 7. Greater than or equal to (>=)
 * 8. Less than or equal to (<=)
 */

// Logical Operators 
/**
 * 1. Logical AND (&&)
 * 2. Logical OR (||)
 * 3. Logical NOT (!)
 */
