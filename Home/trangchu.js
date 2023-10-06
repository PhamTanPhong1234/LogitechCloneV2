/// First header js
function FirstBrandButton() {
   var brandBox = document.querySelector('.brand-box');
   var firstBtnArrow = document.querySelector('.show-brand-button i');
   if (brandBox.style.display === 'none') {
      brandBox.style.display = 'block';
      firstBtnArrow.style.transform = 'rotate(180deg)'
   } else {
      brandBox.style.display = 'none';
      firstBtnArrow.style.transform = 'rotate(0deg)'
   }
}
/// First header js
/// Open and Close /* desktop  */search box
var desktopOpenSearch = document.querySelector('.mini-nav .desktop-search');
var desktopCloseSearch = document.querySelector('#desktop-close-search');
var desktopSearchBox = document.querySelector('.desktop-search-box');
var desktopSearchInput = document.querySelector('#desktop-search-input');

desktopOpenSearch.addEventListener('click', function () {
   desktopSearchBox.style.display = 'block';
   desktopSearchBox.style.animationName = 'Search-box-motion-in';
   desktopSearchBox.style.animationFillMode = 'forwards';
   desktopSearchInput.focus();

});
desktopCloseSearch.addEventListener('click', function () {
   desktopSearchBox.style.animationName = 'Search-box-motion-out';
   desktopSearchBox.style.animationFillMode = 'forwards';
   setTimeout(() => {
      desktopSearchBox.style.display = 'none';
   }, 500);

});


/// Open and Close  /* desktop  */search box

/// Open and Close /* tablet */search box
var tabletOpenSearch = document.querySelector('#header .tablet-search-button');
var tabletCloseSearch = document.querySelector('#tablet-close-search');
var tabletSearchBox = document.querySelector('.tablet-search-box');
var tabletSearchInput = document.querySelector('#tablet-search-input');



tabletOpenSearch.addEventListener('click', function () {
   tabletSearchBox.style.display = 'block';
   tabletSearchBox.style.animationName = 'Search-box-motion-in';
   tabletSearchBox.style.animationFillMode = 'forwards';
   tabletSearchInput.focus();

});
tabletCloseSearch.addEventListener('click', function () {
   tabletSearchBox.style.animationName = 'Search-box-motion-out';
   tabletSearchBox.style.animationFillMode = 'forwards';
   setTimeout(() => {
      tabletSearchBox.style.display = 'none';
   }, 500);

});

/// Open and Close /* tablet  */search box
// transform: translateX(73%);
// filter: brightness(0.3);



//open and close /* tablet */ navigation box
var tabletElementOpen = document.querySelector('.tablet-nav-box #tablet-nav-button');
var tabletElementClose = document.querySelector('.tablet-box-element .tablet-box-close');
var tabletElementBox = document.querySelector('.tablet-box-element');
var mainHeader = document.querySelector('#main');

function handleScroll(event) {
   event.preventDefault();
}
function openTabletElementBox() {
   mainHeader.style.animationName = 'tablet-header-slideA-motion';
   mainHeader.style.animationFillMode = 'forwards';
   tabletElementBox.style.display = 'block';
   tabletElementBox.style.animationName = 'tablet-box-open-motion';
   tabletElementBox.style.animationFillMode = 'forwards';
   tabletElementBox.addEventListener('mousewheel', handleScroll);
   mainHeader.addEventListener('mousewheel', handleScroll);
   document.querySelector('html').style.overflow = 'hidden';
}
function closeTabletElementBox() {
   mainHeader.style.animationName = 'tablet-header-slideB-motion';
   mainHeader.style.animationFillMode = 'forwards';
   tabletElementBox.style.animationName = 'tablet-box-close-motion';
   tabletElementBox.style.animationFillMode = 'forwards';
   mainHeader.removeEventListener('mousewheel', handleScroll);
   document.querySelector('html').style.overflow = '';
   setTimeout(function () {
      tabletElementBox.style.display = 'none';
   }, 400);
}
tabletElementOpen.addEventListener('click', openTabletElementBox);
tabletElementClose.addEventListener('click', closeTabletElementBox);

//open and close /* tablet */ navigation box

//open and close /* mobile */ search box
var mobileOpenSearch = document.querySelector('#header .mobile-search-button');
var mobileCloseSearch = document.querySelector('#mobile-close-search');
var mobileSearchBox = document.querySelector('.mobile-search-box');
var mobileSearchInput = document.querySelector('#mobile-search-input');



mobileOpenSearch.addEventListener('click', function () {
   mobileSearchBox.style.display = 'block';
   mobileSearchBox.style.animationName = 'Search-box-motion-in';
   mobileSearchBox.style.animationFillMode = 'forwards';
   mobileSearchInput.focus();

});
mobileCloseSearch.addEventListener('click', function () {
   mobileSearchBox.style.animationName = 'Search-box-motion-out';
   mobileSearchBox.style.animationFillMode = 'forwards';
   setTimeout(() => {
      mobileSearchBox.style.display = 'none';
   }, 500);

});
//open and close /* mobile */ search box











//open and close /* mobile */ navigation box
var mobileElementOpen = document.querySelector('.mobile-nav-box #mobile-nav-button');
var mobileElementClose = document.querySelector('.mobile-box-element .mobile-box-close');
var mobileElementBox = document.querySelector('.mobile-box-element');


function openMobileElementBox() {
   mainHeader.style.animationName = 'mobile-header-slideA-motion';
   mainHeader.style.animationFillMode = 'forwards';
   mobileElementBox.style.display = 'block';
   mobileElementBox.style.animationName = 'mobile-box-open-motion';
   mobileElementBox.style.animationFillMode = 'forwards';
   mobileElementBox.addEventListener('mousewheel', handleScroll);
   mainHeader.addEventListener('mousewheel', handleScroll);
   document.querySelector('html').style.overflow = 'hidden';
}
function closeMobileElementBox() {
   mainHeader.style.animationName = 'mobile-header-slideB-motion';
   mainHeader.style.animationFillMode = 'forwards';
   mobileElementBox.style.animationName = 'mobile-box-close-motion';
   mobileElementBox.style.animationFillMode = 'forwards';
   mainHeader.removeEventListener('mousewheel', handleScroll);
   document.querySelector('html').style.overflow = '';
   setTimeout(function () {
      mobileElementBox.style.display = 'none';
   }, 400);
}
mobileElementOpen.addEventListener('click', openMobileElementBox);
mobileElementClose.addEventListener('click', closeMobileElementBox);

//open and close /* mobile */ navigation box

//function product slide
let currentSlide = 0;
const slideBox = document.querySelector('#slide-box');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector("#grid-product-navigation .prev");
const nextBtn = document.querySelector("#grid-product-navigation .next");
const dots = document.querySelectorAll('.dot');

let touchSx = 0;
let touchEx = 0;
/* slide */
function showSlide(n) {
   currentSlide = (n + slides.length) % slides.length;
   const tranValue = - currentSlide * (100 / slides.length);
   slideBox.style.transform = `translateX(${tranValue}%)`;
   updateDot();
}
function changeSlide(n) {
   showSlide(currentSlide + n);
}

function updateDot() {
   dots.forEach((dot, index) => {
      if (index === currentSlide) {
         dot.classList.add('dotAnimation');
      } else {
         dot.classList.remove('dotAnimation');

      }
   })
}
slideBox.addEventListener('touchstart', (e) => {
   touchSx = e.touches[0].clientX;
});
slideBox.addEventListener('touchmove', (e) => {
   e.preventDefault();
});
slideBox.addEventListener('touchend', (e) => {
   touchSx = e.changedTouches[0].clientX;
   const swipeDirect = touchSx - touchEx > 0 ? "left" : "right";
   if (swipeDirect === "left") {
      changeSlide(1);
   } else {
      changeSlide(-1)
   }
});

showSlide(currentSlide);
prevBtn.addEventListener('click', () => {
   changeSlide(-1);
})
nextBtn.addEventListener('click', () => {
   changeSlide(1);
})
dots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      showSlide(index);
   })
})
