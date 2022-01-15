function tinhGiaiThua() {
  var numValue = document.getElementById("txtgiaithua").value * 1;
  var sum = 1;
  var i = 1;
  for (i; i <= numValue; i++) {
    sum = sum * i;
  }
  document.getElementById("xuatThongBao").innerHTML = sum;
  document.getElementById("xuatThongBao").style.backgroundColor = "#d62828";
}
//3! = 3 * 2 * 1 = 6
