var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');
var getbtnregister = document.querySelector('.btn');

getbtnregister.addEventListener('click',function(e){
	e.preventDefault();
});

getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = "block";
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.display = "none";
});

window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = "none";
	}
}


var getde = document.documentElement;
// console.log(getde);

getbtnfullscreen.addEventListener('click',function(e){

	e.preventDefault();

	localStorage.setItem("fullscreen",1);

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullscreen){
		getde.msRequestFullscreen();
	}else if(getde.webkitRequestFullscreen){
		getde.webkitRequestFullscreen();
	}

	getbtnclosescreen.style.display = "inline-block";

});


getbtnclosescreen.addEventListener('click',function(){

	localStorage.removeItem("fullscreen");

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}


	getbtnclosescreen.style.display = "none";

});


checkfullscreen();

function checkfullscreen(){

	var getfullscreen = localStorage.getItem("fullscreen");
	console.log(getfullscreen);

	if(Number(getfullscreen) === 1){

		// document.onkeydown = function(e){
		// 	if(e.keyCode == 116){
		// 		e.preventDefault();
		// 	}
		// }

		document.addEventListener("keydown",function(e){
			e.preventDefault();
		});

	}

}