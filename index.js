 var con = document.querySelector(".container")
 var cur = document.querySelector(".cur")
 var h1  =document.querySelector("h1")
 con.addEventListener("mousemove",function(dets){
    cur.style.left = dets.x+"px"
    cur.style.top = dets.y+"px"
 })
 h1.addEventListener("mouseenter",function(){
   cur.style.scale = 3
   
 })
 h1.addEventListener("mouseleave",function(){
  cur.style.scale = 1
 })