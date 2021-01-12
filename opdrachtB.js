var submitButton = document.getElementById("submitButton");

submitButton.onclick = submit;

function submit(){
	var numberInputField = document.getElementById("numberInput");
	var text = document.getElementById("text");

	var numberInput = numberInputField.value;
	text.innerText = numberInput;
	var numbers = [];

	for(var i = 0; i <= numberInput; i++){
		numbers.push(i);// Hier push ik de var i in de array, dus wat ingevoerd word bij mijn prompt genaamd question zet die in de array.
		document.write(numbers + "<br/>");	
		console.log(numbers);
	}
}




