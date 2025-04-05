// Parallax Effect
const layers = document.querySelectorAll('.layer');
document.addEventListener('mousemove', e => {
  layers.forEach((layer, i) => {
    const speed = (i + 1) * 0.02;
    const x = (window.innerWidth / 2 - e.pageX) * speed;
    const y = (window.innerHeight / 2 - e.pageY) * speed;
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});


new Typed("#typed", {
    strings: [
      "Developer.",
      "Code Wizard.",
      "Frontend Pro.",
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: "|",
  });

// Handle Active Link
const navLinks = document.querySelectorAll('.nav-links ul li a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Handle Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');  // Toggle the 'active' class for hamburger animation
});

// Scroll animations for progress bars
window.addEventListener('scroll', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        bar.querySelector('::before').style.width = bar.dataset.progress + '%';
      }
    });
});

