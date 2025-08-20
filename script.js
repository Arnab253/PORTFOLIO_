// Burger menu toggle
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) { // Added null check for robustness
  burger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate closing from window click listener
    navLinks.classList.toggle("active");
  });

  // Close burger menu after clicking any link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove("active");
    });
  });

  // Close menu when clicking anywhere else on the window
  window.addEventListener('click', (e) => {
    // Check if the click was outside the navLinks and outside the burger button
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

  // Prevent closing if clicking inside nav menu itself
  navLinks.addEventListener('click', (e) => {
    e.stopPropagation();
  });
}


// Typing effect (if used)
let typedText = document.querySelector("#typing"); // Changed to #typing as it's an ID
if (typedText) {
  const messages = ["Hey, I'm Arnab", "I'm a Full Stack Developer"]; // Corrected messages array
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = messages[index];
    if (isDeleting) {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % messages.length;
        setTimeout(typeEffect, 500); // Pause before typing next message
        return;
      }
    } else {
      charIndex++;
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // Pause before deleting
        return;
      }
    }

    typedText.textContent = currentText.substring(0, charIndex);
    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
  }
  typeEffect(); // Initial call to start the effect
}

// Scroll animation (slide-in from right) - This was already present and good
document.addEventListener("DOMContentLoaded", () => {
  const slideElements = document.querySelectorAll(".slide-in-right");
  slideElements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 200 * i);
  });
});
