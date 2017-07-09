    /* 
    * MIT License
    * Copyright (c) 2017 Didier Clapasson
    */

var easyJsPwGen = {

    // function to check choosen options and make a concatenated string
    // function checkOptions() {
    checkOptions: function() {
        // variables to get user input
        var getLowercaseChar = document.getElementById("inputLowerCaseCharacters"),
            getUppercaseChar = document.getElementById("inputUpperCaseCharacters"),
            getNumbers = document.getElementById("inputNumbers"),
            getSymbols = document.getElementById("inputSymbols");
            // getExcludeSimChar = document.getElementById("inputExcludeSimilarCharacters"),
            // getMakeSpeakablePW = document.getElementById("inputMakeSpeakablePassword"),
            // getChooseFirstChar = document.getElementsByName("inputChooseFirstCharacter"),
            // getChooseLastChar = document.getElementsByName("inputChooseLastCharacter");

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
    },


    // function for random numbers
    // function randomNumbers(receivedString) {
    randomNumbers: function(receivedString) {
        var stringLen = receivedString.length,
        random = Math.round((stringLen - 1) * Math.random() + 0 );

        return random;
    },

    // get random character from string
    // function getCharFromString(receivedString) {
    getCharFromString: function(receivedString) {
        var randomNumber = easyJsPwGen.randomNumbers(receivedString),
            actualChar = receivedString.charAt(randomNumber);

        return actualChar;
    },


    // call functions and output result
    // function output() {
    output: function() {
        var getQuantity = document.getElementById("inputQuantity").value,
            getOutputQuantity = document.getElementById("outputQuantity").innerHTML = getQuantity,
            getPwLength = document.getElementById("inputPasswordLength").value;

        var password = "",
            passwordChar;

        var i,
            j;

        var checkOptionsResult = easyJsPwGen.checkOptions();

        for (i = 0; i < getQuantity; i++) {
            for (j = 0; j < getPwLength; j++) {
                passwordChar = easyJsPwGen.getCharFromString(checkOptionsResult);
                password += passwordChar;
            }
            password += "\n";
        }

        var output = document.getElementById("outputGeneratedPasswords").innerHTML = password;
    }
};

// action by click on button
var getGeneratePassword = document.getElementById("generatePassword");
getGeneratePassword.addEventListener("click", easyJsPwGen.output, false);
    
