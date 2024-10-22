// console.log("kush");

// const kush={
//     username:"chirag",
//      age:"16",
//      welcome:function saynymane(){
//         console.log("hello world",this.username);
//         console.log(this.age);
//      }
// }
// // console.log(kush);
// kush.welcome()
// kush.username="kush"
// kush.welcome()
//////// we take only this keywords in object 

// function sy(){
//     let kk="khushi"
//       console.log("kush");
      // console.log(this.kk);//// thiosd keywords dont use in function because it give undefined

// sy()

////////////////////////////fatarrow function

const take =(num1,num2)=>{
  return num1+num2

}
let rv=take(2,2)/// impicit return
console.log(rv);


const taku=(num1,num2)=>(num1+num2)
console.log( taku(2,5));/// explicit return