$(document).ready(function() {
    var f = document.getElementById('blink-one');
    var g = document.getElementById('blink-two');
    var h = document.getElementById('blink-three');
    setInterval(function() {
        f.style.color = (f.style.color == 'white' ? '' : 'white');
	g.style.color = (g.style.color == 'white' ? '' : 'white');
  h.style.color = (h.style.color == 'white' ? '' : 'white');
    }, 500);

});


    var p = document.getElementById('blink-one');
    var q = document.getElementById('blink-two');
    var w = document.getElementById('blink-three');

    document.addEventListener('keydown', function(event) {
      let number = parseInt(p.innerText);
      let numberTwo = parseInt(q.innerText);
      let numberThree = parseInt(w.innerText);
      console.log("event.key", event.key);
      switch (event.key) {
        case "Enter":
          q.style.visibility = "hidden";
          p.style.visibility = "hidden";
          w.style.visibility = "hidden";
        break;
        case "q":
          number++;
          p.innerText = number;
          break;
        case "a":
          number--;
          p.innerText = number;
          break;
        case "t":
          numberTwo++;
          q.innerText = numberTwo;
          break;
        case "g":
          numberTwo--;
          q.innerText = numberTwo;
          break;
        case "ArrowUp":
          numberThree++;
          w.innerText = numberThree;
          break;
        case "ArrowDown":
          numberThree--;
          w.innerText = numberThree;
          break;
        default:
          return;
      }
    }, true);
