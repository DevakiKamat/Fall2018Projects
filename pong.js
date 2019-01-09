var x;
var y;
var posX=0;
var posY=0;
var dx=2;
var dy=3;
var Strikes =0;
var rstrikes;
var maxscore=0;
var court;
var elem;
var bat;



function initialize()
{
  this.x=x;
  this.y=y;
  this.elem=elem;
  this.court=court;
  this.bat=bat;
}


function myMove() {
  court=document.getElementById("container");
  elem=document.getElementById("animate");
  bat=document.getElementById("paddle");
  var id = setInterval(fun, 30);
  function fun() {

    if(posY > 480)
{
    dy=-3;
    posY+=dy;
    elem.style.top = posY + 'px';
}
else if(posY <2)
{
dy=+3;
    posY+=dy;
    elem.style.top = posY + 'px';
}
else if(posX>780)
{
    dx=-2;
    posX+=dx;
    elem.style.left = posX + 'px';
    alert("Game Over");
    document.getElementById("score").innerHTML=  Strikes;

}
else if(posX < 2)
{
dx=+2;
posX+=dx;
elem.style.left = posX + 'px';

}
else if(posX==750 & ((elem.getBoundingClientRect().top)>(bat.getBoundingClientRect().top)))
{
dx=-2;
posX+=dx;
elem.style.left = posX + 'px';
document.getElementById("strikes").innerHTML= ++Strikes;
rstrikes=Strikes;
}
else
{
      posX+=dx;
      posY+=dy;
      elem.style.top = posY + 'px'; 
      elem.style.left = posX + 'px';
      
}
    
     
    } 
}


function move(event)
{
bat=document.getElementById("paddle");
x=event.clientX;
y=event.clientY;
bat.style.top=y+'px';
}

function resetGame()
{
   document.getElementById("strikes").innerHTML= Strikes;
   Strikes=0;
}

/*function setSpeed()
{
  if(document.getElementById("slow").checked)
  {
    dx=3;
    dy=4;
  }
  else if(document.getElementById("medium").checked)
  {
    dx=4;
    dy=5;
  }
  else if(document.getElementById("fast").checked)
  {
    dx=5;
    dy=6;
  }
}*/




    

    



