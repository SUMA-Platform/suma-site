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
  }

  if(saasBtn) {
      saasBtn.addEventListener("click", showModal);
  }

  if(spanCloseDocs) {
      spanCloseDocs.addEventListener("click", hideModal);
  }

  if(span) {
      span.addEventListener("click", hideModal);
  }

  window.addEventListener("click", hideModalIfClickedOutside);
});

// NAV MENU OPEN AND CLOSE FUNCTION

if(document.getElementById("nav-icon-open")) {
  document.getElementById("nav-icon-open").addEventListener("click", openMenu);
}

if(document.getElementById("nav-icon-close")) {
  document.getElementById("nav-icon-close").addEventListener("click", closeMenu);
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

/* PRICING SUMA FOR FUNDS MODAL */

document.addEventListener("DOMContentLoaded", function() {

  const pricingBtnCard1 = document.getElementById("pricing-btn-card1")
  const pricingBtnCard2 = document.getElementById("pricing-btn-card2")
  const pricingBtnCard3 = document.getElementById("pricing-btn-card3")
  const firstCardModal = document.getElementById("card1-modal")
  const secondCardModal = document.getElementById("card2-modal")
  const thirdCardModal = document.getElementById("card3-modal")
  const spanCloseModalFirst = document.getElementById("close-modal1")
  const spanCloseModalSecond = document.getElementById("close-modal2")
  const spanCloseModalThree = document.getElementById("close-modal3")


  // Code for Card 1
  
  pricingBtnCard1.addEventListener("click", function(e) {
    firstCardModal.style.display = "block"

    // Check if Hubspot form as already been loaded

    if (!window.hbsptFirstCardFormLoaded) {
      let hubspotFirstFormScript = document.createElement ("script")
      hubspotFirstFormScript.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
      hubspotFirstFormScript.async = true
      hubspotFirstFormScript.onload = function() {
        hbspt.forms.create({
          region: "eu1",
          portalId: "139764545",
          formId: "3d7ea507-7811-4a7e-8c36-26710271d753",
          target: "#hubspotFormContainerCard1"
        })
      }
      document.body.appendChild(hubspotFirstFormScript)
      window.hbsptFirstCardFormLoaded = true
    }
  })

  // Close Card 1 modal on "X" click

  spanCloseModalFirst.addEventListener("click", function() {
    firstCardModal.style.display = "none"
  })

  // Close Card 1 modal when clicked outside
  window.addEventListener("click", function(event) {
    if (event.target == firstCardModal) {
      firstCardModal.style.display = "none"
    }
  })

  // Code for Card 2
  
  pricingBtnCard2.addEventListener("click", function(e) {
    secondCardModal.style.display = "block"

    // Check if Hubspot form as already been loaded

    if (!window.hbsptSecondCardFormLoaded) {
      let hubspotSecondFormScript = document.createElement ("script")
      hubspotSecondFormScript.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
      hubspotSecondFormScript.async = true
      hubspotSecondFormScript.onload = function() {
        hbspt.forms.create({
          region: "eu1",
          portalId: "139764545",
          formId: "b427d615-d91e-4f49-b07e-c78c2a586469",
          target: "#hubspotFormContainerCard2"
        })
      }
      document.body.appendChild(hubspotSecondFormScript)
      window.hbsptSecondCardFormLoaded = true
    }
  })

  // Close Card 2 modal on "X" click

  spanCloseModalSecond.addEventListener("click", function() {
    secondCardModal.style.display = "none"
  })

  // Close Card 2 modal when clicked outside
  window.addEventListener("click", function(event) {
    if (event.target == secondCardModal) {
      secondCardModal.style.display = "none"
    }
  })



  // Code for Card 3

  pricingBtnCard3.addEventListener("click", function(e) {
    thirdCardModal.style.display = "block"

    // Check if Hubspot form has already been loaded

    if (!window.hbsptThirdCardFormLoaded) {
      let hubspotThirdFormScript = document.createElement("script")
      hubspotThirdFormScript.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
      hubspotThirdFormScript.async = true
      hubspotThirdFormScript.onload = function() {
        hbspt.forms.create({
          region: "eu1",
          portalId: "139764545",
          formId: "87d79b4c-fb45-43e6-a36d-4ddb3cbe46e1",
          target: "#hubspotFormContainerCard3"
        })
      }
      document.body.appendChild(hubspotThirdFormScript)
      window.hbsptThirdCardFormLoaded = true
    }
  })

  // Close modal on "X" click

  spanCloseModalThree.addEventListener("click", function() {
    thirdCardModal.style.display = "none"
  })

  // Close modal when clicked outside
  window.addEventListener("click", function(event) {
    if (event.target == thirdCardModal) {
      thirdCardModal.style.display = "none"
    }
  })

})



