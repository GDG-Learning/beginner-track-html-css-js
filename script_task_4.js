function main(){
let oddCount=0;
let evenCount=0;
for(let i=5; i<=15; i++){
let x= checkOddEven(i);
checkDivisibility(i);
if(x(i)==="even"){evenCount++;}
else{oddCount++;}
}
let sum= sumTotal;
console.log("The total sum is: " + sum);
}


function checkOddEven(num){
let odd=0;
let even=0;
if(num%2===0){
console.log(num + "is even");
even++;
return "even";
}
else{
console.log(num + "is odd");
odd++;
return "odd";
}
}


function checkDivisibility(num){
if(num%3===0 && num%5===0){
console.log(num + "is divisible by both 3 and 5");
}
else if(num%3===0 && num%5!==0){
console.log(num + "is divisible by 3");
}
else if(num%5===0 && num%3!==0){
console.log(num + "is divisible by 5");
}
}


function sumTotal(num){
let total=0;
total+=num;
return total;
}
