
// Exercise 6
function validate() {
	const REGEXP_base = /^[a-zA-ZÀ-ÿ\s]{3,}$/
	const REGEXP_email = /^[\w.-]+@[\w.-]+\.\w+$/
	const REGEXP_pass = /^(?=.*[A-Z])(?=.*\d).{6,}$/
	const REGEXP_phone = /^[0-9]{3,}$/
	let errCount = 0
	let pol = false

	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");  
	let errorAddress = document.getElementById("errorAddress");
	let errorLastN = document.getElementById("errorLastN"); 
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	pol = inputCheck(fName, REGEXP_base)
	inputDisplay(fName, errorName, pol)
	pol = inputCheck(fEmail, REGEXP_email)
	inputDisplay(fEmail, errorEmail, pol)
	pol = inputCheck(fAddress, REGEXP_base)
	inputDisplay(fAddress, errorAddress, pol)
	pol = inputCheck(fLastN, REGEXP_base)
	inputDisplay(fLastN, errorLastN, pol)
	pol = inputCheck(fPassword, REGEXP_pass)
	inputDisplay(fPassword, errorPassword, pol)
	pol = inputCheck(fPhone, REGEXP_phone)
	inputDisplay(fPhone, errorPhone, pol)

	console.log(errCount)
	if(errCount==0){console.log('push clientes')}
	
	function inputCheck(inputField, regExp){
		return inputField.value!=false && regExp.test(inputField.value)
	}
	function inputDisplay(inputField, errorField, pol){
		console.log(pol, inputField)
		if(pol){
			inputField.style.border = "2px solid green"
			errorField.classList.remove("invalid-feedback")
			errorField.style.display = "none"
		}else{
			inputField.style.border = "2px solid red"
			errorField.classList.add("invalid-feedback")
			errorField.style.display = "block"
			errCount++
		}
	}
}
document.addEventListener("click", (aux) => {
	if (aux.target === document.getElementById("btn")) {
	  aux.preventDefault();
	  validate()
	}
  });