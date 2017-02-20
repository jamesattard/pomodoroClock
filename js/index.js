$(document).ready(function() {

  // Timer constructor
  function Timer(interval) {    // interval in mins
    var self = this;            // Save object scope
    var rstInterval = interval; // Save interval value
    var intervalSec = interval * 60;   // Convert to seconds
    var minutes, seconds;

    self.startTimer = function() {
      self.handler = setInterval(function() {
        self.countDown();
      }, 1000);                 // Run countDown() every 1s
    };

    self.resetTimer = function() {
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
      console.log("reset: ", reset);
      console.log("seconds: ", seconds);
      console.log("minutes: ", minutes);
      if (reset === 0) {         // If reset === 0, resume timerDisplay
        if (seconds < 10 && seconds.length == 1) {
          seconds = "0" + seconds;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        $("#timerDisplay").html(minutes + ":" + seconds);
      } else {                  // If reset === 1, reset timerDisplay
        if (interval < 10) {
          interval = "0" + interval;
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

  // Handle Start click events
  $('#startBtn').click(function() {
    // console.log($("#startBtn > i").css("fa-play"));
    if (document.getElementById("startBtn").hasAttribute("enabled")) {
      // It's working time!
      $("#status").text("working");
      $("#status").css("color", "#FF0");
      // Set button states
      $("#startBtn > i").attr("class", "fa fa-pause");
      $("#resetBtn").removeAttr("disabled");
      $("#resetBtn").attr("enabled"); // could be superflous
      $("#startBtn").removeAttr("enabled");
      $("#resetBtn").attr("disabled"); // could be superflous
      // Start the Pomodoro Timer
      pomodoro.startTimer();
    } else {
      $("#status").text("--");
      // Pause timer
      pomodoro.pauseTimer();
      // Set button states
      $("#startBtn > i").attr("class", "fa fa-play");
      $("#resetBtn").removeAttr("disabled");
      $("#resetBtn").attr("enabled"); // could be superflous
      $("#startBtn").removeAttr("enabled");
      $("#resetBtn").attr("disabled"); // could be superflous
    }
  });

  // Handle Reset click events
  $('#resetBtn').click(function() {
    pomodoro.resetTimer();
  });

}); // end of DRF
