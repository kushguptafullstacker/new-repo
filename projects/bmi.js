console.log("kush");
 const form=document.querySelector('form')
 console.log(form);
 form.addEventListener('submit',function(e){
    e.preventDefault()

 const weight=(parseInt(document.querySelector('#weight').value))
    
const height=(parseInt(document.querySelector('#height').value))

    if(height==="" || height<0 || isNaN(height)) {
        result.innerHTML=`tmkc no. shii bhr${height}`
     }
    
 })