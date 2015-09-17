console.log("js loaded");

$(document).ready(function() {

	//THIS IS A PLUGIN THAT ANIMATES THE SLIDES WITH EASE


	//SECTION 1 STYLES TO CENTER THE HEADER IMG DEPENDING ON VIEWPORT

	//center header img
	document.getElementById("header-img").style.marginLeft = (window.innerWidth - 900) / 2 + "px";

	//center the growing bar gif
	document.getElementById("line-grow-dog-1").style.marginLeft = ((window.innerWidth - 900) / 2) + 105 + "px";
	document.getElementById("line-grow-dog-1w").style.marginLeft = ((window.innerWidth - 900) / 2) + 105 + "px";
	document.getElementById("line-grow-dog-2").style.marginLeft = ((window.innerWidth - 900) / 2) + 280 + "px";
	document.getElementById("line-grow-dog-2w").style.marginLeft = ((window.innerWidth - 900) / 2) + 280 + "px";
	document.getElementById("line-grow-dog-3").style.marginLeft = ((window.innerWidth - 900) / 2) + 470 + "px";
	document.getElementById("line-grow-dog-3w").style.marginLeft = ((window.innerWidth - 900) / 2) + 470 + "px";
	document.getElementById("line-grow-dog-4").style.marginLeft = ((window.innerWidth - 900) / 2) + 640 + "px";
	document.getElementById("line-grow-dog-4w").style.marginLeft = ((window.innerWidth - 900) / 2) + 640 + "px";
	document.getElementById("line-grow-dog-5").style.marginLeft = ((window.innerWidth - 900) / 2) + 800 + "px";
	document.getElementById("line-grow-dog-5w").style.marginLeft = ((window.innerWidth - 900) / 2) + 800 + "px";

	//center the text
	document.getElementById("first-animal-content").style.marginLeft = ((window.innerWidth - 900) / 2) + 110 + "px"; 
	document.getElementById("second-animal-content").style.marginLeft = ((window.innerWidth - 900) / 2) + 285 + "px"; 
	document.getElementById("third-animal-content").style.marginLeft = ((window.innerWidth - 900) / 2) + 475 + "px"; 
	document.getElementById("fourth-animal-content").style.marginLeft = ((window.innerWidth - 900) / 2) + 645 + "px"; 
	document.getElementById("fifth-animal-content").style.marginLeft = ((window.innerWidth - 900) / 2) + 805 + "px"; 

	$("#sec-2").on("mouseenter", function() { 	
		$(".graph-percentages").addClass("animateGraphs");	
		$("#bar1").addClass("growBarsI");
		$("#bar2").addClass("growBarsII");
		$("#bar3").addClass("growBarsIII");
		$("#bar4").addClass("growBarsIV");
		$("<img src='media/img/line-grow.gif'>").appendTo("#sec-2 .text-divider");
	});

	$("#sec-2").on("mouseleave", function(){
		$(".sec-2-content img").remove();
	});

	$("#sec-3").on("mouseenter", function(){
		$("<img src='media/img/gold-text-divider.gif'>").appendTo("#sec-3 .text-divider");
	});

	$("#sec-3").on("mouseleave", function(){
		$("#sec-3 .text-divider img").remove();
	});

	$("#sec-4").on("mouseenter", function() {
		$("img.flying-dog").addClass("dogAnimation");
		$("img.frisbee").addClass("frisbeeAnimation");
		$("<img src='media/img/text-divider-teal.gif'>").appendTo("#sec-4 .text-divider");
	});

	$("#sec-4").on("mouseleave", function(){
		$("#sec-4 .text-divider img").remove();
	});


});