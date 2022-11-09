// Navbar
const nav = document.querySelector( '.navbar' );
const heroArea = document.querySelector('.hero-area');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver( stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${ navHeight }px`,
} );

headerObserver.observe( heroArea );
// Smooth Scroll
document.querySelector('.menu-options').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('menu-option')) {
    const id = e.target.getAttribute('href');
      document.querySelector( id ).scrollIntoView( {
          behavior: 'smooth',} );
  }
});



// Swiper Slider
var swiper = new Swiper( ".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
} );

// Tabbed component

const tabs = document.querySelectorAll( '.operations__tab' );
const tabsContainer = document.querySelector( '.operations__tab-container' );
const tabsContent = document.querySelectorAll( '.operations__content' );

tabsContainer.addEventListener( 'click', function ( e )
{
    const clicked = e.target.closest( '.operations__tab' );

    // Guard clause
    if ( !clicked ) return;

    // Remove active classes
    tabs.forEach( t => t.classList.remove( 'operations__tab--active' ) );
    tabsContent.forEach( c => c.classList.remove( 'operations__content--active' ) );

    // Activate tab
    clicked.classList.add( 'operations__tab--active' );

    // Activate content area
    document
        .querySelector( `.operations__content--${ clicked.dataset.tab }` ).classList.add( 'operations__content--active' );
} );



