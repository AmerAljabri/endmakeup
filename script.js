// Example JavaScript code

// Execute code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to 'Add to Cart' button
    var addToCartButton = document.querySelector('.btn-primary');
    addToCartButton.addEventListener('click', function() {
      // Perform some action when 'Add to Cart' button is clicked
      alert('Product added to cart!');
    });
  });