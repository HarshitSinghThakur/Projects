//setTimeout/ setInterval /clearTimeout/ clearInterval  --- are functions but they are part of the browser,, 

// to check -- window and then find these

// setTimeout(function(){
//     console.log("Heii ")
// },3000)

//or 

const sayhii = function(){
        console.log("Heii ")
         }

const changeH1 = function(){
    document.querySelector('h1').innerHTML = "Ho gya change"
}

const changeMe =    setTimeout(sayhii,3000)

setTimeout(changeH1,3000)


// ClearTimeout -- needs reference

// clearTimeout(changeMe)
//or

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log("Stopped")
})
