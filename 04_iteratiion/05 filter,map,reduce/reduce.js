console.log("kush");
const array=[1,2,3,4,,5]

let sum=array.reduce((acc,currvall)=>{
    console.log(`${acc}`,`${currvall}`);
   return acc+currvall},0)
// console.log(sum);