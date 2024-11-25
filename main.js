// pricing carsoule 
let currentIndex = 0;
    
function moveCarousel(direction) {
    const wrapper = document.querySelector('.carousel-wrapper');
    const totalCards = document.querySelectorAll('.pricing-card').length;
    const cardWidth = document.querySelector('.pricing-card').offsetWidth;
    const gap = 20; // Space between cards

    // Calculate the new index
    currentIndex += direction;

    // Loop through the carousel
    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    // Move the carousel
    wrapper.style.transform = `translateX(-${(cardWidth + gap) * currentIndex}px)`;
}

// Optional: Add drag-to-scroll functionality
const carousel = document.querySelector('.carousel-containerr');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    carousel.scrollLeft = scrollLeft - walk;
});

// end pricing


 // GSAP Animations for Sections
 gsap.to(".hero-section h1", { opacity: 1, y: 0, duration: 1, delay: 0.5 });
 gsap.to(".about-section", { opacity: 1, y: 0, duration: 1, delay: 1 });
 gsap.to(".services-section", { opacity: 1, y: 0, duration: 1, delay: 1.5 });
 gsap.to(".clients-section", { opacity: 1, y: 0, duration: 1, delay: 2 });
 gsap.to(".testimonials-section", { opacity: 1, y: 0, duration: 1, delay: 2.5 });


 $(document).ready(function () {
    // Open menu
    $('.hamburger-icon').click(function () {
        $('.nav-menu').css('left', '0');
        $('.overlay').fadeIn();
    });

    // Close menu when clicking the close button, overlay, or any menu item
    $('.overlay, .close-menu, .nav-menu li').click(function () {
        $('.nav-menu').css('left', '-100%');
        $('.overlay').fadeOut();
    });
    // Toggle dark mode
    $('.dark-mode-toggle').click(function () {
        $('body').toggleClass('dark-mode');
        $(this).text($('body').hasClass('dark-mode') ? 'ִֶָ࣪☾' : '☼');
    });
});

$(document).ready(function () {
  
  // Show scroll-up button after scrolling down 200px
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-up').fadeIn();  // Fade in the button when scrolled down
        } else {
            $('.scroll-up').fadeOut(); // Fade out the button when at the top
        }
    }); });

    // Scroll to the top when the button is clicked
    $('.scroll-up').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);  // Instant smooth scroll
    });



$(document).ready(function () {
let slideIndex = 0;

function moveSlide(step) {
const totalSlides = $('.carousel__item').length;
slideIndex += step;

if (slideIndex < 0) {
  slideIndex = totalSlides - 1;
} else if (slideIndex >= totalSlides) {
  slideIndex = 0;
}

// Move the carousel
$('.carousel__wrapper').css('transform', 'translateX(' + (-slideIndex * 100) + '%)');
}

// Next and Previous buttons
$('.carousel__prev-btn').click(function () {
moveSlide(-1);
});

$('.carousel__next-btn').click(function () {
moveSlide(1);
});

// Auto-slide every 3 seconds
setInterval(function () {
moveSlide(1);
}, 5000);
});

// loader
setTimeout(() => {
    document.querySelector(".loader-container").style.display = "none";
  }, 3000);
  
  // loader gsap
  gsap.to('.box', {
    yoyo: true,
    repeat: -1,
    duration: 1,
    stagger: 0.2,
    scale: 0.7,
    ease: 'power2.inOut'
  });
  
 
