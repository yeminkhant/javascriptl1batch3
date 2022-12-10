var getcaritms = document.getElementsByClassName('carousel-item');
// console.log(getcaritms[1]);
var getdots = document.querySelectorAll('.dot');

var currslide = 1;


// document.getElementById('prev').addEventListener('click',function(){
// 	carousel(currslide -= 1);
// });

// document.getElementById('next').addEventListener('click',function(){
// 	carousel(currslide += 1);
// });

document.getElementById('prev').addEventListener('click',function(){
	if(currslide == 1){
		currslide = 3;
		carousel(currslide);
	}else if(currslide == 2){
		currslide = 1;
		carousel(currslide);
	}else if(currslide == 3){
		currslide = 2;
		carousel(currslide);
	}
});

document.getElementById('next').addEventListener('click',function(){
	if(currslide == 1){
		currslide = 2;
		carousel(currslide);
	}else if(currslide == 2){
		currslide = 3;
		carousel(currslide);
	}else if(currslide == 3){
		currslide = 1;
		carousel(currslide);
	}
});

// if(currslide == 1){
// 	document.getElementById('prev').addEventListener('click',function(){
// 		currslide -= 1;
// 		carousel(currslide);
// 	});

// 	document.getElementById('next').addEventListener('click',function(){
// 		currslide += 1;
// 		carousel(currslide);
// 	});
// }else if(currslide == 2){
// 	document.getElementById('prev').addEventListener('click',function(){
// 		currslide -= 1;
// 		carousel(currslide);
// 	});

// 	document.getElementById('next').addEventListener('click',function(){
// 		currslide += 1;
// 		carousel(currslide);
// 	});

// }else if(currslide == 3){
// 	document.getElementById('prev').addEventListener('click',function(){
// 		currslide -= 1;
// 		carousel(currslide);
// 	});

// 	document.getElementById('next').addEventListener('click',function(){
// 		currslide += 1;
// 	carousel(currslide);
// 	});
// }

// document.getElementById('prev').addEventListener('click',function(){
// 	carousel(currslide -= 1);
// });

// document.getElementById('next').addEventListener('click',function(){
// 	carousel(currslide += 1);
// });

for(var x = 0; x < getdots.length; x++){

	getdots[x].addEventListener('click',function(){
		// console.log(this.getAttribute('data-bs-slide-to'));

		currslide = this.getAttribute('data-bs-slide-to');
		carousel(currslide);
	});

}

carousel(currslide);

function carousel(slidenum){

	for(let y = 0; y < getcaritms.length; y++){

		getcaritms[y].style.display = "none";

		getdots[y].classList.remove("active");

	}

	// if(slidenum > getcaritms.length){
	// 	currslide = 1;
	// }else if(slidenum < 1){
	// 	currslide = getcaritms.length;
	// }

	// if(slidenum == 1){
	// 	document.getElementById('prev').addEventListener('click',function(){
	// 		currslide = 3;
	// 		carousel(currslide);
	// 	});

	// 	document.getElementById('next').addEventListener('click',function(){
	// 		currslide = 2;
	// 		carousel(currslide);
	// 	});
	// }else if(slidenum == 2){
	// 	document.getElementById('prev').addEventListener('click',function(){
	// 		currslide = 1;
	// 		carousel(currslide);
	// 	});

	// 	document.getElementById('next').addEventListener('click',function(){
	// 		currslide = 3;
	// 		carousel(currslide);
	// 	});

	// }else if(slidenum == 3){
	// 	document.getElementById('prev').addEventListener('click',function(){
	// 		currslide = 2;
	// 		carousel(currslide);
	// 	});

	// 	document.getElementById('next').addEventListener('click',function(){
	// 		currslide = 1;
	// 		carousel(currslide);
	// 	});
	// }

	// console.log(currslide);

	getcaritms[currslide-1].style.display = "block";

	getdots[currslide-1].className += " active";

}