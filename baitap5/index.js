function ktsnt(n) {
  // var numberValue = document.getElementById("inSoNguyenTo").value * 1;
  var flag = true;
  if (n < 2) {
    return (flag = false);
  } else {
    var i = 2;
    while (i < n) {
      if (n % i == 0) {
        flag = false;
        break;
      }
      i++;
    }
  }
  return flag;
}

function lietkeSoNguyenTo() {
  var numberValue = document.getElementById("inSoNguyenTo").value * 1;
  result = "";
  var i = 0;
  check = 0;
  while (i < numberValue) {
    check = ktsnt(i);
    if (check == true) {
      result += i + " ";
    }
    ++i;
  }
  document.getElementById("soNguyenTo").innerHTML = result;
  document.getElementById("soNguyenTo").style.backgroundColor = "#d62828";
}
