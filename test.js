// JavaScript Document

function init(){
	var ctx=document.getElementById("canvas").getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle="rgb(200,0,0)";
	ctx.arc(200,200,50,Math.PI,false);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}