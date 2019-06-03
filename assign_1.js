var http=require('http');
var module=require('./assign1_fun.js');
var result=module.isOdd(4);
if(result) {
    console.log("No is odd");
}else {
    console.log("No is even");
}
var res=module.isPrime(13);
if(res) {
    console.log("No is prime");
}else {
    console.log("No is not prime");
}
var fact = module.factorial(5);
console.log(fact);