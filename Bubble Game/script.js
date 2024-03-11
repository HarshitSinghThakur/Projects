var timer = 30;
var score = 0;
var hitrn ; 


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
    
}


function runTimer(){
    var TimerInt = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(TimerInt);
           // document.querySelector("#pbtm").innerHTML = "";  // to make vacant screen when timer = 0
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
        
    },1000);
}


function makeBubble(){
    var clutter ="";
    
    for(var i=1; i<=80; i++){
    var rn =Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    //'' -> sinle tick -->> + we use plus to add dynamic value
    //`` -> backtick  -->> ${} we use dollar to add dynamic value inside

}

document.querySelector("#pbtm").innerHTML = clutter;

}


//dets --> details --> variable name
//target --> on which it is clicked

document.querySelector("#pbtm").addEventListener("click",function(dets) {
   // console.log(dets.target); //dets.target  --> gives whole div
   //  console.log(dets.target.textContent);   // gives only a clicked number in "string format"
   var clickednum = Number(dets.target.textContent);   //black text -->string  AND blue text --> Number
   
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }

});

getNewHit();
makeBubble();
runTimer();

