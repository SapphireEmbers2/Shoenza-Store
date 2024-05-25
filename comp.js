document.addEventListener("DOMContentLoaded", function() {

// Get all checkboxes with class 'product-checkbox'
const checkboxes = document.querySelectorAll('.product-checkbox');

// Add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
checkbox.addEventListener('change', function() {

// Initialize total price
let totalPrice = 0;

// Iterate through each checkbox
checkboxes.forEach(function(checkbox) {

// If checkbox is checked, add its value to total price
if (checkbox.checked) {
totalPrice += parseFloat(checkbox.value);
}
});

// Display total price in the 'total-price' div
document.getElementById('total-price').textContent =
totalPrice.toFixed(2);
});
});
});