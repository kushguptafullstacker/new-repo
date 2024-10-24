console.log("kush");

const arr=[10,9,8,76,3]
for(let mall of arr){
    console.log(mall);
}

const greeting="hello world"

for(let peek of greeting){
    
    console.log(`hii everyone ${peek}`);
}

const kush={
    mynmae:"kuhs",
    myage:18
}

// for(let mal of kush){
//     console.log(mal);
// }//////////object is not iterable do for of loop not working on it 


for(let mal in kush){
    console.log(`${mal} hiiii this is the value ${kush[mal]}`);
}

// for (let mall in arr){
//     console.log(arr[mall]);
// }

// arr.forEach(function (item){
//     console.log(item);

// })

// kush.forEach ( (val) =>{
//   console.log(val);
// })/////////foreach loop is work only on the araay 

const khushi=[
    {
        firsboyfriend:"aaditya"
    },
    {
        secondbnda:"kush"
    }
]
khushi.forEach((ll)=>{
    console.log(ll.secondbnda);
})//// foreachloop only work on the array forin loop work on arraya nd object for of loop work on the array 