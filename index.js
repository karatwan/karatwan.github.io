// Get the text elements
const texts = Array.from(document.getElementsByClassName('text'));

// Function to hide all texts
function hideAllTexts() {
  texts.forEach((text) => {
    text.style.display = 'none';
  });
}

// Function to show a specific text for a given duration
function showText(index, duration) {
  hideAllTexts();
  texts[index].style.display = 'block';
  
  setTimeout(() => {
    texts[index].style.display = 'none';
    const nextIndex = (index + 1) % texts.length;
    const nextDuration = parseInt(texts[nextIndex].getAttribute('data-duration'), 10);
    showText(nextIndex, nextDuration);
  }, duration);
}

// Initial setup - show the first text
const firstDuration = parseInt(texts[0].getAttribute('data-duration'), 10);
showText(0, firstDuration);

/*

document.addEventListener("DOMContentLoaded", function() {
  var introElement = document.querySelector(".intro");
  
  window.addEventListener("scroll", function() {
    var scrollPosition = window.pageYOffset;
    var introHeight = introElement.offsetHeight;
    var scrollPercent = scrollPosition / introHeight;
    var color = getColor(scrollPercent);
    
    introElement.style.backgroundColor = color;
  });
});

function getColor(scrollPercent) {
  var initialColor = [0, 0, 0]; // RGB values for initial color (black)
  var finalColor = [250,250,250]; // RGB values for final color (#99E2D2)
  var interpolatedColor = [];
  
  for (var i = 0; i < 3; i++) {
    var channel = Math.round(initialColor[i] + (finalColor[i] - initialColor[i]) * scrollPercent);
    interpolatedColor.push(channel);
  }
  
  return "rgb(" + interpolatedColor.join(",") + ")";
}
*/
