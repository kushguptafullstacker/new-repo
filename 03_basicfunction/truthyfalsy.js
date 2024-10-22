/////////falsy value
///flase , 0 , bigint , -0, null , undefined,nan , 0n

///// trurthy value 
//"0","false","",[],{},function(){}


// nullish collasing operator ===???? mainly workon null and undefined 

let val;
// val=6 ?? 10 
// val=null??10/// its print 10 not give output fot null
// console.log(val);
val=null ??undefined
console.log(val);//// give the second when there is undefined and null 

let val2;
val2= undefined ?? 20
console.log(val2) ///  give the second value always