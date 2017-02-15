$(document).ready(function(){

  // Timer constructor
  function Timer(duration) {
    var timer;
    var globalInterval;
    this.masterInterval = duration;
  }

  Timer.prototype.startTimer = function() {
    var interval = this.masterInterval;
    timer = setInterval(function(){
      if(interval > 0){
        interval--;
        globalInterval = interval;
        console.log(interval);
      }
      else {
        clearInterval(timer);
      }
    },1000);
  }

  Timer.prototype.stopTimer = function() {
    console.log("Finished at: ", globalInterval);
    clearInterval(timer);
  };

  var myTimer = new Timer(10);
  var timer2 = new Timer(30);
  timer2.startTimer();
  $('#startBtn').click(function(){myTimer.startTimer();})
  $('#stopBtn').click(function(){myTimer.stopTimer();})

}); // end of DRF
