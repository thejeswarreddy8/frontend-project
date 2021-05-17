"use strict";

function dropmenu() {
  var click = document.getElementById("dropdown-content");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

function dropmenu2() {
  var click = document.getElementById("dropdown-content2");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
function dropmenu3() {
  var click = document.getElementById("dropdown-content3");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
function imagechange() {
  var image = document.getElementById("down-arrow");
  var click = document.getElementById("dropdown-content");
  if (click.style.display === "block") {
    image.style.transform = "rotate(180deg)";
  } else if (click.style.display === "none") {
    image.style.transform = "rotate(0deg)";
  }
}
function imagechange2() {
  var image = document.getElementById("down-arrow2");
  var click = document.getElementById("dropdown-content2");

  if (click.style.display === "block") {
    image.style.transform = "rotate(180deg)";
  } else if (click.style.display === "none") {
    image.style.transform = "rotate(0deg)";
  }
}
function imagechange3() {
  var image = document.getElementById("down-arrow3");
  var click = document.getElementById("dropdown-content3");
  if (click.style.display === "block") {
    image.style.transform = "rotate(180deg)";
  } else if (click.style.display === "none") {
    image.style.transform = "rotate(0deg)";
  }
}

document.addEventListener("mouseup", function (e) {
  var click = document.getElementById("dropdown-content");
  var image = document.getElementById("down-arrow");
  if (!click.contains(e.target)) {
    click.style.display = "none";
    image.style.transform = "rotate(0deg)";
  }
});

document.addEventListener("mouseup", function (e) {
  var click = document.getElementById("dropdown-content2");
  var image = document.getElementById("down-arrow2");
  if (!click.contains(e.target)) {
    click.style.display = "none";
    image.style.transform = "rotate(0deg)";
  }
});
document.addEventListener("mouseup", function (e) {
  var click = document.getElementById("dropdown-content3");
  var image = document.getElementById("down-arrow3");
  if (!click.contains(e.target)) {
    click.style.display = "none";
    image.style.transform = "rotate(0deg)";
  }
});
