
    // Show the back-to-top button when scrolling
    window.addEventListener("scroll", function() {
        var backToTopButton = document.getElementById("backToTopButton");
        if (window.pageYOffset > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      });
  
      // Scroll to the top when the back-to-top button is clicked
      document.getElementById("backToTopButton").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });