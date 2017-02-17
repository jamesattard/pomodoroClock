$(document).ready(function(){

  // Timer constructor
  function Timer(interval) {
    this.interval = interval;
    this.e = {};
  }

  Timer.prototype.startTimer = function(timerId) {
    var interval = this.interval;
    var e = this.e;

    this.timer = setInterval(function(){
      if (interval > 0){
        elapsed = interval;
        el = e;
        el[timerId] = interval;
        console.log("Timer: ", timerId, " running...", el);
        interval--;
      }
      else {
        console.log("Interval: ", interval, "Timer: ", timerId, "completed...", el);
        clearInterval(this.timer);
      }
    },1000);
  }

  Timer.prototype.stopTimer = function(timerId) {
    console.log("Timer: ", timerId, "stopped at: ", el[timerId]);
    clearInterval(this.timer);
  };

  // Instantiate timers
  var timer1 = new Timer(10);
  var timer2 = new Timer(3);

  // Bind another timer with click event
  $('#startBtn1').click(function(){timer1.startTimer(1);})
  $('#stopBtn1').click(function(){timer1.stopTimer(1);})
  $('#startBtn2').click(function(){timer2.startTimer(2);})
  $('#stopBtn2').click(function(){timer2.stopTimer(2);})

}); // end of DRF
