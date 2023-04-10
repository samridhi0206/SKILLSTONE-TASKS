function nextImg() {
  var image = document.getElementById("myImage");
  if (image.src.match("images/picture1.png")) {
    image.src = "images/picture2.png";
  } else if (image.src.match("images/picture2.png")) {
    image.src = "images/picture3.png";
  } else {
    image.src = "images/picture1.png";
  }
}

function prevImg() {
  var image = document.getElementById("myImage");
  if (image.src.match("images/picture3.png")) {
    image.src = "images/picture2.png";
  } else if (image.src.match("images/picture2.png")) {
    image.src = "images/picture1.png";
  } else {
    image.src = "images/picture3.png";
  }
}
