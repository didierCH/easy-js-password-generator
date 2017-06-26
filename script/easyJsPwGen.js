// action by click on button
var getGeneratePassword = document.getElementById("generatePassword");
getGeneratePassword.addEventListener("click", output, false);

// get password length
var getPwLength = document.getElementById("inputPasswordLength");

    
// function to check choosen options
function checkOptions() {
    // variables to get user input
    var getLowercaseChar = document.getElementById("inputLowerCaseCharacters");
    var getUppercaseChar = document.getElementById("inputUpperCaseCharacters");
    var getNumbers = document.getElementById("inputNumbers");
    var getSymbols = document.getElementById("inputSymbols");
    var getQuantity = document.getElementById("inputQuantity");
    var getExcludeSimChar = document.getElementById("inputExcludeSimilarCharacters");
    var getMakeSpeakablePW = document.getElementById("inputMakeSpeakablePassword");
    var getChooseFirstChar = document.getElementsByName("inputChooseFirstCharacter");
    var getChooseLastChar = document.getElementsByName("inputChooseLastCharacter");

    // variables to generate password
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";

    var concatString = "";

    if (getLowercaseChar.checked === true) {
        concatString += lowercaseChar;
    } 

    if (getUppercaseChar.checked === true) {
        concatString += uppercaseChar;
    } 

    if (getNumbers.checked === true) {
        concatString += numbers;
    } 

    console.log(concatString);
    return concatString;
}


// function for random numbers
function randomNumbers(receivedString) {
    var stringLen = receivedString.length;
    console.log(stringLen);
    var random = Math.round((stringLen - 1) * Math.random() + 0 );

    console.log(random);
    return random;
}

// get random character from string
function getCharFromString(receivedString) {
    var randomNumber = randomNumbers(receivedString);
    console.log(randomNumber);
    
    var actualChar = receivedString.charAt(randomNumber);

    console.log(actualChar);
    return actualChar;
}



function output() {
    // var output = document.getElementById("outputQuantity").innerHTML = randomNumbers(checkOptions());
    var output = document.getElementById("outputQuantity").innerHTML = getCharFromString(checkOptions());
}
