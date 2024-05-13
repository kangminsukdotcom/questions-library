document.addEventListener('DOMContentLoaded', function() {
    const bubbles = document.querySelectorAll('.speech-bubble');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
  
    // Show popup when a speech bubble is clicked
    bubbles.forEach((bubble, index) => {
      bubble.addEventListener('click', function() {
        currentIndex = index;
        showPopup(this.textContent, index);
      });
    });
  
    // Function to show popup and update URL
    function showPopup(text, index) {
      popupContent.textContent = text;
      popup.style.display = 'block';
      popupContent.focus();
  
      // Update the URL with a unique identifier for the popup
      const url = `${window.location.pathname}?question=${index}`;
      window.history.pushState({ question: index }, '', url);
    }
  
    // Navigate to the previous question
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + bubbles.length) % bubbles.length;
      showPopup(bubbles[currentIndex].textContent, currentIndex);
    });
  
    // Navigate to the next question
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % bubbles.length;
      showPopup(bubbles[currentIndex].textContent, currentIndex);
    });
  
    // Handle left and right arrow key events
    document.addEventListener('keydown', function(e) {
      if (popup.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + bubbles.length) % bubbles.length;
          showPopup(bubbles[currentIndex].textContent, currentIndex);
        } else if (e.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % bubbles.length;
          showPopup(bubbles[currentIndex].textContent, currentIndex);
        }
      }
    });
  
    // Handle the browser's back and forward buttons
    window.addEventListener('popstate', function(event) {
      if (event.state && event.state.question !== undefined) {
        currentIndex = event.state.question;
        showPopup(bubbles[currentIndex].textContent, currentIndex);
      } else {
        popup.style.display = 'none';
      }
    });
  
    // Close popup when clicking outside the popup content
    popup.addEventListener('click', function(e) {
      if (e.target === this) {
        popup.style.display = 'none';
        // Update the URL to remove the question parameter
        const url = window.location.pathname;
        window.history.pushState({}, '', url);
      }
    });
  });

  const colors = [
    '#FD9729', '#FF63DE', '#30C825', '#BDB2FF', '#fffee0', '#ade6bb', '#BF616A', '#5ac8fa'
];
  document.addEventListener('DOMContentLoaded', function() {
    const speechBubbles = document.querySelectorAll('.speech-bubble');

    speechBubbles.forEach(bubble => {
        bubble.addEventListener('mouseover', () => {
            const randomColorIndex = Math.floor(Math.random() * colors.length);
            bubble.style.backgroundColor = colors[randomColorIndex];
        });
    });
});