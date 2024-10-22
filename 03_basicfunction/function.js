console.log("kush");
function helloworld(){
    console.log(2+2);

}
helloworld()

function hiiwortld(number1 , number2){
    console.log(number1+number2);
}
hiiwortld(10,20)


function hllooo(number1,number2){
   return number1+number2
}
let rv=hllooo(10,20)
console.log(rv);


function kush(num1,num2){
    let kuish=num1+num2
    return kuish
}
const kuish=kush(20+40) 
console.log(kuish);    //// give nan


function chirag(username){
    if(username==undefined){
        console.log(" i am not a user");
        return

    }
    else{
        console.log("hii i am a user");
        
    }
    return`${username} hii i am a user`
}
let rcv=chirag()
console.log(rcv);

function lll(val1,val2,...num1){
    return num1

}
let rcev=lll(100,200,3000,40000,500)
console.log(rcev); 


const lastname={
    username:"chirag",
    age:21,
}
function object1(object){
    console.log(`${object.username}hii my name and my age ${object.age}my age is`);
}
object1(lastname)/// how to write function for object

/////////////how to write array

const tei=[11,22,34,5,6,3,35]
function getarray(arru){
    return getarray[3]
}
console.log(getarray(tei));