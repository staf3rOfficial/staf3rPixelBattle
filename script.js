import { db, ref, onValue, set } from './firebase.js';

const canvas = document.getElementById('canvas');
const gridSize = 32;
let currentColor = '#000000';

// Создание пикселей
for (let y = 0; y < gridSize; y++) {
  for (let x = 0; x < gridSize; x++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.dataset.x = x;
    pixel.dataset.y = y;
    canvas.appendChild(pixel);
  }
}

// Цвет при клике
canvas.addEventListener('click', (e) => {
  if (!e.target.classList.contains('pixel')) return;
  const x = e.target.dataset.x;
  const y = e.target.dataset.y;
  const pixelRef = ref(db, `pixels/${x}_${y}`);
  set(pixelRef, currentColor);
});

// Смена цвета
document.querySelectorAll('.color').forEach(btn => {
  btn.addEventListener('click', () => {
    currentColor = btn.dataset.color;
  });
});

// Получение состояния холста
const pixelsRef = ref(db, 'pixels');
onValue(pixelsRef, (snapshot) => {
  const data = snapshot.val();
  if (!data) return;

  document.querySelectorAll('.pixel').forEach(pixel => {
    const x = pixel.dataset.x;
    const y = pixel.dataset.y;
    const color = data[`${x}_${y}`];
    if (color) pixel.style.backgroundColor = color;
  });
});
