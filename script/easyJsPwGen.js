var getGeneratePassword = document.getElementById("generatePassword");

// action by click on button
getGeneratePassword.addEventListener("click", output, false);
    

// function to check choosen options and make a concatenated string
function checkOptions() {
    // variables to get user input
    var getLowercaseChar = document.getElementById("inputLowerCaseCharacters"),
        getUppercaseChar = document.getElementById("inputUpperCaseCharacters"),
        getNumbers = document.getElementById("inputNumbers"),
        getSymbols = document.getElementById("inputSymbols"),
        getExcludeSimChar = document.getElementById("inputExcludeSimilarCharacters"),
        getMakeSpeakablePW = document.getElementById("inputMakeSpeakablePassword"),
        getChooseFirstChar = document.getElementsByName("inputChooseFirstCharacter"),
        getChooseLastChar = document.getElementsByName("inputChooseLastCharacter");

    // variables to generate password
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz",
        uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numbers = "1234567890",
        symbols = document.getElementById("actualSymbols").value;

    // concatenated string
    var concatenatedString = "";

    if (getLowercaseChar.checked === true) {
        concatenatedString += lowercaseChar;
    } 

    if (getUppercaseChar.checked === true) {
        concatenatedString += uppercaseChar;
    } 

    if (getNumbers.checked === true) {
        concatenatedString += numbers;
    } 

    if (getSymbols.checked === true) {
        concatenatedString += symbols;
    }

    return concatenatedString;
}


// function for random numbers
function randomNumbers(receivedString) {
    var stringLen = receivedString.length,
    random = Math.round((stringLen - 1) * Math.random() + 0 );

    return random;
}

// get random character from string
function getCharFromString(receivedString) {
    var randomNumber = randomNumbers(receivedString),
        actualChar = receivedString.charAt(randomNumber);

    return actualChar;
}


// call functions and output result
function output() {
    var getQuantity = document.getElementById("inputQuantity").value,
        getOutputQuantity = document.getElementById("outputQuantity").innerHTML = getQuantity,
        getPwLength = document.getElementById("inputPasswordLength").value;

    var password = "",
        passwordChar;

    var i,
        j;

    var checkOptionsResult = checkOptions();

    for (i = 0; i < getQuantity; i++) {
        for (j = 0; j < getPwLength; j++) {
            passwordChar = getCharFromString(checkOptionsResult);
            password += passwordChar;
        }
        password += "<br>";
    }

    var output = document.getElementById("outputGeneratedPasswords").innerHTML = password;
}
