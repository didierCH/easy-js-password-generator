// action by click on button
//var getGeneratePassword = document.getElementById("generatePassword");
//getGeneratePassword.addEventListener("click", checkOptions, false);
// getGeneratePassword.onclick = checkOptions();


// function to check choosen options
function checkOptions() {
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

    // variables to generate password
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";

    var concatString = "";

    // empty string 'concatString'
    if (concatString.length > 0 ) {
        concatString = "";
    }

    // var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    // console.log(getLowercaseChar.checked);
    if (getLowercaseChar.checked === true) {
        concatString += lowercaseChar;
    } 
    // console.log(concatString);
    if (getUppercaseChar.checked === true) {
        concatString += uppercaseChar;
    } 

    console.log(concatString);
    return concatString;
}

function output() {
    var output = document.getElementById("outputQuantity").innerHTML = checkOptions();
}

//console.log(checkOptions());
//var output = document.getElementById("outputQuantity").innerHTML = checkOptions();

// function for concatenation
// function concatChars () {
//     var concatenatedString = lowercaseChar.concat(uppercaseChar);
//     var stringLength = concatenatedString.length;
//     console.log(stringLength);
// }

// function for random numbers
function randomNumbers (stringLen) {
    var random = Math.floor( stringLen * Math.random() + 0 );
    return random;
}

// var callRandomNum = randomNumbers(stringLength);
// console.log(callRandomNum);

// return random character of a string
// var randomChar = concatenatedString.charAt(callRandomNum);
// console.log(randomChar);

