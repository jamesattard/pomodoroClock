$(document).ready(function() {

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
      self.displayTimer(1);
    };

    self.pauseTimer = function() {
      clearInterval(self.handler);
      interval = rstInterval;
      intervalSec = interval * 60;
      self.displayTimer(0);
    };

    self.countDown = function() {
      minutes = parseInt(intervalSec / 60);
      seconds = parseInt(intervalSec % 60);
      if (intervalSec > 0){
        intervalSec--;
        console.log(interval);
        self.displayTimer(0);
      } else { // Break Time
        interval = 5;
        intervalSec = interval * 60;
      };
    };

    self.displayTimer = function(reset) {
      if (reset === 0) {         // If reset === 0, resume timerDisplay
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        $("#timerDisplay").html(minutes + ":" + seconds);
      } else {                  // If reset === 1, reset timerDisplay
        if (interval < 10) {
          minutes = "0" + minutes;
        }
        $("#timerDisplay").html(interval + ":" + "00");
      }
    };

  } // end of Timer()

  // Default Pomodoro settings
  var sessionLen = 1;
  var breakLen = 5;

  // Bind user Pomodoro settings with click event
  // sessionLen =
  // breakLen =

  // Instantiate timers
  var pomodoro = new Timer(sessionLen);
  var breaker = new Timer(breakLen);

  // Bind timers with click event
  $('#startBtn').click(function(){pomodoro.startTimer();})
  $('#resetBtn').click(function(){pomodoro.stopTimer();})

}); // end of DRF
