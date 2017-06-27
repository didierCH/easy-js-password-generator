// action by click on button
var getGeneratePassword = document.getElementById("generatePassword");
getGeneratePassword.addEventListener("click", output, false);

// get password length
var getPwLength = document.getElementById("inputPasswordLength").value;
console.log(getPwLength);
var getQuantity = document.getElementById("inputQuantity");

    
// function to check choosen options and make a concatenated string
function checkOptions() {
    // variables to get user input
    var getLowercaseChar = document.getElementById("inputLowerCaseCharacters");
    var getUppercaseChar = document.getElementById("inputUpperCaseCharacters");
    var getNumbers = document.getElementById("inputNumbers");
    var getSymbols = document.getElementById("inputSymbols");
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
    var password = "";
    var i;
    var passwordChar;

    for (i = 0; i < getPwLength; i++) {
        passwordChar = getCharFromString(checkOptions());
        password += passwordChar;
    }

    var output = document.getElementById("outputGeneratedPasswords").innerHTML = password;
}
