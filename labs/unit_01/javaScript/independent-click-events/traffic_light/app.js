window.onload = function() {
  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#sgoButton');

  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  stopButton.addEventListener('click', trafficLight.illuminateRed);
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  goButton.addEventListener('click', trafficLight.illuminateGreen);
}


var trafficLight = {
  illuminateRed: function(event) {
    stopLight.style.background = 'red';
  },

  illuminateYellow: function(event) {
    slowLight.style.background = 'yellow';
  },

  illuminateGreen: function(event) {
    goLight.style.background = 'green'
  }

}
