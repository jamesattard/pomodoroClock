$(document).ready(function(){

  // Timer constructor
  function Timer(interval) {
    var self = this;            // Save object scope
    var rstInterval = interval; // Save interval value

    self.startTimer = function() {
      self.handler = setInterval(function() {
        self.countDown();
      }, 1000);                 // Run countDown() every 1s
    };

    self.resetTimer = function() {
      clearInterval(self.handler);
      interval = rstInterval;
      self.displayTimer();
    };

    self.pauseTimer = function() {
      clearInterval(self.handler);
    }

    self.countDown = function() {
      if (interval > 0){
        interval--;
        self.displayTimer();
      };
    };

    self.displayTimer = function() {
      $("#timerDisplay").html(interval);
    }
  }

  // Instantiate timers
  var timer1 = new Timer(25);

  // Bind timers with click event
  $('#startBtn').click(function(){timer1.startTimer();})
  $('#resetBtn').click(function(){timer1.resetTimer();})

}); // end of DRF
