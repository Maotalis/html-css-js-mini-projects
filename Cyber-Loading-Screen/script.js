const loader = document.getElementById('loader');
const main = document.getElementById('main-content');

for (let i = 0; i < 100; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * window.innerWidth + 'px';
  s.style.top = Math.random() * window.innerHeight + 'px';
  s.style.animationDuration = (1 + Math.random() * 2) + 's';
  loader.appendChild(s);
}

setTimeout(() => {
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
    main.style.display = 'flex';
  }, 2000);
}, 6000);