
console.log("ksuhgupta");
// how to add symbol in onject 
const newsymbol=Symbol("myapi")
let rcv={
    name:"kush",
    class:"v",
    [newsymbol]:("my api"),
    section:"c",
    loda:"lasan",
}
console.log(rcv.name);
console.log(rcv.class);
console.log(rcv.section);
console.log(rcv.loda);
console.log(rcv);
console.log(rcv[newsymbol]);
console.log(typeof rcv[newsymbol]);

let arrcy={}/// how to make object in different way
arrcy.username="kush";
arrcy.emial="kush8ar1719a@gmail.com"
arrcy.gender="male"

console.log(arrcy);


let arrcy2= {
  email:"sony@gmail.com",
  fullname:{
      username:"kushgupta"
      
  },
  userfullname:{
    firstnmae:{
         name:"kush",
         lastname:"gupta"
    }
  }
}
console.log(arrcy2.userfullname.firstnmae);


const arr3={1:"a",2:"b",3:"c"}
const arr4={name:"kush",lastname:"gupta"}
// const object3= Object.assign(arr3,arr4)/// we can add one object by adding two object
// console.log(object3);


const obj4={...arr3,...arr4}/// this the spread operator we add two object in one object
console.log(obj4);


const onj4={
  name:"kush",
  classe:"gourth"


}
// console.log(onj4.classe);
const {classe: kkk}=onj4// destructuring {} is done  by tjis 

console.log(kkk);

