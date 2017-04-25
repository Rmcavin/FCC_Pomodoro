

var workTime = .1;
var breakTime = .1;

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
});

var workMS = workTime * 60000;
var breakMS = breakTime * 60000;

window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: 'darkred',
        fill: 'red',
        strokeWidth: 2,
        trailWidth: 1
});

$(".startWork").on("click", function() {
  circle.animate(1, {
    duration: 1,
    easing: 'easeInOut'
  }, function() {
    circle.animate(0, {
      duration: workMS
  }, function() {
    document.title = "Work is over!";
    alert("Work is over!");
});
});

$(".startBreak").on("click", function() {
  circle.animate(1, {
    duration: 1,
    easing: 'easeInOut'
  }, function() {
    circle.animate(0, {
      duration: breakMS
    }, function() {
      document.title = "Break is over!";
      alert("Break is over!");
    });
});
});
});
};
