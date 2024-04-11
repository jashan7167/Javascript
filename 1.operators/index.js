// arithmetic operators = operands (values,variables) and operators (+,-,*,/,%) that perform operations on them
// comparison operators = operands and operators that compare values and return true or false
// logical operators = operands and operators that compare values and return true or false

//1. Arithmetic operators

let student = 30;
console.log(student);
student++; //or student = student + 1
console.log(student);
student--; //or student = student - 1
console.log(student);
student*=2;
console.log(student);
student/=2;
console.log(student);
student = student**2; //or student = student **2= student
console.log(student);
student = student%2;   
console.log(student);

/*
operator precedence
1. () 
2. ++,-- (postfix)
3. ** (exponentiation)
4. *,/,%
5. +,-
*/

let result =  12%5 + 8/2 + (2*2) + 5;
let result2 = 16/2 ** (2+5); //first 2+5=7 then 2**7=128 then 16/128=0.125
console.log(result);
console.log(result2);




