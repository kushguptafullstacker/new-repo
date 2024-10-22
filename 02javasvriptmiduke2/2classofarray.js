let tmyarray=["batman","shaktiman","krish"]
 let mysecondarray=["thor","captain america","hulk","tonystark"]

// mysecondarray.push(tmyarray)
// console.log(mysecondarray);// but this is ok but  ot good

const mynewarray=tmyarray.concat(mysecondarray)
// console.log(mynewarray);

const allnwheroes=[...mynewarray,...mysecondarray]
console.log(allnwheroes);//spread perfrom all array variable in one array 
const anotherarray=[1,2,3,,4,[5,6,,7,8,],[5,4,3,6],[5,6,2,8,]]
console.log(anotherarray);
let secondanotherarray=anotherarray.flat(Infinity)
console.log(secondanotherarray);/// flat take aal the array  in one array
console.log(Array.isArray("kus"));// give bulleon vlaue is array or not
console.log(Array.from("kush"));// make the string value into the aarray 
let score=100
let score2=200;
let score3=300;
console.log(Array.of(score,score2,score3));/// make the value in the array 