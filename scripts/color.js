window.onload = myInit();

function myInit()
{  
    //alert("inside myInit Function");
    myDisplay();
}
function myDisplay()
{
    console.log("My display Function");
    alert("inside myDisplay Function");
    var cvs = document.getElementById('mycanvas');
    var ctx = cvs.getContext('2d');
    var rect ={
        x:0,
        y:0,
        width:200,
        height:120
    };
function isInside(mouse_pos,rect)
{
    return mouse_pos.x>rect.x && mouse_pos.x<rect.x+rect.width && mouse_pos.y<rect.y+rect.height && mouse_pos.y>rect.y;
}
function getMousePos(canvas ,event)
{
    var rect=canvas.getBoundingClientRect();
    return{
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
cvs.addEventListener('click',function(evt)
{
    var mousepos=getMousePos(cvs,evt);
    if(isInside(mousepos,rect))
    {
        alert('Clicked Inside rect');
    }
    else{
        alert('Clicked outside rect');
    }
},false)

const path = new Path2D
path.rect(0,0,200,120);
path.rect(50,72,32,32);
path.closePath();

ctx.fillStyle="#FFFFFF"
ctx.fillStyle="rgha(225,225,225,0.5)"
ctx.fill(path)
ctx.lineWidth=
ctx.strokeStyle="#oooooo"
ctx.stroke(path)


}