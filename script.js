document.addEventListener('DOMContentLoaded', (event) => {
    let modal = document.getElementById("signUpModal");
    let btn = document.getElementById("signUpButton");
    let saasBtn = document.getElementById("saasBtn");
    let span = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "flex";
    }

    saasBtn.onclick = function() {
        modal.style.display = "flex";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });