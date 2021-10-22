function editNav() {
  document.getElementById("myTopNav").classList.toggle("show");
  console.log(click);
}

window.onclick = function(event) {
  if (!event.target.matches('.icon')) {
    var navbars = document.getElementsByClassName("topnav");
    var i;
    for (i = 0; i < navbars.length; i++) {
      var openNavbar = navbars[i];
      if (openNavbar.classList.contains('show')) {
        openNavbar.classList.remove('show');
      }
    }
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


