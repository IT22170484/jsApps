// text.js

// Function to count the number of characters in a string
function countCharacters(text) {
    return text.length;
}

// Function to count the number of words in a string
function countWords(text) {
    // Remove extra whitespaces from the beginning and end of the string
    text = text.trim();
    // Split the string into words based on whitespaces
    let words = text.split(/\s+/);
    // Return the number of words
    return words.length;
}

// Function to reverse a string
function reverseString(text) {
    return text.split('').reverse().join('');
}

// Exporting the functions to be used in other modules
module.exports = {
    countCharacters,
    countWords,
    reverseString
};
