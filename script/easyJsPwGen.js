// variables to get user input
var getPwLength = document.getElementById("inputPasswordLength");
var getLowercaseChar = document.getElementById("inputLowerCaseCharacters");
var getUppercaseChar = document.getElementById("inputUpperCaseCharacters");
var getNumbers = document.getElementById("inputNumbers");
var getSymbols = document.getElementById("inputSymbols");
var getQuantity = document.getElementById("inputQuantity");
var getExcludeSimChar = document.getElementById("inputExcludeSimilarCharacters");
var getMakeSpeakablePW = document.getElementById("inputMakeSpeakablePassword");
var getChooseFirstChar = document.getElementsByName("inputChooseFirstCharacter");
var getChooseLastChar = document.getElementsByName("inputChooseLastCharacter");
var getGeneratePassword = document.getElementById("generatePassword");

// console.log(getChooseLastChar.item(0).checked)
// getGeneratePassword.addEventListener("click", function() { alert("You have CLICKED!!!") });

// variables to generate password
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";


// function for random numbers
function randomNumbers () {
    var random = Math.round( 26 * Math.random() + 1 );
    return random;
}

var callRandomNum = randomNumbers();
console.log(callRandomNum);
