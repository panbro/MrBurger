const hambMenu = document.querySelector('.hamburger-menu-link');
const navMenu = document.querySelector('.nav-menu');
const logoFullMenu = document.querySelector('.logo__full-menu');
const closeMenu = document.querySelector('.close__nav-menu');


const hambClick = hambMenu.addEventListener('click', e=> {
  navMenu.style.display = 'block';
  e.preventDefault();
  document.body.style.overflow = 'hidden';
});

const closeFullMenuByCloseIcon = closeMenu.addEventListener('click', e=>{
  navMenu.style.display = 'none';
  document.body.style.overflow = '';
})
const closeFullMenuByLogoIcon = logoFullMenu.addEventListener('click', e=>{
  navMenu.style.display = 'none';
  document.body.style.overflow = '';
})

var menuItem = document.querySelectorAll('.nav-menu__item');
for (const item of menuItem) {
  item.addEventListener('click', e=> {
    navMenu.style.display = 'none';
    document.body.style.overflow = '';
  });
}



