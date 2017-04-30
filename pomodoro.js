

var workTime = 1;
var breakTime = 1;

$(document).ready(function() {
  //Adjust Work Time
  $(".upWork").on("click", function() {
    workTime = workTime + 1;
    $(".workTime").html(workTime+":00");
  });
  $(".downWork").on("click", function() {
    if (workTime > 0) {
      workTime = workTime - 1;
      $(".workTime").html(workTime+":00");
    }
  });
  //Adjust Break Time
  $(".upBreak").on("click", function() {
    breakTime = breakTime + 1;
    $(".breakTime").html(breakTime+":00");
  });
  $(".downBreak").on("click", function() {
    if (breakTime > 0) {
      breakTime = breakTime - 1;
      $(".breakTime").html(breakTime +":00");
    }
  });


var workMS = workTime * 60000;
var breakMS = breakTime * 60000;
var seconds = 60;
var time;
var work;
var notWork;
var circle = new ProgressBar.Circle('.progress', {
    color: 'rgb(255, 57, 25)',
    fill: 'rgba(255, 57, 25, 0.3)',
    strokeWidth: 2,
    trailWidth: 1
});

$(".startWork").on("click", function() {
  clearInterval(work);
  clearInterval(notWork);
  time = "";
  seconds = 60;
  circle.setText("");
  var workTimer = workTime - 1;
  work = setInterval(function() {
    if (seconds === 0) {
      seconds = 59;
      workTimer = workTimer - 1;
    }
    else {
      seconds = seconds - 1;
    }

    if (seconds < 10) {
      time = workTimer + ":" + "0" + seconds;
    }
    if (seconds >= 10) {
      time = workTimer + ":" + seconds;
    }
    circle.setText(time);
  }, 1000);

  circle.animate(1, {
    duration: 1,
  }, function() {
    circle.animate(0, {
      duration: workMS
  }, function() {
    clearInterval(work);
    breakTimer = breakTime;
    workTimer = workTime;
    time = undefined;
    circle.setText("");
    document.title = "Work is over!";
    alert("Work is over!");
});
});
});

$(".startBreak").on("click", function() {
  clearInterval(work);
  clearInterval(notWork);
  time = "";
  seconds = 60;
  var breakTimer = breakTime - 1;
  notWork = setInterval(function() {
    if (seconds === 0) {
      seconds = 59;
      breakTimer = breakTimer - 1;
    }
    else {
      seconds = seconds - 1;
    }

    if (seconds < 10) {
      time = breakTimer + ":" + "0" + seconds;
    }
    if (seconds >= 10) {
      time = breakTimer + ":" + seconds;
    }
    circle.setText(time);
  }, 1000);

  circle.animate(1, {
    duration: 1,
  }, function() {
    circle.animate(0, {
      duration: breakMS,
    }, function() {
      clearInterval(notWork);
      breakTimer = breakTime;
      workTimer = workTime;
      time = undefined;
      circle.setText("");
      document.title = "Break is over!";
      alert("Break is over!");
      });
});
});
});
