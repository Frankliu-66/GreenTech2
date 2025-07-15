// script.js
// Author: Xuanshuo Liu.
// Date: 2025-07-14
// Description: This is JavaScript for GreenTech Solutions landing page - handles DOM interactions and dynamic behavior

document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded successfully.");

  // Step 2.1: Sticky Navigation Bar
  const navbar = document.getElementById("navbar");
  const stickyOffset = navbar.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= stickyOffset) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  // Step 2.2: Highlight current section link
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60;
      if (pageYOffset >= sectionTop) {
        current = section.querySelector("h2, h3")?.textContent?.toLowerCase();
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.textContent.toLowerCase().includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Step 2.3: Keyboard navigation highlight
  navLinks.forEach((link) => {
    link.addEventListener("focus", () => {
      link.classList.add("keyboard-focus");
    });
    link.addEventListener("blur", () => {
      link.classList.remove("keyboard-focus");
    });
  });

  // Step 3: Toggle Intro Paragraph
  const toggleBtn = document.getElementById("toggleIntroBtn");
  const introPara = document.getElementById("introParagraph");

  toggleBtn.addEventListener("click", () => {
    if (introPara.style.display === "none") {
      introPara.style.display = "block";
      toggleBtn.textContent = "Hide Intro";
    } else {
      introPara.style.display = "none";
      toggleBtn.textContent = "Show Intro";
    }
  });

  // Step 4: Product Highlights Interaction with custom messages
  const productDetails = {
    "Smart Solar Roof": "Smart Solar Roof is designed to blend into your home’s architecture while maximizing solar energy capture.",
    "EcoBattery": "EcoBattery stores clean energy efficiently, ensuring power during the night and cloudy days.",
    "GreenCharge Station": "GreenCharge Station provides fast, clean charging for all EV types, perfect for homes and businesses."
  };

  const learnMoreButtons = document.querySelectorAll(".learnMoreBtn");

  learnMoreButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productDiv = btn.parentElement;
      const title = productDiv.querySelector("h3").textContent.trim();
      let detail = productDiv.querySelector(".product-detail");

      if (!detail) {
        detail = document.createElement("p");
        detail.className = "product-detail";
        detail.textContent = productDetails[title] || "More product details coming soon.";
        productDiv.appendChild(detail);
        btn.textContent = "Hide Details";
      } else {
        const isVisible = detail.style.display !== "none";
        detail.style.display = isVisible ? "none" : "block";
        btn.textContent = isVisible ? "Learn More" : "Hide Details";
      }
    });
  });

  // Step 5.1: Footer - Display Current Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Step 5.2: Newsletter Email Submission
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("email");
  const thankYouMsg = document.getElementById("thankYouMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      thankYouMsg.style.display = "block";
      emailInput.value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
