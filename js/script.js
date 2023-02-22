let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick=()=>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick=()=>{
    document.querySelector('#search-form').classList.remove('active');
}

// Swipper Script
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 500,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 500,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
   loop:true,
    brekpoints:{
      0:{
        slidePerView:1,
      },
      640:{
        slidePerView:2,
      },
      768:{
        slidePerView:3,
      },
      1024:{
        slidePerView:4,
      },
    }
  });