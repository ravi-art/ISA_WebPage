// JavaScript Document
function btnUniv(){
		document.getElementById("isaTxt").style.display="none";
		document.getElementById("univTxt").style.display="block";
		
	
	}
function btnIsa(){
		document.getElementById("univTxt").style.display="none";
		document.getElementById("isaTxt").style.display="block";
		
	}
function slide(){
	var slides = document.getElementById("myimage");
	if (slides.src.match("col1")) {
        slides.src = "col2.jpg";
    } else {
        slides.src = "col1.jpg";
    }
	/*for(var i=1; i<3;i++){
		slides.style.backgroundImage="url(col1.jpg)";
		}*/
		setTimeout(slide, 5000);
	}
slide();