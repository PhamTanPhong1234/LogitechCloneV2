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

/// Open and Close /* tablet  */search box
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