(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

    const stopLight = document.getElementById("stopLight");
    const slowLight = document.getElementById("slowLight");
    const goLight = document.getElementById("goLight");
    const stopButton = document.getElementById("stopButton");
    const slowButton = document.getElementById("slowButton");
    const goButton = document.getElementById("goButton");


    //Toggle click event listeners
      stopButton.addEventListener("click", function(event){
        event.preventDefault();
        if (stopLight.classList.contains("bulb")){
          stopLight.classList.toggle("stop");
        }
      });

      slowButton.addEventListener("click", function(event){
        event.preventDefault();
        if (slowLight.classList.contains("bulb")){
          slowLight.classList.toggle("slow");
        }
      });


      goButton.addEventListener("click", function(event){
        event.preventDefault();
        if (goLight.classList.contains("bulb")){
          goLight.classList.toggle("go");
        }
      });

    // Add new DOM event listeners and handlers to log the mouse state of each button.
    // -- When a user's mouse enters a button, log "Entered <textContent> button" to the console.
    // -- When a user's mouse leaves a button, log "Left <textContent> button" to the console.
    
    stopButton.addEventListener("mouseenter", function() {
      console.log(`Mouse entered stopButton`);
    });

    stopButton.addEventListener("mouseleave", function() {
      console.log(`Mouse left stopButton`);
    });

    slowButton.addEventListener("mouseenter", function() {
      console.log(`Mouse entered slowButton`);
    });

    slowButton.addEventListener("mouseleave", function() {
      console.log(`Mouse left slowButton`);
    });

    goButton.addEventListener("mouseenter", function() {
      console.log(`Mouse entered goButton`);
    });

    goButton.addEventListener("mouseleave", function() {
      console.log(`Mouse left goButton`);
    });


    // Add one DOM event listener and one handler to log the state of each bulb.
    // -- When a user clicks a button that just turned on, log"<textContent> bulb on" to the console.
    // -- When a user clicks a button that just turned off, log"<textContent> bulb off" to the console.

    
    document.getElementById("controls").addEventListener("click", function(event){
      let id = (event.target.id);
      if (id === "stopButton") {
        if (stopLight.classList.contains("stop")) {
          console.log(`Stoplight Active`);
        } else { console.log(`Stoplight Inactive`) }
      }
      if (id === "slowButton") {
        if (slowLight.classList.contains("slow")) {
          console.log(`Slowlight Active`);
        } else { console.log(`Slowlight Inactive`) }
      }
      if (id === "goButton") {
        if (goLight.classList.contains("go")) {
          console.log(`Golight Active`);
        } else { console.log(`Golight Inactive`) }
      }
    });
    
  });
})();
