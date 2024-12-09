var a = "pink";
var s = "orange";
var d = "blue";

var q = "purple";
var w = "grey";
var e = "brown"


var ele = document.getElementById("key");

function crearDiv(color) {
  var div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.border = "2px solid black";
  div.style.background = color;
  document.getElementById("contenedor").appendChild(div);
}

document.addEventListener("keydown", function(event) {
  if (event.key === 'a') {
    ele.style.backgroundColor = a;
  } else if (event.key === 's') {
    ele.style.backgroundColor = s;
  } else if (event.key === 'd') {
    ele.style.backgroundColor = d;
  } else if (event.key === 'q')  {
    crearDiv(q);
  } else if (event.key === 'w')  {
    crearDiv(w);
  } else if (event.key === 'e')  {
    crearDiv(e);
  }
})