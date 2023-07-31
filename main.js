// SIGN UP FOR NEWSLETTER MODAL

document.addEventListener('DOMContentLoaded', (event) => {
  let modal = document.getElementById("signUpModal");
  let btn = document.getElementById("signUpButton");
  let saasBtn = document.getElementById("saasBtn");
  let span = document.getElementsByClassName("close")[0];
  let spanCloseDocs = document.getElementsByClassName("close-docs-page")[0];

  function showModal() {
    modal.style.display = "flex";
  }

  function hideModal() {
    modal.style.display = "none";
  }

  function hideModalIfClickedOutside(event) {
    if (event.target == modal) {
      hideModal();
    }
  }

  if(btn) {
      btn.addEventListener("click", showModal);
      btn.addEventListener("touchstart", showModal);
  }

  if(saasBtn) {
      saasBtn.addEventListener("click", showModal);
      saasBtn.addEventListener("touchstart", showModal);
  }

  if(spanCloseDocs) {
      spanCloseDocs.addEventListener("click", hideModal);
      spanCloseDocs.addEventListener("touchstart", hideModal);
  }

  if(span) {
      span.addEventListener("click", hideModal);
      span.addEventListener("touchstart", hideModal);
  }

  window.addEventListener("click", hideModalIfClickedOutside);
  window.addEventListener("touchstart", hideModalIfClickedOutside);
});

// NAV MENU OPEN AND CLOSE FUNCTION

if(document.getElementById("nav-icon-open")) {
  document.getElementById("nav-icon-open").addEventListener("click", openMenu);
  document.getElementById("nav-icon-open").addEventListener("touchstart", openMenu);
}

if(document.getElementById("nav-icon-close")) {
  document.getElementById("nav-icon-close").addEventListener("click", closeMenu);
  document.getElementById("nav-icon-close").addEventListener("touchstart", closeMenu);
}

function openMenu() {
    console.log("Open clicked");
    document.getElementById("nav-links-mobile").style.width = "100%";
    document.getElementById("nav-icon-open").style.display = "none";
    document.getElementById("nav-icon-close").style.display = "block";
    document.body.classList.add("no-scroll");
}

function closeMenu() {
    document.getElementById("nav-links-mobile").style.width = "0%";
    document.getElementById("nav-icon-open").style.display = "block";
    document.getElementById("nav-icon-close").style.display = "none";
    document.body.classList.remove("no-scroll");
}



