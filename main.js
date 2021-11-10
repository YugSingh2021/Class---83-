canvas=documentgetElementById("myCanvas")

var MouseEvent="";
var last_position_of_x,last_position_of_y;
ctx=canvas.getContext("2d");
color = "red";
width_of_line = 15;
canvas.addEventListener("mousedown",mymousedown())
function mymousedown(){
mouseEvent = mousedown;

}
canvas.addEventListener("mousemove",mymousemove())
function mymousemove(e){
current_position_of_mouse_x = e.clientX-canvas.offsetLeft;
current_position_of_mouse_y = e.clientY-canvas.offsetTop;
if (mouseEvent == mouseDown){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth= width_of_line;
    ctx.moveTo(last_position_of_x,last_position_of_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y)
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x
last_position_of_y = current_position_of_mouse_y
}

