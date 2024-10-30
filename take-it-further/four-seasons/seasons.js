autumn.addEventListener('click',function(){
	pagetitle.innerHTML = "Autumn";
	console.log("autumn");
	document.body.classList.remove("spring");
	document.body.classList.remove("summer");
	document.body.classList.remove("winter");
	document.body.classList.add('autumn');
	document.getElementById('banner').src="autumn.webp";
	document.getElementById('banner').alt="yellow autumn leaves falling on a wooden deck";
})

spring.addEventListener('click',function(){
	pagetitle.innerHTML = "Spring";
	console.log("spring");
	document.body.classList.remove("autumn");
	document.body.classList.remove("summer");
	document.body.classList.remove("winter");
	document.body.classList.add('spring');
	document.getElementById('banner').src="spring.webp";
	document.getElementById('banner').alt="pink cherry blossom flowers on a branch";
})

summer.addEventListener('click',function(){
	pagetitle.innerHTML = "Summer";
	console.log("summer");
	document.body.classList.remove("spring");
	document.body.classList.remove("autumn");
	document.body.classList.remove("winter");
	document.body.classList.add('summer');
	document.getElementById('banner').src="summer.webp";
	document.getElementById('banner').alt="sandals a beach towel and sunglasses laying on the sand";
})
winter.addEventListener('click',function(){
	pagetitle.innerHTML = "Winter";
	console.log("winter");
	document.body.classList.remove("spring");
	document.body.classList.remove("summer");
	document.body.classList.remove("autumn");
	document.body.classList.add('winter');
	document.getElementById('banner').src="winter.webp";
	document.getElementById('banner').alt="A wintery path with snow on the trees and ground";
})
