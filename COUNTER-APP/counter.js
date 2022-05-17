let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");

increase.addEventListener("click", Increase);

function Increase() {
  var change = parseInt(document.getElementById("changefig").value);
  change = isNaN(change) ? 0 : change;
  change++;
  document.getElementById("changefig").value = change;
}

reset.addEventListener("click", Reset);

function Reset() {
  document.getElementById("changefig").value = 0;
}
decrease.addEventListener("click", Decrease);

function Decrease() {
  var change = parseInt(document.getElementById("changefig").value);
  change = isNaN(change) ? 0 : change;
  change--;
  document.getElementById("changefig").value = change;
}
