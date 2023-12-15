const parentEl = document.querySelector('#container');

let boxes = 16;

for (let i = 0; i < boxes; i++) {
  for (let j = 0; j < boxes; j++) {
    const newContent = document.createElement('div');
    newContent.className = 'item';
    newContent.style.flex = `0 0 calc(100% / ${boxes})`;
    parentEl.appendChild(newContent);
  }
}
