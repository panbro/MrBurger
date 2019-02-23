const allItemsCrew = document.querySelectorAll('.crew__item');
const allMenuItems = document.querySelectorAll('.menu__item');

//для crew

for (item of allItemsCrew) {
  item.addEventListener('click', controlCrewItems);
}

function controlCrewItems(e) {
  e.preventDefault();
  const curCrewItem = e.currentTarget;
  if (curCrewItem.classList.contains('crew__item_active')) {
    closeCrewItem(item);
  } else if (curCrewItem) {
    closeCrewItem(item);
    openCrewItem(curCrewItem);
  }
}

function closeCrewItem(item) {
  for (item of allItemsCrew) {
    item.classList.remove('crew__item_active');
    item.querySelector('.crew__full-thumb').style.height = 0;
  }
}

function openCrewItem(item) {
  const fullThumb = item.querySelector('.crew__full-thumb');
  const thumb = fullThumb.firstElementChild;
  const itemHeight = thumb.getBoundingClientRect().height;

  item.classList.add('crew__item_active');
  fullThumb.style.height = `${itemHeight}px`;
}


//для menu
for (item of allMenuItems) {
  item.addEventListener('click', controlMenuItems);
}

function controlMenuItems(e) {
  e.preventDefault();
  const curMenuItem = e.currentTarget;
  if (curMenuItem.classList.contains('menu__item_active')) {
    closeItem(item);
  } else if (curMenuItem) {
    closeItem(item);
    openItem(curMenuItem);
  }
}

function closeItem(item) {
  for (item of allMenuItems) {
    item.classList.remove('menu__item_active');
    item.querySelector('.menu__full-desc').style.width = 0;
  }
}

function openItem(item) {
  const fullDesc = item.querySelector('.menu__full-desc');
  const descr = fullDesc.firstElementChild;
  //const itemWidth = descr.getBoundingClientRect().width;

  const openMenu = item.classList.add('menu__item_active');
  //fullDesc.style.width = `${itemWidth}px`;
  fullDesc.style.width = '100%';
}