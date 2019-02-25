const buttons = document.querySelectorAll('.reviews__btn');
const reviews = document.querySelectorAll('.reviews__item-hover');
const template = document.querySelector('#modal-template').innerHTML;

const myForm = document.querySelector('#order');
const sendBtn = document.querySelector('#send-btn');
const deliveryModal = document.querySelector('.delivery-modal');

const modal = createModal();

for (var button of buttons) {
  button.addEventListener('click', e => {
    e.preventDefault();
    modal.setContent();
    modal.open();
  });
};

for (var review of reviews) {
  review.addEventListener('click', e => {
    e.preventDefault();
    let content = review.cloneNode(true),
    btn = content.querySelector('.reviews__btn');
    content.removeChild(btn);
    modal.setContent(content.innerHTML);
  })
};

function createModal(content) {
  const container = document.createElement('div');
  container.className = 'popup';
  container.innerHTML = template;

  const contentBlock = container.querySelector('.popup__content');

  const closeBtn = container.querySelector('.popup__close');
  closeBtn.addEventListener('click', e => {
    document.body.removeChild(container);
  });

  const orderBtn = container.querySelector('.btn_popup_close');
  orderBtn.innerText = 'Закрыть';
  orderBtn.addEventListener('click', e => {
    e.preventDefault();
    document.body.removeChild(container);
  });

  const closeWithOverlay = container.querySelector('.overlay');
  closeWithOverlay.addEventListener('click', e => {
    if (e.target === closeWithOverlay) {
      closeBtn.click();
    }
  });

  return {
    open() {
      document.body.appendChild(container);
    },
    close() {
      document.body.removeChild(container);
    },
    setContent(content) {
      contentBlock.innerHTML = content;
    },
    hideSmallBtn() {
      closeBtn.style.display = 'none';
    },
    showButton() {
      orderBtn.style.display = 'flex';
      orderBtn.style.alignSelf = 'center';
    }
  };
}

//form

myForm.onsubmit = function(e){
  e.preventDefault();

  const formData = new FormData(myForm);
  formData.append("to", "kapitandivan@mail.ru");

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail/");
  xhr.send(formData);
  
  xhr.addEventListener('load', e=>{
  let resp = xhr.response;

    if(resp!=null){
      deliveryModal.classList.add('active');
      deliveryModal.querySelector('.delivery-modal__text').innerHTML = "Ваш заказ отправлен на обработку";
      const body = document.querySelector('body');
      body.classList.add('body-fixed');
      setTimeout(function(){
        deliveryModal.classList.remove('active');
        body.classList.remove('body-fixed');
      }, 3000);
    } else {
      deliveryModal.classList.add('active');
      deliveryModal.querySelector('.delivery-modal__text').innerHTML = "Ошибка отправки";
      const body = document.querySelector('body');
      body.classList.add('body-fixed');
      setTimeout(function(){
        deliveryModal.classList.remove('active');
        body.classList.remove('body-fixed');
      }, 3000);
    }

    deliveryModal.addEventListener('click', e=>{
      deliveryModal.classList.remove('active');
      const body = document.querySelector('body');
      body.classList.remove('body-fixed');
    });

    const closeDeliveryModal = document.querySelector('.btn_delivery-modal');
    closeDeliveryModal.addEventListener('click', e=>{
      deliveryModal.classList.remove('active');
      const body = document.querySelector('body');
      body.classList.remove('body-fixed');
    });    
  });
};
