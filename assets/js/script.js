const ele = document.getElementById("ele1");
const texto = document.getElementById("text1");

texto.addEventListener("click", function() {
  pintar("yellow");
})


function pintar(color) {
    ele.style.backgroundColor = color;
}