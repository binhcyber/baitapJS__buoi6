function tinhtong() {
  var xValue = document.getElementById("soX").value * 1;
  var soMuValue = document.getElementById("soMu").value * 1;
  var sum = 0;
  var t = 1;
  for (var i = 1; i <= soMuValue; i++) {
    t = t * xValue;
    sum = sum + t;
  }
  document.getElementById("tong").innerHTML = sum;
  document.getElementById("tong").style.backgroundColor = "#d62828";
}
