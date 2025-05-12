// Generate image tiles and sidebar links
const total = 50;
const sidebar = document.querySelector('#sidebar ul');
const content = document.getElementById('content');

for (let i = 1; i <= total; i++) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#img${i}`;
  a.textContent = `Tile ${String(i).padStart(2, '0')}`;
  li.appendChild(a);
  sidebar.appendChild(li);

  a.addEventListener('click', () => {
    sidebar.querySelectorAll('a').forEach(l => l.classList.remove('active'));
    a.classList.add('active');
  });

  const section = document.createElement('section');
  section.className = 'section';
  section.id = `img${i}`;

  const img = document.createElement('img');
  img.src = `images/${i}.jpg`;
  img.alt = `Tile ${i}`;
  section.appendChild(img);

  content.appendChild(section);
}

// Modal logic
const modal = document.getElementById('modal');
document.getElementById('helpBtn').onclick = () => modal.classList.add('show');
document.getElementById('closeModal').onclick = () => modal.classList.remove('show');
modal.onclick = e => { if (e.target === modal) modal.classList.remove('show'); };

// Music toggle
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = '🎵';
  } else {
    music.play();
    musicBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
});