$(document).ready(function(){

  // Timer constructor
  function Timer(interval) {    // interval in mins
    var self = this;            // Save object scope
    var minutes, seconds;
    var rstInterval = interval; // Save interval value
    var intervalSec = interval * 60;   // Convert to seconds

    self.startTimer = function() {
      self.handler = setInterval(function() {
        self.countDown();
      }, 1000);                 // Run countDown() every 1s
    };

    self.stopTimer = function() {
      clearInterval(self.handler);
      interval = rstInterval;
      intervalSec = interval * 60;
      self.displayTimer(0);
    };

    self.pauseTimer = function() {
      clearInterval(self.handler);
    }

    self.countDown = function() {
      minutes = parseInt(intervalSec / 60);
      seconds = parseInt(intervalSec % 60);
      if (intervalSec > 0){
        intervalSec--;
        self.displayTimer(1);
      };
    };

    self.displayTimer = function(flag) {
      if (flag === 1) {
        if(seconds < 10)
              seconds = "0"+seconds;
        $("#timerDisplay").html(minutes + ":" + seconds);
      } else {
        $("#timerDisplay").html(interval + ":" + "00");
      }
    }
  }

  // Instantiate timers
  var sessionLen = 25;
  var breakLen = 5;
  var pomodoro = new Timer(sessionLen);
  var breaker = new Timer(breakLen);

  // Bind timers with click event
  $('#startBtn').click(function(){pomodoro.startTimer();})
  $('#resetBtn').click(function(){pomodoro.stopTimer();})

}); // end of DRF
