let choice = "";
		
		weather.addEventListener("change",function(){
			choice = document.getElementById('weather').value;
			console.log(choice);
			
			if(choice == "sunny"){
				output.innerHTML = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
			}
			if(choice == "rainy"){
				output.innerHTML = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
			}
			if(choice == "snowing"){
				output.innerHTML = "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
			}
			if(choice == "overcast"){
				output.innerHTML = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
			}
			if(choice==""){
				output.innerHTML = "";
			}
		});
		
		
		bg.addEventListener('event',function(){
				//input event allows this to change in realtime
                console.log("Background "+bg.value);
                document.body.style.backgroundColor = bg.value;
            })

            text.addEventListener('change',function(){
                console.log("Text "+text.value);
                document.body.style.color = text.value;
            })