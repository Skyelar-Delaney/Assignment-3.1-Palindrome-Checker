// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for accurate comparison
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
    // Compare the original and reversed strings
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Main loop
while (true) {
    // Prompt the user for input
    const input = prompt('Enter a string (or type "exit" to end):');

    // Check if the user wants to exit the loop
    if (input.toLowerCase() === 'exit') {
        alert('Goodbye!');
        break; // Exit the loop
    }

    // Check if the input is a palindrome
    const isPalindromeResult = isPalindrome(input);

    // Display the result to the user
    const resultMessage = isPalindromeResult
        ? 'It\'s a palindrome!'
        : 'It\'s not a palindrome.';
    alert(resultMessage);

    // Provide an option to enter another word
}