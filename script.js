document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const texts = [
    "HELLO HARSHA HERE ",
    "FULL STACK DEVELOPER",
    "CONTENT CREATOR",
    "FOUNDER OF CRAZY CODERS",
];

let index = 0;

function changeText() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.style.opacity = 0; // Start by fading out

    setTimeout(() => {
        dynamicText.innerText = texts[index]; // Change the text
        dynamicText.style.opacity = 1; // Fade back in
    }, 500); // Wait for half a second before changing the text

    index = (index + 1) % texts.length; // Move to the next index
}
document.addEventListener('DOMContentLoaded', () => {
    const elementsToShow = document.querySelectorAll('.fade-in');
  
    const showElements = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust this for when the animation triggers
  
      elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
  
        if (elementTop < triggerBottom) {
          element.classList.add('visible');
          element.classList.remove('hidden');
        } else {
          element.classList.remove('visible');
          element.classList.add('hidden');
        }
      });
    };
  
    window.addEventListener('scroll', showElements);
    showElements(); // Initial check
  });
  

// Change text every second
setInterval(changeText, 2000);
// Function to reveal sections with animation
function revealSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.classList.add('visible');
  });
}

// Trigger reveal on page load
window.onload = revealSections;

