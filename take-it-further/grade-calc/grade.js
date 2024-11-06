let grade = 80;
let letter = "";

function calculate(){
	if(grade < 50){
	letter = "F";
	}
	else if(grade < 55){
		letter = "D";
	}
	else if(grade < 60){
		letter = "D+";
	}
	else if(grade < 63){
		letter = "C-";
	}
	else if(grade < 67){
		letter = "C";
	}
	else if(grade < 70){
		letter = "C+";
	}
	else if(grade < 73){
		letter = "B-";
	}
	else if(grade < 77){
		letter = "B";
	}
	else if(grade < 80){
		letter = "B+";
	}
	else if(grade < 85){
		letter = "A-";
	}
	else if(grade < 90){
		letter = "A";
	}
	else if(grade < 100){
		letter = "A";
	}
	showgrade.innerHTML = grade;
	showletter.innerHTML = letter;
}
calculate();

getgrade.addEventListener('click',function(){
	grade = document.getElementById('inputgrade').value;
	calculate();
});