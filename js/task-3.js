const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

nameIn.addEventListener('input', () => {
  const item = nameIn.value.trim();
  nameOut.textContent = item || 'Anonymous';
});
