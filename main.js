// Navbar//
let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick= () =>{
  navBar.classList.toggle('active');
 saidBar.classList.remove('active');
 search.classList.remove('active');
}

//Saidbar//

let saidBar = document.querySelector('.said');
document.querySelector('#user-Btn').onclick = () => {
  saidBar.classList.toggle('active');
  navBar.classList.remove('active');
  search.classList.remove('active');
}
// search box // 
let search = document.querySelector('.search-box');
document.querySelector('#searchicon').onclick = () =>{
  search.classList.toggle('active');
  navBar.classList.remove('active');
  saidBar.classList.remove('active');
}

// windw//
window.onscroll = () =>{
  navBar.classList.remove('active');
  saidBar.classList.remove('active');
  search.classList.remove('active');
  if (window.scrollY > 60) { // show scroll//
    document.querySelector('#scroll-up').classList.add('active');
  } else {
    document.querySelector('#scroll-up').classList.remove('active');
  }
}

// slider
var swiper = new Swiper(".box-imges", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});


/// onclick button///
let filter = document.querySelectorAll('.fillter .button');
let filterItem = document.querySelectorAll('.producuts .row .col');

filter.forEach(button =>{
  button.onclick = () =>{
    filter.forEach(btn => btn.classList.remove('hide'));
    button.classList.add('move');
    
    let dateFilter = button.getAttribute('data-filter');
    
    filterItem.forEach(item =>{
      item.classList.remove('move');
      item.classList.add('hide');
      
     if(item.getAttribute('data-item') == dateFilter|| dateFilter =='all'){
       item.classList.remove('hide');
       item.classList.add('move');
     } 
      
    
    });
    
  }
});


var swiper = new Swiper(".client-box", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
 },
  breakpoints: {
  640: {
  slidesPerView: 2,
  spaceBetween: 20,
  },
  768: {
  slidesPerView: 4,
  spaceBetween: 40,
  },
  1024: {
  slidesPerView: 5,
  spaceBetween: 50,
  },
  },loop:true,
  });
    // slider ///
var swiper = new Swiper(".brand-box", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  loop: true,
});