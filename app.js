var redColor=document.getElementById("red");
var yellowColor=document.getElementById("yellow");
var greenColor=document.getElementById("green");
var carimg=document.getElementById("car")
var count =0
var bol=false
var inter;
function redsig(){
redColor.style.backgroundColor="red";
yellowColor.style.backgroundColor="";
greenColor.style.backgroundColor="";
clearInterval(inter)
count=0




}

function yellowsig(){
    yellowColor.style.backgroundColor="yellow";
    redColor.style.backgroundColor="";
    greenColor.style.backgroundColor="";
     
}

function greensig(){
    greenColor.style.backgroundColor="green";
    yellowColor.style.backgroundColor="";
    redColor.style.backgroundColor="";
    bol=true

    if(bol===true){
       inter= setInterval(car,50)
    }
}
function car(){
    count+=10;
carimg.style.marginLeft=count+"px"
}