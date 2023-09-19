//Shrink header on scroll
let nav = document.querySelector(".header")
let val
window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 30){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
})

// Slideshow script

// const slides = document.getElementsByClassName("slides")

// const prev = document.querySelector(".prev")
// const next = document.querySelector(".next")
// let slideId = 0
// slides[slideId].style.display = "block"

// function showslide(state) {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     switch (state) {
//         case "prev":
//             slideId--;
//             break;
//         case "next":
//             slideId++;
//             break;
//     }

//     if (slideId >= slides.length) {
//         slideId = 0;
//     } else if (slideId < 0) {
//         slideId = slides.length - 1;
//     }

//     slides[slideId].style.display = "block";
//     console.log("hello " + slideId);
// }


// prev.addEventListener("click", () => showslide("prev") )
// next.addEventListener('click', () => showslide("next"))

let swiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2.5,
    spaceBetween: 25,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  