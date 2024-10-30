autumn.addEventListener('click',function(){
	pagetitle.innerHTML = "Autumn";
	console.log("autumn");
	document.body.classList.remove("spring");
	document.body.classList.remove("summer");
	document.body.classList.remove("winter");
	document.body.classList.add('autumn');
	document.getElementById('banner').src="autumn.webp";
	//document.getElementById('lightbulb').src = "lightbulb_on.webp";
})

spring.addEventListener('click',function(){
	pagetitle.innerHTML = "Spring";
	console.log("spring");
	document.body.classList.remove("autumn");
	document.body.classList.remove("summer");
	document.body.classList.remove("winter");
	document.body.classList.add('spring');
	document.getElementById('banner').src="spring.webp";
})

summer.addEventListener('click',function(){
	pagetitle.innerHTML = "Summer";
	console.log("summer");
	document.body.classList.remove("spring");
	document.body.classList.remove("autumn");
	document.body.classList.remove("winter");
	document.body.classList.add('summer');
	document.getElementById('banner').src="summer.webp";
})
winter.addEventListener('click',function(){
	pagetitle.innerHTML = "Winter";
	console.log("winter");
	document.body.classList.remove("spring");
	document.body.classList.remove("summer");
	document.body.classList.remove("autumn");
	document.body.classList.add('winter');
	document.getElementById('banner').src="winter.webp";
	
})
