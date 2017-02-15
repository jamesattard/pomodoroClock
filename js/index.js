$(document).ready(function(){

  // Timer constructor
  function Timer() {
    var timer;
  }

  Timer.prototype.startTimer = function(interval) {
    timer = setInterval(function(){
      if(interval > 0){
       interval--;
       console.log(interval);
      }
      else {
        clearInterval(timer);
      }
    },1000);
  }

  Timer.prototype.stopTimer = function() {
    console.log("Finished at: ", interval);
   clearInterval(timer);
  };

  var myTimer = new Timer();
  var timer2 = new Timer();
  timer2.startTimer(30);
  $('#startBtn').click(function(){myTimer.startTimer(10);})
  $('#stopBtn').click(function(){myTimer.stopTimer();})

}); // end of DRF
