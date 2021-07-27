MouseEvent="empty";
var lastpositoinX,lastpositoinY
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black"
widthoftheline=1
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
  color=document.getElementById("color").value;
  widthoftheline=document.getElementById("widthoftheline").value;
  MouseEvent="mouseDown"
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  cpX=e.clientX-canvas.offSetLeft
  cxY=e.clinetY-canvas.offSetTop
  if (MouseEvent=="mousedown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthoftheline;
    console.log("Last position of x and y coordinates = "); console.log("x = " + lastpositoinX + "y = " + lastpositoinY);
    ctx.moveTo(lastpositoinX,lastpositoinY);
    console.log("current position of x and y coordinates = "); console.log("x = " + cpX + "y = " + cxY);    
    ctx.stroke();
  }
  lastpositoinX=cpX 
  lastpositoinY=cxY
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
  MouseEvent="mouseUp"
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
  MouseEvent="mouseleave"
}
function cleararea(){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}