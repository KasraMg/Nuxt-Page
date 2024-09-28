let body = document.querySelector('body')
let toggle_btn = document.querySelectorAll('.toggle_btn')
const loader = document.querySelector('.loader')

toggle_btn.forEach(toggle => {
  toggle.addEventListener('click', () => { 
    body.classList.toggle('body-white') 
    document.querySelectorAll('a').forEach(item => {
      item.classList.toggle('c-dark')
    }) 
  }) 
})


window.addEventListener('load', () => {
  loader.style.display = 'none'
  window.scrollTo(1, 1)
  AOS.init();
  iziToast.show({
    theme: 'Success',
    icon: 'material-icons',
    title: 'Hey',
    message: 'Did you know that this site also has a PWA feature?',
    position: 'bottomRight',
    progressBarColor: 'rgb(0, 255, 184)',
  });
})
 
// iziToast
iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX'
});
// iziToast

//service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((regiter) => {
      console.log("Pwa Registered Successfylly");
    })
    .catch((err) => console.log(err));
}
else {
  console.log("Not Support");
}
//service Worker
 

// sliders

var swiper = new Swiper(".mySwiper", {
  rewind: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  rewind: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  rewind: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
var swiper4 = new Swiper(".mySwiper4", {
  rewind: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
