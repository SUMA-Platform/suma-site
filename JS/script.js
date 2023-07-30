document.addEventListener('DOMContentLoaded', (event) => {
  let modal = document.getElementById("signUpModal");
  let btn = document.getElementById("signUpButton");
  let saasBtn = document.getElementById("saasBtn");
  let span = document.getElementsByClassName("close")[0];
  let spanCloseDocs = document.getElementsByClassName("close-docs-page")[0];

  if(btn) {
      btn.onclick = function() {
        modal.style.display = "flex";
      }
  }

  if(saasBtn) {
      saasBtn.onclick = function() {
          modal.style.display = "flex";
      }
  }

  if(spanCloseDocs) {
      spanCloseDocs.onclick = function() {
        modal.style.display = "none";
      }
  }

  if(span) {
      span.onclick = function() {
        modal.style.display = "none";
      }
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});

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



