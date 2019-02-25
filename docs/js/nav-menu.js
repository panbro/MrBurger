const hambMenu = document.querySelector('.hamburger-menu-link');
const navMenu = document.querySelector('.nav-menu');
const logoFullMenu = document.querySelector('.logo__full-menu');
const closeMenu = document.querySelector('.close__nav-menu');
const menuLink = document.querySelectorAll('.nav-menu__link');

function openNavMenu() {

  const hambClick = hambMenu.addEventListener('click', e => {
    const cur = e.target;
    navMenu.style.display = 'block';
    e.preventDefault();
    document.body.style.overflow = 'hidden';
  });
}
openNavMenu();

function closeNavMenu() {
  const closeFullMenuByCloseIcon = closeMenu.addEventListener('click', e => {
    navMenu.style.display = 'none';
    document.body.style.overflow = '';
  })
  const closeFullMenuByLogoIcon = logoFullMenu.addEventListener('click', e => {
    closeMenu.click();
  })
}
closeNavMenu();

function navigateInNavMenu() {
  for (const link of menuLink) {
    link.addEventListener('click', e => {
      navMenu.style.display = '';
      document.body.style.overflow = '';
    });
  }
}
navigateInNavMenu();