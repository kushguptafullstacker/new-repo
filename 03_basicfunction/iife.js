

/////IIFE SYANDS FRO ===IMMEDIATELY INVOKED FUNCTION____ global scope se pollution nhi chahiye esliye block scope like function m likhte hbn  
/// and for immediately execute

(function SAYMYNAME(){
    console.log("hello world ");
})();/// for immediately invoked we give brackets on function and immeditaley execute
 (()=>{
    console.log("bii world");
 })();/// this is not run because we dont use  ; this on above function for stop the code but wehn we ;use this then our code will run 

 ((name)=>{
        console.log(`hii my nmae is${name}`)
 })("kuah")//// in the paramter how we do iife 