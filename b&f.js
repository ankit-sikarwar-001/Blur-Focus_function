function getfocus() {
  document.getElementById("audi").play();
  document.getElementById("b1").style.backgroundColor = "lightgreen";
  document.getElementById("b2").style.backgroundColor = "white";
  document.getElementById("input").focus();
}
function getblur() {
  document.getElementById("audi").play();
  document.getElementById("b2").style.backgroundColor = "lightgreen";
  document.getElementById("b1").style.backgroundColor = "white";
  document.getElementById("input").blur();
}
