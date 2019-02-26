const allItemsCrew = document.querySelectorAll('.crew__item');
const allMenuSubtitles = document.querySelectorAll('.menu__subtitle');
const menuClose = document.querySelectorAll('.menu__close');
const crewNames = document.querySelectorAll('.crew__name');

//для crew

for (crewNameItem of crewNames) {
  crewNameItem.addEventListener('click', controlCrewItems);
}
for (allOfCrewItems of allItemsCrew) {
}


function controlCrewItems(e) {
  e.preventDefault();
  const curCrewNameItem = e.currentTarget;
  let currCrewItem = curCrewNameItem.closest('.crew__item');
  if (currCrewItem.classList.contains('crew__item_active')) {
    closeCrewItem(currCrewItem);
  } else if (currCrewItem) {
    closeCrewItem(currCrewItem);
    openCrewItem(currCrewItem);
  }
}
function closeCrewItem(currCrewItem) {
  Array.from(allItemsCrew).forEach(elem => {
    elem.querySelector('.crew__full-thumb').style.height = 0;
    elem.classList.remove('crew__item_active');
  });

}

function openCrewItem(currCrewItem) {
  const fullThumb = currCrewItem.querySelector('.crew__full-thumb');
  const thumb = fullThumb.firstElementChild;
  const itemHeight = thumb.getBoundingClientRect().height;
  currCrewItem.classList.add('crew__item_active');
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