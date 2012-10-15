// JavaScript Document
function init(){
	setInterval(increase,500);
	
}
function increase(){
	document.f.secs.value=String(1+Number(document.f.secs.value));	
}