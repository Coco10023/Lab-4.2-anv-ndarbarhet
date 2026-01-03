const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});