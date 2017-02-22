$(document).ready(function() {

  // Set CSS and pomodoro message
  function pomodoroState(state) {
    switch (state) {
      case 'work':
        $("#status").text("Working");
        $("#status").css("color", "#DAF7A6");
        $("#timerDisplay").css("color", "#DAF7A6");
        break;
      case 'pause':
        $("#status").text("Paused");
        $("#status").css("color", "#CD5C5C");
        $("#timerDisplay").css("color", "#CD5C5C");
        break;
      case 'break':
        $("#status").text("Break");
        $("#status").css("color", "#FFC300");
        $("#timerDisplay").css("color", "#FFC300");
        break;
      case 'stop':
        $("#status").text("Stopped");
        $("#status").css("color", "#FF5733");
        $("#timerDisplay").css("color", "#FF5733");
        break;
      default:
        $("#status").text("Working");
        $("#status").css("color", "#DAF7A6");
        $("#timerDisplay").css("color", "#DAF7A6");
        break;
    }
  }; // end of pomodoroState()

  // Timer constructor
  function Timer() {
    var self = this;                   // Save object scope
    var interval, breaker;
    var rstInterval = interval;        // Save interval value
    var intervalSec = interval * 60;   // Convert to seconds
    var minutes, seconds;

    self.initTimer = function(sessionLen, breakLen) {
      interval = sessionLen;
      breaker = breakLen;
      rstInterval = interval;
      intervalSec = interval * 60;
      self.startTimer();
    }

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
      self.displayTimer(0);
    };

    self.countDown = function() {
      minutes = parseInt(intervalSec / 60);
      seconds = parseInt(intervalSec % 60);
      if (intervalSec > 0){
        intervalSec--;
        self.displayTimer(0);
      }
      else if ($('#status').text() == 'Working') {
        pomodoroState('break');
        interval = breaker;
        intervalSec = interval * 60;
      }
      else if ($('#status').text() == 'Break') {
        pomodoroState('work');
        interval = rstInterval;
        intervalSec = interval * 60;
      }
    };

    self.displayTimer = function(reset) {
      if (reset === 0) {         // If reset === 0, resume timerDisplay
        console.log("Seconds: ", seconds);
        console.log("Minutes: ", minutes);
        if (seconds < 10 && seconds.length != 2) {
          seconds = "0" + seconds;
        }
        if (minutes < 10 && minutes.length != 2) {
          minutes = "0" + minutes;
        }
        $("#timerDisplay").html(minutes + ":" + seconds);
      } else {                  // If reset === 1, reset timerDisplay
        $("#timerDisplay").html("00:00");
      }
    };

  } // end of Timer()

  // Default Pomodoro settings
  var sessionLen = 1;
  $("#sessionLength").html(sessionLen);
  var breakLen = 2;
  $("#breakLength").html(breakLen);

  var pomodoro = new Timer();

  // Handle Session Length click events
  $('#incSessionBtn').click(function() {
    if ($("#sessionLength").html() > 0){
      sessionLen = parseInt($("#sessionLength").html());
      sessionLen+=1;
      $("#sessionLength").html(sessionLen);
    }
  });
  $('#decSessionBtn').click(function() {
    if ($("#sessionLength").html() > 0){
      sessionLen = parseInt($("#sessionLength").html());
      sessionLen-=1;
      $("#sessionLength").html(sessionLen);
    }
  });

  // Handle Break Length click events
  $('#incBreakBtn').click(function() {
    if ($("#sessionLength").html() > 0){
      breakLen = parseInt($("#sessionLength").html());
      breakLen+=1;
      $("#breakLength").html(breakLen);
    }
  });
  $('#decBreakBtn').click(function() {
    if ($("#sessionLength").html() > 0){
      breakLen = parseInt($("#breakLength").html());
      breakLen-=1;
      $("#breakLength").html(breakLen);
    }
  });

  // Handle Start click events
  $('#startBtn').click(function() {
    if ($('#status').text() == '--' || $('#status').text() == 'Stopped') {
      pomodoroState('work');
      // Set button states
      $("#startBtn > i").attr("class", "fa fa-pause");
      $("#resetBtn").removeAttr("disabled");
      // Initialise the Pomodoro Timer
      pomodoro.initTimer(sessionLen, breakLen);
    } else if ($('#status').text() == 'Paused') {
      pomodoroState('work');
      // Set button states
      $("#startBtn > i").attr("class", "fa fa-pause");
      $("#resetBtn").removeAttr("disabled");
      // Start the Pomodoro Timer
      pomodoro.startTimer();
    } else {
      pomodoroState('pause');
      // Set button states
      $("#startBtn > i").attr("class", "fa fa-play");
      // Pause timer
      pomodoro.pauseTimer();
    }
  });

  // Handle Reset click events
  $('#resetBtn').click(function() {
    pomodoroState('stop');
    // Set button states
    $("#startBtn > i").attr("class", "fa fa-play");
    $("#resetBtn").attr("disabled", "disabled");
    pomodoro.resetTimer();
  });

}); // end of DRF
