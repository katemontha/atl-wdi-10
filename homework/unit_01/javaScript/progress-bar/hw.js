// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
    $('#numeric-display').textContent = timerValue;
  },

  drawProgressBars: function(timerValue){
    var timeElapsed = 100 - timerValue;
    $('.progress-bar')[0].style.width = timeElapsed + '%';
  },

  drawLitFuses: function(timerValue){
    var percentUnburnt = timerValue / 100;
    $('.unburnt')[0].style.width = percentUnburnt * 98 + '%';
    $('.burnt')[0].style.width = (1 - percentUnburnt) * 98 + '%';

  },

  drawCrawlers: function(timerValue){
    var timeElapsed = 100 - timerValue;
    if(timerValue % 2 === 0) {
      $('.crawler')[0].style.marginTop = '0px';
    }
      else {
      $('.crawler')[0].style.marginTop = '10px';
    }
    $('.crawler')[0].style.marginLeft = (timeElapsed * 10) + 'px';
  }
};
