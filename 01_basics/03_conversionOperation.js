let score="33abc"

console.log(typeof score);
console.log(typeof(score));

let value = Number(score)
console.log(typeof value);
console.log(value);

// "33" => 33
//  "33abc" =>NaN
//  true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "Shruti" => true

let value1 = 3
let negvalue = -value
console.log(negvalue)

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/3);
//console.log(2%3);

let str1 = "Hello"
let str2 = "Shruti"
let str3= str1+str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");