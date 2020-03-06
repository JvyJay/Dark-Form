// Dark Mode Toggle
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  container.classList.toggle('dark');
  toggle.classList.toggle('darkBtn');
});
