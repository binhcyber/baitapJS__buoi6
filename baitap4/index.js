function xuatTheDivChanLe() {
  var chan = "";
  var le = "";
  for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      chan += "<div>thẻ chẳn : " + i + "</div>";
    } else {
      le += "<div>thẻ lẻ : " + i + "</div>";
    }
  }
  document.getElementById("divChan").innerHTML = chan;
  document.getElementById("divChan").style.backgroundColor = "#d62828";
  document.getElementById("divle").innerHTML = le;
  document.getElementById("divle").style.backgroundColor = "#aacc00";
}
