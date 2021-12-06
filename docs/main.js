// function for generating random number lowercase uppercase letters, symbols
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = "!@#$%&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
} 

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// adding a click event listner to generate button
const generate = document.getElementById("generateBtn");
generate.addEventListener("click", () => {
	const length = document.getElementById("PasswordLength").value;
	const hasUpper = document.getElementById("uppercase").checked;
	const hasLower = document.getElementById("lowercase").checked;
	const hasNumber = document.getElementById("numbers").checked;
	const hasSymbol = document.getElementById("symbols").checked;
	const result = document.getElementById("PasswordResult");
	result.innerText = generatePassword(
			hasLower,
			hasUpper,
			hasNumber,
			hasSymbol,
			length
		);
});
// function for generating password 
function generatePassword(lower, upper, number, symbol, length) {
	let generatePassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
			(item) => Object.values(item)[0]
		);

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatePassword += randomFunc[funcName]();
		});
	}
	const finalPassword = generatePassword.slice(0, length);
	return finalPassword;
}
// function for copy to clipboard
let button = document.getElementById("clipboardBtn");
button.addEventListener("click", (e) => {
	e.preventDefault();
	document.execCommand(
		"copy",
		false,
		document.getElementById("PasswordResult").select()
	);
});

// ig-click redirect
let igAction = document.querySelector(".igAction");
igAction.addEventListener("click", () => {
	location.href = "https://www.instagram.com/psycodes/";
});