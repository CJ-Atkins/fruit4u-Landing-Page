const navBar = document.querySelector('nav'),
  burgerBtn = document.querySelector('#burger-menu'),
  navMobMenu = document.querySelector('.nav-links-container'),
  tabOne = document.querySelector('#product-tab-one'),
  tabTwo = document.querySelector('#product-tab-two'),
  tabThree = document.querySelector('#product-tab-three'),
  scrollToTopBtn = document.querySelector('.scroll-to-top'),
  mainContentOffsetTop = document.querySelector('main').offsetTop,
  heroImgContent = document.querySelector('.hero-img-content');

//
// EVENTS //
//
// INITIAL PAGE LOAD
showHideMobNavLinksResize();

// NAV BAR EVENT LISTENERS
// SROLL TO TOP BTN EVENT
window.onscroll = function () {
  navResize();
  showHideToTopBtn();
};

burgerBtn.addEventListener('click', function () {
  openCloseMobNavLinks();
});

window.onresize = function () {
  showHideMobNavLinksResize();
};

// HERO IMAGE TXT EVENT LISTENER
window.addEventListener('scroll', function () {
  heroTxtOpaciity();
});

// PRODUCTS REVIEW TAB EVENT LISTENERS
tabOne.addEventListener('click', function () {
  productTabSelect(event, '#apple-content');
});
tabTwo.addEventListener('click', function () {
  productTabSelect(event, '#banana-content');
});
tabThree.addEventListener('click', function () {
  productTabSelect(event, '#orange-content');
});

//
// FUNCTIONS //
//
// NAV BAR RESIZE FUNCTION
function navResize() {
  if (document.documentElement.scrollTop > 60 && window.innerWidth > 800) {
    navBar.style.backgroundColor = '#423a44';
    navBar.style.height = '45px';
  } else {
    navBar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    navBar.style.height = '90px';
  }
}

// PRODUCT REVIEWS TAB FUNCTION
function productTabSelect(event, product) {
  const tabContent = document.querySelectorAll('.products-review-tabs-content'),
    productTabs = document.querySelectorAll('.product-tabs');

  tabContent.forEach((tab) => (tab.style.display = 'none'));
  productTabs.forEach(
    (tab) => (tab.className = tab.className.replace(' active-product-tab', ''))
  );

  document.querySelector(product).style.display = 'grid';
  event.currentTarget.className += ' active-product-tab';
}

// MOBILE NAV OPEN CLOSE FUNCTION
function openCloseMobNavLinks() {
  if (navMobMenu.style.transform == 'translateY(-100%)') {
    navMobMenu.style.transform = 'translateY(0%)';
  } else {
    navMobMenu.style.transform = 'translateY(-100%)';
  }
}

// MOBILE NAV SHOW HIDE LINKS FUNCTION (WINDOW RESIZE)
function showHideMobNavLinksResize() {
  if (window.innerWidth > 800) {
    navMobMenu.style.transform = 'translateY(0%)';
  } else {
    navMobMenu.style.transform = 'translateY(-100%)';
  }
}

// TO TOP BTN SHOW HIDE FUNCTION
function showHideToTopBtn() {
  if (document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.opacity = '100';
  } else {
    scrollToTopBtn.style.opacity = '0';
  }
}

// HERO IMAGE TXT OPACITY ON SCROLL FUNCTION
function heroTxtOpaciity() {
  if (window.pageYOffset > 0) {
    let opac = 1 - window.pageYOffset / 0.75 / mainContentOffsetTop;
    heroImgContent.style.opacity = opac;
  }
}
