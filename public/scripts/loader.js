window.onload = function() {
  // Set the duration for the loader to stay visible (e.g., 2 seconds)
  setTimeout(function() {
      // Select the loader element
      const loader = document.querySelector('#showbox-holder');
      // Add the fade-out class to trigger the animation
      loader.classList.add('fade-out');

      // Remove the overflow: hidden style from the html element
      document.documentElement.style.overflow = '';

      // Optionally, set the display to 'none' after the fade-out is complete
      setTimeout(function() {
          loader.style.display = 'none';
      }, 600); // This matches the fade-out duration
  }, 1000); // 2000ms = 2 seconds
};
