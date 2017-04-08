var slider_initial = 1;
var slider_next = 2;

$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	startSlider();
	
	
	//stops looping on hover
	
	$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
);
});


// the actual slider function

function startSlider() {
	
count = +$('#slider > img').length;

	
loop = setInterval(function(){
	
if (slider_next > count) {
	slider_next = 1;
	slider_initial = 1;	
}
		$('#slider > img').fadeOut(300);
		$('#slider > img#' + slider_next).fadeIn(300);
		
		slider_initial = slider_next;
		slider_next = slider_next + 1;
		
	}, 3000)
	
	
}

// previous slide button

function prev(){
	new_slide = slider_initial - 1;
	showSlide(new_slide);
}



//next slide button

function next(){
	new_slide = slider_initial + 1;
	showSlide(new_slide)	
}



// this function stops the looping of the slider

function stopLoop(){
	window.clearInterval(loop);
	
}


//function showing next or previous slides

function showSlide(id){
	stopLoop();
	if (id > count) {
	id = 1;
		
} else if (id < 1) {
	id = count;
}
		$('#slider > img').fadeOut(300);
		$('#slider > img#' + id).fadeIn(300);
		
		slider_initial = id;
		slider_next = id + 1;
		startSlider()	
}
