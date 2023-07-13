var [seconds, minutes, hours] = [0, 0, 0];
        var displayTime = document.getElementById("displayTime");
        var timer = null;
        function stopwatch() {
            seconds++;
            if (seconds == 100) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            var h = hours < 10 ? "0" + hours : hours;
            var m = minutes < 10 ? "0" + minutes : minutes;
            var s = seconds < 10 ? "0" + seconds : seconds;

            displayTime.innerHTML = h + ":" + m + ":" + s;
        }
        function start() {
            if (timer != null) {
                clearInterval(timer);
            }
            timer = setInterval(stopwatch, 10);
        }

        function stop() {
            clearInterval(timer);

        }
        function reset() {
            clearInterval(timer);
            [seconds, minutes, hours] = [0, 0, 0];
            displayTime.innerHTML = "00:00:00";
        }