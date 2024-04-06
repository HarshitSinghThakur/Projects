// generate a random color


const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

// console.log(randomColor())
let interValID ;
const startChangingColor = function(){


//TO remove Bugs and problems

// if(!interValID){
//     interValID =  setInterval(changebgColor,1000)
//      }


   
   interValID =  setInterval(changebgColor,1000)
    
    function changebgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function(){
    clearInterval(interValID)
    interValID = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)



//-----------NOTES---------------------

// Mul 16 to get value upto 16
// not adding 1 coz we want 0 in our random no
// use floor to remove the decimal  it gives upper val
// ceiling is also used for lower vals
// console.log(Math.floor(Math.random()*16))