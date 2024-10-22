console.log("kiuhs");

const nynamr="k-u-s-h"
const ummr=19

console.log("my nmae is "+nynamr,"my age is"+ummr);/// we dont this type of code this is a wrong practice
console.log(`hello ny nmae is ${nynamr} ny age is ${ummr}`);/// we write this this is a write practice 

const sigma= new String('kush gupta')
console.log(sigma)//output give[string value is kush gupta]
console.log(sigma[0]);/// give the index value of string 
console.log(sigma.__proto__);// give all the functuon in string 
console.log(sigma.length);/// give the length off words in numbers
console.log(sigma.toUpperCase());/// change the sigma string to uppercase but not changed previous string because sigma is variable store in stack and .touppercase store in heap so they are in deiiferent location 
console.log(sigma.charAt(2));// give the string value which word is rest on which number 
console.log(sigma.indexOf("t"));// give the number of index value 

const alpha=sigma.substring(0,5)
console.log(alpha);
const gama = sigma.slice(-8,4) 
console.log(gama);  
const beta="    kush gupta                                      "
console.log(beta);
console.log(beta.trim());/// cutdown the extra space
const url="https;//wavedesign.in"
console.log(url.replace("v","e"));/// repcae the v to e 
console.log(url.includes("five"));/// tell the what is in the url and what is not 
console.log(nynamr.split("-"));/// conert in the array on the basis ogf line or spcae


///2 pics sign email id 10th 12th marksheet aadhar card 