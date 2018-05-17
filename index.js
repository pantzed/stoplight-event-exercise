(function() {
  'use strict';
  const stopLight = document.getElementById("stopLight");
  const slowLight = document.getElementById("slowLight");
  const goLight = document.getElementById("goLight");
  const stopButton = document.getElementById("stopButton");
  const slowButton = document.getElementById("slowButton");
  const goButton = document.getElementById("goButton");

  document.addEventListener('DOMContentLoaded', function(){
    stopButton.addEventListener("click", function(event){
      event.preventDefault();
      if (stopLight.classList.contains("bulb")){
        stopLight.classList.toggle("stop");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function(){
    slowButton.addEventListener("click", function(event){
      event.preventDefault();
      if (slowLight.classList.contains("bulb")){
        slowLight.classList.toggle("slow");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function(){
    goButton.addEventListener("click", function(event){
      event.preventDefault();
      if (goLight.classList.contains("bulb")){
        goLight.classList.toggle("go");
      }
    });
  });
  // YOUR CODE HERE
})();
