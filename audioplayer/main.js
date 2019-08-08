var play=document.getElementById("play")
var stop=document.getElementById("stop")
var canvas=document.getElementById("mycanvas")
var settime=document.querySelector(".settime")
var audio=document.getElementById("myaudio")
var current=document.getElementById("current")
var volume=document.getElementById("volume")
var next =document.getElementById("next")
var prev =document.getElementById("prev")
var active=document.querySelectorAll("audio")
var after = document.querySelector(".after")

console.log(current.style)
var ctx=canvas.getContext("2d")

var mainx;
ctx.moveTo(0,0)
var grd = ctx.createLinearGradient(100,100,300,0);
grd.addColorStop(0,"magenta");
grd.addColorStop(0.5,"blue")
grd.addColorStop(1,"red")

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(50,50,400,300)


// Fill with gradient
ctx.fillStyle ="#ffffff96";
ctx.fillRect(56,75,388,250)
play.addEventListener("click", function(){
    if(audio.paused){
        audio.play()
        play.innerHTML=  " <i class='fas fa-pause'></i>"
        

    }
    else{
        audio.pause()
        play.innerHTML="<i class='fas fa-play'></i>" 
    }

})
var audios=[]
for(var i=0;i<active.length;i++){
   audios.push(active[i])
}
var count=0;


next.addEventListener("click", function(e){
    console.log($(audios[0]).attr("src"))
   
  count++




        if(count>audios.length){
         count=0
          
          
        }
        $(audio).attr("src",  $(audios[count]).attr("src"))


    audioText()

 

     play.innerHTML=" <i class='fas fa-pause'></i>"

    audio.play()

if($(play).html()=="<i class='fas fa-pause'></i>" ){

    console.log("kjd")
    
}
    
   
 })

 prev.addEventListener("click", function(){
   



    // console.log(count+6)
    
   
        if(count<1){
           
         
          
            console.log(count,"1")
   
        }
        count--
        $(audio).attr("src",  $(audios[count]).attr("src"))
      
        audio.play()
        // $(audios[count]).attr("src", "")

  
   
 })


 audioText()

 function audioText(){
 $(".srctext").html($(audio).attr("src"))
    
//     ctx.fillStyle="black"
//     ctx.font="20px Times new Roman"
//    ctx.fillText(srcSpan, 130,100,300)

   
   
//    srcSpan=""
   
 }




volume.addEventListener("change", function(){
    audio.volume=this.value/100
  
    console.log(filename)
    console.log(audio.volume)
})
audio.addEventListener("canplay", function(){
   
 
    current.max = audio.duration
   

   
})

current.addEventListener("change",function(){
    audio.currentTime=current.value
})
// settime.style.width=audio.max+"px"
audio.addEventListener("timeupdate", function(e){
    // console.log(audio.currentTime/, current.value)

    // ctx.fillStyle = "#FF0000";
current.value=audio.currentTime

})


setInterval(function(){
    
    var minute=0;
    var second=0   
    second+=1 //parseInt(audio.currentTime)
 if(second==60){
    minute++
   
    second=00
    

 }
// for(var t=0;t<59;t++){
//     setInterval(function(){
//         console.log(t)
//     },1000)
// }



},1000)
