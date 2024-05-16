  const colors = [
    '#FD9729', '#FF63DE', '#30C825', '#BDB2FF', '#fffee0', '#ade6bb', '#B0C4DE', '#EEE4D7', '#5ac8fa'
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