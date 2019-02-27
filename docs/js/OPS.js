const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();



const switchActiveClassInSideMenu = menuItemIndex => {
  $('.fixed-menu__item')
    .eq(menuItemIndex)
    .addClass('active')
    .siblings()
    .removeClass('active');
}
const performTransition = sectionEq => {
  if (inscroll) return;

  const sectionEqNumber = parseInt(sectionEq);

  if (!!sectionEqNumber === false)
    console.error('не верное значение для аргумента sectionEq');

  inscroll = true;

  const position = sectionEqNumber * -100 + '%';
  // console.log (sectionEqNumber)
  sections
    .eq(sectionEq)
    .addClass('active')
    .siblings()
    .removeClass('active');

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    inscroll = false;
    switchActiveClassInSideMenu(sectionEq);
  }, 50 + 200) //продолжительность транзишна + 300 мс - время для завершения инерции тач-устройств

};

const scrollToSection = direction => {
  const activeSection = sections.filter('.active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'next' && nextSection.length) {
    performTransition(nextSection.index());
    // console.log(nextSection);

  }

  if (direction === 'prev' && prevSection.length) {
    performTransition(prevSection.index());
    // console.log(prevSection.length);

  }
};

$('.wrapper').on('wheel', e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection('next');
  }

  if (deltaY < 0) {
    scrollToSection('prev');
  }
});

$('.wrapper').on('touchmove', e => {
  e.preventDefault();
});

$(document).on('keydown', e => {

  switch (e.keyCode) {
    case 38: scrollToSection('prev'); break;
    case 40: scrollToSection('next'); break;
  }
});

$('[data-scroll-to]').on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');

  performTransition(target);
});



if (isMobile) {
  $(window).swipe({
    swipe: function (event, direction) {
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
  });
};