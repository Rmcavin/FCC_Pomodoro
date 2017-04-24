window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: 'red',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 2
    });

    circle.animate(3);
};
