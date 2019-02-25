const allItemsCrew = document.querySelectorAll('.crew__item');
const allMenuSubtitles = document.querySelectorAll('.menu__subtitle');
const menuClose = document.querySelectorAll('.menu__close');

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

for (trigger of allMenuSubtitles) {
  trigger.addEventListener('click', controlMenuItems);

  function controlMenuItems(e) {

    e.preventDefault();
    const currentTrigger = e.currentTarget;
    if (currentTrigger.closest('.menu__item_active')) {
      closeItem(currentTrigger);
    }
    else if (currentTrigger) {
      closeItem(currentTrigger);
      openItem(currentTrigger);
    }
  }
}

function closeItem(trigger) {
 for (closeButton of menuClose) {
  const closeMenuByCloseItem = closeButton.addEventListener('click', e => {
    const closeTarget = e.currentTarget;
    const activeClose = closeTarget.closest('.menu__item_active');
    activeClose.classList.remove('menu__item_active');
    console.log(activeClose)
  }) 
}
  for (trigger of allMenuSubtitles) {
    const activeItem = trigger.closest('.menu__item');
    activeItem.classList.remove('menu__item_active');
  }
}

function openItem(trigger) {
  const activeItem = trigger.closest('.menu__item');
  activeItem.classList.add('menu__item_active');
}