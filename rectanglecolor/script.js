var rect= document.querySelector('#center')

rect.addEventListener("mousemove",function(details){
    // console.log("Hey")
   var rectangleLocation = (rect.getBoundingClientRect())
    // console.log(details)

    // mouse location = clientX(location of mouse) -  left
    var insideRectVal = (details.clientX - rectangleLocation.left)

    if(insideRectVal < rectangleLocation.width/2){
        // console.log(gsap.utils.mapRange(0, 250, 250, 0, 0))
        // console.log(gsap.utils.mapRange(inMin, InMax, outMin, OutMax, valueToMap))


        // insideRectVal gives current pos of mouse 

        var redcolor = (gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, insideRectVal));
        gsap.to(rect,{
            backgroundColor: `rgb(${redcolor},0 ,0)`,
            ease: Power4,
        })
    }
    else{
        
        var bluecolor = (gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, insideRectVal));
        gsap.to(rect,{
            backgroundColor: `rgb(0, 0 , ${bluecolor})`,
            ease: Power4,
        })
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})

