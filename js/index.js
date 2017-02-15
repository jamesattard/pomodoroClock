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
        console.log(e);
        interval--;
      }
      else {
        clearInterval(this.timer);
      }
    },1000);
  }

  Timer.prototype.stopTimer = function(timerId) {
    console.log("finished at: ", el);
    clearInterval(this.timer);
  };

  // Instantiate timers
  var myTimer = new Timer(10);
  var timer2 = new Timer(30);

  // Start auto timer
  //timer2.startTimer(2);

  // Bind another timer with click event
  $('#startBtn').click(function(){myTimer.startTimer(1);})
  $('#stopBtn').click(function(){myTimer.stopTimer(1);})

}); // end of DRF
