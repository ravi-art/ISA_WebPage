// JavaScript Document
function btnUniv() {
    'use strict'; 
    document.getElementById("isaTxt").style.display = "none";
    document.getElementById("univTxt").style.display = "block";
}
function btnIsa() {
    document.getElementById("univTxt").style.display = "none";
    document.getElementById("isaTxt").style.display = "block";
		
}
function slide() {
    var slides = document.getElementById("myimage");
    if (slides.src.match("col1")) {
		
        slides.src = "col2.jpg";
		$("#myimage").fadeIn()
    } else if (slides.src.match("col2")) {
        slides.src = "col3.jpg";
		$("#myimage").fadeIn()
    } else {
		
        slides.src = "col1.jpg";
		$("#myimage").fadeIn()
    } 
    
	setTimeout(slide, 5000);
	$("#myimage").fadeOut(5000)
	}
slide();

function change(getId) {
	var idToChange = document.getElementById(getId);
    var slides = document.getElementById("myimage");
	if (getId == "changeImgPrev") {
	if (slides.src.match("col1") ) {
        slides.src = "col3.jpg";
    } else if (slides.src.match("col2")) {
        slides.src = "col1.jpg";
    } else {
        slides.src = "col2.jpg";
    }
	}
	if (getId == "changeImgNext") {
	if (slides.src.match("col1")) {
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
		$("#myimage").animate({width: '100%', opacity: '1'}, "slow");
        slides.src = "col2.jpg";
    } else if (slides.src.match("col2")) {
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");
		$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
        slides.src = "col3.jpg";
        } else { 
		/*$("#myimage").animate({
          height: 'toggle'
        },"slow");
		$("#myimage").animate({
          height: 'toggle'
        },"slow");*/
        slides.src = "col1.jpg";
    }
	}
	}
/*function tab(){
	$("#tab1").append('<tr><td><a class="clRow">Touch Me</a></td><td>Do not touch me</td></tr>');
	var className =	document.getElementsByClassName("clRow");
	//$(".clRow").click(handler);
	for(var i = 0;i<className.length;i++){
			className[i].addEventListener('click',handler, false);

	}
}
function handler(){
	alert("You got me");
	}
tab();*/