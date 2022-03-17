//---------use recursion finish the below functions-----//
function sum(x, y) {
    if(y === 0)
        return x;
    else 
        return sum(x,y-1)+1;
}
console.log(sum(5,2));

// the second multiplying x,y
function multiply(x, y) {
    if(y === 0)
        return 0;
    else
        return x+multiply(x,y-1);
}
console.log(multiply(5,2));

// the third divide numbers
function divide(x, y) {
    //this function returns the quotient (euclidean division)
    if(y === 0)
        return "division by zero is undefined";
    else
        if(x<y)
            return 0;
        else 
            return 1+divide(x-y,y);
}
console.log(divide(63,9));

// exercise N°1


//giving an input string return a same string but  remove all parentheses and replace it with commas ponctuation(','),the first letter should uppercased and   don't forget the full point in the end of paragraph (".");
// if not a string return false
// ponctuation('it"s morning),let"s hangout)===>'It"s morning,let"s hangout.'
// ponctuation(231456),let's hangout)===>false*
// make both methods  for loops and while loop

//using for loop
function ponctuation_for(str) {
    if(typeof str === "string"){
        let str2 = ""; 
        
        for(let i=0;i<str.length;i++)
            if(str[i] === ")" || str[i] === "(")
                str2 += ",";
            else 
                str2 += str[i];
                
        return str2[0].toUpperCase()+str2.substr(1)+".";
    }
    else
        return false;
}
console.log("result ===>",ponctuation_for('it"s morning),let"s hangout'));
console.log("result ===>",ponctuation_for(231456));

//using while loop
function ponctuation_while(str) {
    if(typeof str === "string"){
        let str2 = ""; 
        let i = 0;
        
        while(i<str.length){
            if(str[i] === ")" || str[i] === "(")
                str2 += ",";
            else 
                str2 += str[i];
            i++;
        }
                
        return str2[0].toUpperCase()+str2.substr(1)+".";
    }
    else
        return false;
}
console.log("result ===>",ponctuation_while('i(t"s )mornin(g),let("s hangout'));
console.log("result ===>",ponctuation_while(231456));

// exercise N°2:
// count down the input number to 1
//// make both methods  for loops and recursion

// countDown(4)==>
// 4
// 3
// 2
// 1
// countDown("hello")==>
// 4
// 3
// 2
// 1
// the numbers range should be from -100 to 100

//if it"s string  count the length and return the countdown

//using loop
function countDown_loop(number) {
    if(typeof number === "string")
        countDown_loop(number.length);
    else{    
        if (number<100 && number >-100){
            let i = number;
            while (i>0){
                console.log(i);
                i--;
            }
        }
        else{
            console.log("out of range");
        }
    }
}
countDown_loop(4);
countDown_loop("hello");

//using loop
function countDown_recursion(number) {
    if(typeof number === "string")
        countDown_recursion(number.length);
    else{    
        if (number<100 && number >-100){
           console.log(number);
           countDown_recursion(number-1);
        }
        else{
            console.log("out of range");
        }
    }
}
countDown_loop(123);
countDown_loop("hello world");


// exercise N°3:
// program to find the factorial of a number
// make it with recursion
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1
function factorial(x) {
    if (x === 0)
        return 1;
    else 
        return x*factorial(x-1);
}
console.log("factorial of 3:",factorial(3));

// exercise N°4:

// giving a string str and number n(number of time string should repeat) return the repeated  string n times:

// repeatString("dog",3)==>"dogdogdog"
// repeatString("no",0)==>"give a number bigger than zero"

function repeatString(str, n) {
    if(n === 0)
        return "give a bigger number";
    else
        if(n === 1)
            return str;
        else
            return str+repeatString(str,n-1);
}

console.log(repeatString("dog",3));
console.log(repeatString("no",0));

//Advanced
// exercise N°1
// check the number is prime in giving range between x and y
// Prime numbers between 25 and 50 are:
// 29
// 31
// 37
// 41
// 43
// 47
function APrimeNumber(x){
    let APrimeNumber = true;
    let i =2;
    
    while(i<=Math.sqrt(x) && APrimeNumber){
        if(x%i === 0)
            APrimeNumber = false;
        i++;
    }
    return APrimeNumber;
}

function isPrime(x, y) {
    if(x>y)
        isPrime(y,x);
    else{
        for(let i=x;i<=y;i++)
            if(APrimeNumber(i) && i>1)
                console.log(i);
            
    }
}
console.log("Prime numbers between 25 and 50 are:");
isPrime(25,50);