/*
Program no 01 :-
Write a program to calculate factorial of a positive number within range 1-10?

let num = prompt("Enter the Number");
let factorial = 1;
if(num >=0 && num <= 10){
    for(let i = 1; i <= num; i++){
        factorial = factorial*i;   
    }
    document.write(`The factorial of ${num} is = ${factorial}`);
    
}else{
    alert("Invalid Number");
}


 Program no 02 :-
Write a program that uses for loop statement to calculate and print the product of odd integers from 1-15?

let num = prompt("Enter the Number :");
let product = 1;
if(num >= 1 && num <=15){
    for(let i = 1; i <= num; i++){
        if (i%2 == 1) {
        product = product*i;       
        }    
    }
    document.write(`The Product of ${num} is = ${product}`);
}else{
    alert("Invalid Number");
}


 Program no 03 :-
Write a program that uses for loop statement to calculate and print the product of odd integers from 1-25 which are divisible by 5?

let num = prompt("Enter the number : ");
let product = 1;
let result = 1;
if (num >=1 && num <=25){
    for(let i =1; i <=num; i++){
        if(i%5 === 0){
            product = i;
           if(product%2 === 1){
               result *=product;
            }
        }
    }
   document.write(`The Product of ${num} is = ${result}`);
} else {
   alert("Invalid Number");
}

 Program no 04 :-
Write a program code program that uses a for statement to determine and promote the largest number of ten numbers input by the user?

let number = [10,20,45,23,56,78,98,54,65,54,12];
let max = number[0];
for(let i =1; i < number.length; i++){
    if(number[i] >= max){
        max = number[i];
    }
    
}
console.log(`The maximum number is = ${max}`);


Program no 05 :-
Write a program that checks a number for perfect, deficit and abundunt ?

let num = prompt("Enter the Number :");
let sum = 0;
for(let i = 1; i <= num/2; i++){
    if( num%i === 0 ){
       sum += i;
    }   
}
 if(sum > num){
    console.log("The Number is Abundant");
 }else if(sum < num){
    console.log("The Number is Deficit");
 }else{
    console.log("The number is Perfect");
 }


Program no 05 :-
Write a program that uses for loop statement to sum a sequence of integers. Assume that the first integer read specifies the number of values remaining to be entered. Your program should read only one 
value per statement. A typical input statement might be 5	100	200	300	400?

let number = prompt("Enter the number :");
let sum = 0;
let num;

for(let i =1; i<=number; i++){
     num = prompt("Enter the number");
     num = +(num);
     sum += num
     
}
console.log(sum);



 Program no 07:-
Write a algorihtm that uses for loop statement to find  the smallest of several integers. Assume that the first value read specifies the number of values remaining and the first number is not one of the integers to compare?

let number = prompt("Enter the Number :");
let tatalNumber;
let num = [];
for(let i = 1; i <= number; i++){
    tatalNumber = prompt("Enter the Number");
    tatalNumber = +(tatalNumber);
    num.push(tatalNumber);
}
console.log(num);
let min = num[0];
for(let i =1; i < num.length; i++){
    if(num[i] <= min){
        min = num[i];
    }   
}
console.log(`The minimum number is = ${min}`);



 Progrm no 08 :-
Write a program that determines the first n (user supplied number) Fibonacci numbers?

let number = prompt("Emter thr Number");
let num1 = 0 , num2 = 1 , totalnum;
for(let i = 1; i <= number; i++){
    console.log(num1);
    totalnum = num1 + num2;
    num1 = num2;
    num2 = totalnum;
}
*/
//Program no 10 :-
//Write a program to calculate : PI = 4/1-4/3+4/5-4/7+4/9-4/11+4/13 ?

let total = 0;
for (let i = 0; i < 13; i++) {
    let num = 4/(2*i+1);
    if (i%2 === 1) {

        total -= num;
    } else{
        total += num;
    }  
}
console.log(total);





