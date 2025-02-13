window.onload = function() {
    // Set the duration for the loader to stay visible (e.g., 3 seconds)
    setTimeout(function() {
      // Select the loader element
      const loader = document.querySelector('#showbox');
      // Add the fade-out class to trigger the animation
      loader.classList.add('fade-out');
      
      // Optionally, set the display to 'none' after the fade-out is complete
      setTimeout(function() {
        loader.style.display = 'none';
      }, 600); // This matches the fade-out duration
    }, 2000); // 3000ms = 3 seconds
};
