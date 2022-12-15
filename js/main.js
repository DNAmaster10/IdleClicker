var totalGuests = 0;

var i = 1;

function myLoop() {
  setTimeout(function() {
    console.log('hello');
    i++;
    if (i < 10) {
      myLoop();
    }
  }, 500)
}

myLoop();