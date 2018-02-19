//grabs the html div with the id of submit, and adds 
//a click event listener to it
document.getElementById('submit').addEventListener('click', function() {
	//grabs the value of the input with id num1
	var number1 = Number(document.getElementById('num1').value);
	//grabs the value of the input with id num2
	var number2 = Number(document.getElementById('num2').value);
	//grabs the value of the input with id operation
	var operation = document.getElementById('operation').value;
	//grabs the div with the id answer
	var answer = document.getElementById('answer');
	//this is a conditional check to see if operation is 
	//equal to the string 'add'.  If true, the code inside
	//the brackets will be run, if false, it will be skipped
	//over.  your challenge is to finish the code.
	if (operation === 'add') {
			//this will add a value to the div 
			answer.innerHTML = // write your code here
			reset();
			return;
	}
	if (operation === 'subtract') {
			//this will add a value to the div 
			answer.innerHTML = // write your code here
			reset();
			return;
	}
	if (operation === 'divide') {
			//this will add a value to the div 
			answer.innerHTML = // write your code here
			reset();
			return;
	}
	if (operation === 'multiply') {
			//this will add a value to the div 
			answer.innerHTML = // write your code here
			reset();
			return;
	}
	if (operation === 'modulo') {
			//this will add a value to the div 
			answer.innerHTML = // write your code here
			reset();
			return;
	}

})

  //this simply resets the input fields back to empty
function reset() {
	var number1 = document.getElementById('num1').value = ' ';
	var number2 = document.getElementById('num2').value = ' ';
}
