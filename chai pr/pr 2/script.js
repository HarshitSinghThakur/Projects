const sayDate = function(str){
    console.log(str,Date.now());
}

// const intervalId =  setInterval(function(){
//     console.log("hitesh", Date.now())
// },1000)

// or 
// const intervalID = setInterval(sayDate, 1000, "hi")


// clearInterval(intervalID)


//Asiisgnment excute this project by clicking the buttons

let intervalID;

document.querySelector('#start').addEventListener('click', function(){
     intervalID = setInterval(sayDate, 1000, "hi")
     console.log("done")
})

// to stop

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalID)
})