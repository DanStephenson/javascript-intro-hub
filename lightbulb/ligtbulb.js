//Show a message when the button with the ID 'secret' is pressed
		secret.addEventListener('click',function(){
			console.log("Hello");
			alert("Bird is the word");
		})
		
		//When the button with the ID of 'bulb_on' is pressed, change the image's src
		bulb_on.addEventListener('click',function(){
			console.log("let there be light");
			document.getElementById('lightbulb').src = "lightbulb_on.webp";
			document.getElementById('bulb_on').style.display="none";
			document.getElementById('bulb_off').style.display="initial";
			
			//Set the colour scheme to the lights being on
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
		})
		bulb_off.addEventListener('click',function(){
			console.log("let there be darkness");
			document.getElementById('lightbulb').src = "lightbulb_off.webp";
			document.getElementById('bulb_on').style.display="initial";
			document.getElementById('bulb_off').style.display="none";
			
			//Set the colour to the lughts being off
			document.body.style.backgroundColor = "black";
			document.body.style.color = "#333";
		})