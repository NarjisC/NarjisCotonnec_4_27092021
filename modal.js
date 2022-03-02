// responsive nav

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

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Input
// First Name
function firstName() {
  const firstNameInput = document.getElementById('firstname').value;
  const firstErrorMsg = document.querySelector(".firstErrorMsg");
  const isFirstNameValid = firstNameInput.trim().length >= 2;

  if (isFirstNameValid) {
    firstErrorMsg.classList.add('hidden');
  } else {
    firstErrorMsg.classList.remove('hidden');
  }
  return isFirstNameValid;
}

//Last Name
function lastName() {
  const lastNameInput = document.getElementById('lastname').value;
  const $lastErrorMsg = document.querySelector('.lastErrorMsg');
  const isLastNameValid = lastNameInput.trim().length >= 2;

  if (isLastNameValid) {
    $lastErrorMsg.classList.add('hidden');
  } else {
    $lastErrorMsg.classList.remove('hidden');
  }
  return isLastNameValid;
}



