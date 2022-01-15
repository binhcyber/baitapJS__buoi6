function timSoNguyenNhoNhat() {
  var s = 0;
  var n = 0;

  while (s < 10000) {
    n++;
    s = s + n;
  }
  document.getElementById("soNguyenBeNhat").innerHTML =
    "So Nguyen nho nhat : " + n;
  document.getElementById("soNguyenBeNhat").style.backgroundColor = "#d62828";
  document.getElementById("tongSonNguyenBeNhat").innerHTML =
    "tong so nguyen nhỏ nhất : " + s;
  document.getElementById("tongSonNguyenBeNhat").style.backgroundColor =
    "#d62828";
}
