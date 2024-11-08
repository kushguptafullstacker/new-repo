// const hello=function(str){
//     console.log(str,"anamika ");
// }

// setInterval(hello,4000,"hii")

const randomcolor=function(){
    let hexvalue="0123456789ABCDEF"
  let color= "#"
  for(let i=0;i<6;i++){
     color+=hexvalue[Math.floor((Math.random())*16)]
  }
  return color
}
let startchangingcolor=function(){
      setInterval(changethecolor,1000);
      function changethecolor(){
        document.body.style.backgroundColor=randomcolor 
     }
}
 document.querySelector('#start'  ).addEventListener('click', startchangingcolor)