// Function Define
console.log("####### Function Define");

function welcomeMsg() {
    console.log("I am a message");
}

// Function call 
welcomeMsg();  

// return 
console.log("####### return");

function welcomeMsg() {
    console.log("I am a message 2");
    return "Hello world"
    console.log("I am another message");
}

console.log(welcomeMsg()); // print function with return

//Parameter and Argument 
console.log("####### Parameter and Argument ");

function welcomeMsg(name) {
    return "I am a message for " + name;
}

console.log(welcomeMsg("Asif")); 
console.log(welcomeMsg("Shakib")); 

// Default Parameter 
console.log("####### Default Parameter ");

function welcomeMsg(name = "Asif") {
    return "I am a message for " + name ;
}

console.log(welcomeMsg);

// Multiple Parameters 
console.log("####### Multiple Parameters ");

function welcomeMsg(name  = "Asif" , city = "Dhaka") {
    return "I am a message for " + name + " and I live in " + city + "."
}

console.log(welcomeMsg ("Asif", "Dhaka"));

// Function Expression 
console.log("####### Function Expression ");

welcomeMsg = function (name = "Asif", city = "Dhaka") {
    return "I am a message for " + name + " and I live in " + city + "."
};

console.log(welcomeMsg("Asif","Dhaka"));

// Function Expression with Arrow Function 
console.log("####### Function Expression with Arrow Function ");

welcomeMsg = (name = "Asif", city = "Dhaka") => {
    return "I am a message for " + name + " and I live in " + city + "."
};

console.log(welcomeMsg("Asif","Dhaka"));


const func1 = (msg) => {
    return msg
}

const func2 = msg => msg;

console.log(func1("Hello"));

// recursion 
console.log("####### Recursion  ");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial (n - 1);
    }
    
}

console.log(factorial(5));


// 0 to 9
console.log("####### 0 to 9");

const printNumbers = (n = 0) => {
    if (n < 10) {
        console.log(n);
        printNumbers(n+1);
    }   
}

printNumbers();

// Callbacks

const greet = (name, callback) => {
    console.log("Hello" + name);
    callback();
}

const cb = () => {
    console.log("This is a callback function.");
}

greet ("Asif", cd);
greet("Sakib", () => {
    console.log("This is a callback function.");
});





















// airfhossen.byetsm1@dipti.com.bd