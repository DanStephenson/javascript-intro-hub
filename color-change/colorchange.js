backgroundcolor.addEventListener('change',function(){
	console.log("background: "+event.target.value);
	document.body.style.backgroundColor = event.target.value;
})
textcolor.addEventListener('change',function(){
	document.body.style.color = event.target.value;
})