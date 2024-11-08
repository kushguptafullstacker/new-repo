
let button=document.querySelectorAll('.button')
// console.log(button);
let body=document.querySelector('body')
// console.log(body);
button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        switch(e.target .id){
            case 'green':
            body.style.backgroundColor=('green');
            break;
            case 'blue':
                body.style.backgroundColor=('blue');
                break;
                case 'white':
                    body.style.backgroundColor=('white');
                    break;
                    case 'grey':
                        body.style.backgroundColor=('grey')
        }

    })
      
})
