var names = ["diva", "widowmaker", "Sombra", "Junker", "echo", "illari"];

for (var name of names) {
  const image = document.getElementById(name+"-image")
  const details = document.getElementById(name+"-details")

  image.addEventListener("click", function() {
    details.style.display = "block"
  })
}
