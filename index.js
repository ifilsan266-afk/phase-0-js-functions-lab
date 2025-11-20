// Function 1: calculateTax
function calculateTax(amount) {
  // Calculate 10% tax on the amount
  return amount * 0.1;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
  // Convert the string to uppercase
  return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) {
  // Return the larger of the two numbers
  return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
  // Convert to lowercase to make the check case-insensitive
  const lowerCaseWord = word.toLowerCase();
  // Reverse the string
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  // Check if the original and reversed strings are the same
  return lowerCaseWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  // Calculate the discount amount
  const discountAmount = originalPrice * (discountPercentage / 100);
  // Return the price after applying the discount
  return originalPrice - discountAmount;
}

// Export the functions for use in tests
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
// Test calculateTax
console.log(calculateTax(100)); // Expected: 10

// Test convertToUpperCase
console.log(convertToUpperCase("hello world")); // Expected: "HELLO WORLD"

// Test findMaximum
console.log(findMaximum(5, 10)); // Expected: 10  
console.log(findMaximum(20, 15)); // Expected: 20

// Test isPalindrome
console.log(isPalindrome("racecar"));// Expected: true 
console.log(isPalindrome("hello")); // Expected: false

// Test calculateDiscountedPrice
console.log(calculateDiscountedPrice(100, 20)); // Expected: 80
console.log(calculateDiscountedPrice(50, 10)); // Expected: 45
 





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };