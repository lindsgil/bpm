var CONTESTANT_ONE_BPM = 114;
var CONTESTANT_TWO_BPM = 97;
var CONTESTANT_THREE_BPM = 95;

function startTimer() {
var presentTime = document.getElementById('blink-two').innerHTML;
var timeArray = presentTime.split(/[:]+/);
var m = timeArray[0];
var s = checkSecond((timeArray[1] - 1));
if(s==59){m=m-1}
if (m<0) {
  return document.getElementById('blink-two').innerHTML = "0:00";
}
document.getElementById('blink-two').innerHTML =
m + ":" + s;
setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}

$(document).ready(function() {
    var f = document.getElementById('blink-one');
    var g = document.getElementById('blink-two');
    var h = document.getElementById('blink-three');

    var i = document.getElementById('header-one');
    var j = document.getElementById('header-two');
    var k = document.getElementById('header-three');

    var bpmOne = document.getElementById('bpm-one');
    var bpmTwo = document.getElementById('bpm-two');
    var bpmThree = document.getElementById('bpm-three');

    f.innerText = CONTESTANT_ONE_BPM;
    g.innerText = CONTESTANT_TWO_BPM;
    h.innerText = CONTESTANT_THREE_BPM;



});

    var bpmOne = document.getElementById('bpm-one');
    var bpmTwo = document.getElementById('bpm-two');
    var bpmThree = document.getElementById('bpm-three');
    var i = document.getElementById('header-one');
    var j = document.getElementById('header-two');
    var k = document.getElementById('header-three');

    var p = document.getElementById('blink-one');
    var q = document.getElementById('blink-two');
    var w = document.getElementById('blink-three');

    document.addEventListener('keydown', function(event) {
      let number = parseInt(p.innerText);
      let numberTwo = parseInt(q.innerText);
      let numberThree = parseInt(w.innerText);
      console.log("event.key", event.key);
      console.log(number);
      switch (event.key) {
        case "Enter":
          q.style.visibility = "hidden";
          p.style.visibility = "hidden";
          w.style.visibility = "hidden";
        break;
        case "u":
          number++;
          p.innerText = number;
          break;
        case "j":
          number--;
          if (number >= 0) {
            p.innerText = number;
            break;
          } else {
            p.innerText = 0;
            break;
          }
        case "i":
          numberTwo++;
          q.innerText = numberTwo;
          break;
        case "k":
          numberTwo--;
          if (numberTwo >= 0) {
            q.innerText = numberTwo;
            break;
          } else {
            q.innerText = 0;
            break;
          }
        case "o":
          numberThree++;
          w.innerText = numberThree;
          break;
        case "l":
          numberThree--;
          if (numberThree >= 0) {
            w.innerText = numberThree;
            break;
          } else {
            w.innerText = 0;
            break;
          }
        case "1":
        p.innerText = ":)";
        q.style.visibility = "hidden";
        w.style.visibility = "hidden";
        bpmOne.style.visibility = "hidden";
        bpmTwo.style.visibility = "hidden";
        bpmThree.style.visibility = "hidden";
        break;
        case "2":
        q.innerText = ":)";
        p.style.visibility = "hidden";
        w.style.visibility = "hidden";
        bpmOne.style.visibility = "hidden";
        bpmTwo.style.visibility = "hidden";
        bpmThree.style.visibility = "hidden";
        break;
        case "3":
        w.innerText = ":)";
        q.style.visibility = "hidden";
        p.style.visibility = "hidden";
        bpmOne.style.visibility = "hidden";
        bpmTwo.style.visibility = "hidden";
        bpmThree.style.visibility = "hidden";
        break;
        case "5":
        i.style.visibility = "hidden";
        j.style.visibility = "hidden";
        k.style.visibility = "hidden";
        p.style.visibility = "hidden";
        w.style.visibility = "hidden";
        bpmOne.style.visibility = "hidden";
        bpmTwo.style.visibility = "hidden";
        bpmThree.style.visibility = "hidden";
        q.style.marginLeft = "110px";
        q.style.marginTop = "170px";
        q.style.fontSize = "180px";
        q.innerText = 05 + ":" + 00;
        startTimer();
        break;

        default:
          return;
      }
    }, true);
