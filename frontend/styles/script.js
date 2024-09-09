// script.js

document.getElementById("menu-toggle").addEventListener("click", function() {
    const nav = document.querySelector(".nav");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
  