$(document).ready(function(){

  // Timer constructor
  function Timer(interval) {
    var self = this;

    self.startTimer = function() {
      self.handler = setInterval(function() {
        self.countDown();
      }, 1000);
    };

    self.stopTimer = function() {
      clearInterval(self.handler);
    };

    self.countDown = function() {
      if (interval > 0){
        console.log(interval);
        interval--;
      };
    };
  }

  // Instantiate timers
  var timer1 = new Timer(10);
  var timer2 = new Timer(5);

  // Bind another timer with click event
  $('#startBtn1').click(function(){timer1.startTimer();})
  $('#stopBtn1').click(function(){timer1.stopTimer();})
  $('#startBtn2').click(function(){timer2.startTimer();})
  $('#stopBtn2').click(function(){timer2.stopTimer();})

}); // end of DRF
