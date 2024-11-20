<script>
			ask.addEventListener("click",function(){
				response.classList.add('shakeit');
				let rand = Math.random();
				//rand = Math.random() * 11; //numbers from 0 to 10
				rand = Math.floor(Math.random() * 11); //numbers from 0 to 10
				//rand = Math.floor(Math.random() * 10) +1; //numbers from 1 to 10
				console.log(rand);
				
				//There were originally 21 responses - https://magic-8ball.com/magic-8-ball-answers/
				
				//Positive responses
				if(rand==0){
					response.innerHTML="It is certain";
				}
				else if(rand==1){
					response.innerHTML="It is decidedly so";
				}
				else if(rand==2){
					response.innerHTML="Yes definitely";
				}
				else if(rand==3){
					response.innerHTML="You may rely on it";
				}
				
				//Non-commital responses
				else if(rand==4){
					response.innerHTML="Reply hazy, try again";
				}
				else if(rand==5){
					response.innerHTML="Ask again later";
				}
				else if(rand==6){
					response.innerHTML="Better not tell you now";
				}
				
				//Negative responses
				else if(rand==7){
					response.innerHTML="Don’t count on it";
				}
				else if(rand==8){
					response.innerHTML="My reply is no";
				}
				else if(rand==9){
					response.innerHTML="My sources say no";
				}
				else if(rand==10){
					response.innerHTML="Outlook not so good";
				}
				
				ask.innerText="Ask Again?";
			})
		</script>