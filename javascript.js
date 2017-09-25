currentQuestion = 0;
score=0;
totQuestion = question.length;
questionEl = document.getElementById("question");
opt1 = document.getElementById('opt1');
opt2 = document.getElementById("opt2");
opt3 = document.getElementById("opt3");
opt4 = document.getElementById("opt4");
nextButton = document.getElementById("nextButton");
qcontainer =  document.getElementsByClassName("questionContainer");
resutContainer = document.getElementById("result");
function loadQuestion(questionIndex){
	q = question[questionIndex];
	document.getElementById("question").textContent = (questionIndex +1) + ". " + q.question;
	document.getElementById('opt1').textContent = q.option1;
	document.getElementById('opt2').textContent = q.option2;
	document.getElementById('opt3').textContent = q.option3;
	document.getElementById('opt4').textContent = q.option4;
	
}

function loadNextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
if(!selectedOption){
	alert('please select your answer');
	return;
}	
var answer = selectedOption.value;
if(question[currentQuestion].answer==answer){
	score+=1;
}
	selectedOption.checked = false; 
	currentQuestion++;
	if(currentQuestion !=totQuestion){
		loadQuestion(currentQuestion);
	}
	if(currentQuestion==totQuestion-1){
		nextButton.textContent = "Finish";
	}
	if(currentQuestion==totQuestion){
		document.getElementById("questionContainer").style.display = "none";
		resutContainer.style.display = 'block';
		document.getElementById("score").textContent = 'your score is \n ';
		document.getElementById("score1").textContent = score;
		return;
		
	}
};
loadQuestion(currentQuestion);