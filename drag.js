var a=Math.floor(Math.random()*3)+1;
var b=Math.floor(Math.random()*3)+1;
var c=Math.floor(Math.random()*3)+1;
var image1="img"+ a +".png";
var image2="img"+ b +".png";
var image3="img"+ c +".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);
document.querySelectorAll("img")[2].setAttribute("src",image3);
if(a===b && b===c)
{
    document.querySelector("h1").innerHTML="YOU WON! HAD A GREAT LUCK";
}
else
{
    document.querySelector("h1").innerHTML="BETTER LUCK NEXT TIME BUDDY!";
}