const container = document.querySelector(".conteiner")
const swiper = new Swiper('.hero__swiper', {

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
  },


});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false
});
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__list');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('list__nav--active');

    document.body.classList.toggle('stop-scroll');

});

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('list__nav--active');

    document.body.classList.remove('stop-scroll');

  });
});


document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form__search").classList.add("form__active");
  this.classList.add("active");
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form__search");
  if (!target.closest(".form-conteiner")) {
  form.classList.remove("form__active");
    form.querySelector(".form__input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
});

document.querySelector(".form-btn__close").addEventListener("click", function() {
  document.querySelector(".form__search").classList.remove("form__active");
  this.classList.remove("active");
});


