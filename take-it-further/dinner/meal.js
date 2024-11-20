make.addEventListener("click",function(){
	const main = Math.floor(Math.random() * 10) +1; //numbers from 1 to 10;
	const side = Math.floor(Math.random() * 7) +1; //numbers from 0 to 7;
	const dessert = Math.floor(Math.random() * 5) +1; //numbers from 0 to 5;
	
	let mainDish="";
	let sideDish="";
	let dessertDish="";
	
	if(main==1){
		mainDish="Chicken Alfredo Pasta";
	}
	else if(main==2){
		mainDish="Beef Stir-Fry";
	}
	else if(main==3){
		mainDish="Salmon with Lemon-Dill Sauce";
	}
	else if(main==4){
		mainDish="Vegetarian Stir-Fried Rice";
	}
	else if(main==5){
		mainDish="Shrimp Scampi";
	}
	else if(main==6){
		mainDish="Tacos al Pastor";
	}
	else if(main==7){
		mainDish="Stuffed Bell Peppers";
	}
	else if(main==8){
		mainDish="Spaghetti Bolognese";
	}
	else if(main==9){
		mainDish="Roast Chicken with Vegetables";
	}
	else if(main==10){
		mainDish="Vegan Buddha Bowl";
	}
	
	
	//Sides
	if(side==1){
		sideDish="Garlic Mashed Potatoes";
	}
	else if(side==2){
		sideDish="Roasted Brussels Sprouts";
	}
	else if(side==3){
		sideDish="Caesar Salad";
	}
	else if(side==4){
		sideDish="Grilled Asparagus";
	}
	else if(side==5){
		sideDish="Honey-Glazed Carrots";
	}
	else if(side==6){
		sideDish="Baked Macaroni and Cheese";
	}
	else if(side==7){
		sideDish="Garlic Bread";
	}
	
	if(dessert==1){
		dessertDish="Cheesecake";
	}
	else if(dessert==2){
		dessertDish="Chocolate Lava Cake";
	}
	else if(dessert==3){
		dessertDish="Apple Crisp";
	}
	else if(dessert==4){
		dessertDish="Lemon Bars";
	}
	else if(dessert==5){
		dessertDish="Tiramisu";
	}
	
	console.log(main);
	console.log(side);
	console.log(dessert);
	
	
	output.innerHTML = "Tonight for dinner will be "+mainDish +" with a side of "+sideDish+" and "+dessertDish+" for dessert.";
	make.innerHTML = "New Meal?"
});