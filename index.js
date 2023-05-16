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

