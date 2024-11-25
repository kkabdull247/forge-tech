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
  
 //   mouse follower

 // Select the elements
const outerCircle = document.querySelector(".outer-circle");
const innerDot = document.querySelector(".inner-dot");
const message = document.querySelector(".message");

// Initialize mouse and element positions
let mouseX = 0, mouseY = 0; // Mouse coordinates
let outerX = 0, outerY = 0; // Outer circle coordinates
let innerX = 0, innerY = 0; // Inner dot coordinates

// Set speed for each element (lower values create a slower follow effect)
const outerSpeed = 10; // Speed for the outer circle
const innerSpeed = 20; // Speed for the inner dot

// Track mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Function for smooth following effect with boundary constraints
function animate() {
  // Get the viewport width and height
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Update outer circle position with constraints to stay within viewport
  outerX += (mouseX - outerX) / outerSpeed;
  outerY += (mouseY - outerY) / outerSpeed;

  // Ensure the outer circle stays within the bounds of the viewport
  outerX = Math.max(Math.min(outerX, viewportWidth - outerCircle.offsetWidth / 2), outerCircle.offsetWidth / 2);
  outerY = Math.max(Math.min(outerY, viewportHeight - outerCircle.offsetHeight / 2), outerCircle.offsetHeight / 2);

  // Update inner dot position with constraints
  innerX += (mouseX - innerX) / innerSpeed;
  innerY += (mouseY - innerY) / innerSpeed;

  // Ensure the inner dot stays within the bounds of the viewport
  innerX = Math.max(Math.min(innerX, viewportWidth - innerDot.offsetWidth / 2), innerDot.offsetWidth / 2);
  innerY = Math.max(Math.min(innerY, viewportHeight - innerDot.offsetHeight / 2), innerDot.offsetHeight / 2);

  // Apply transformations to elements
  outerCircle.style.left = `${outerX - outerCircle.offsetWidth / 2}px`;
  outerCircle.style.top = `${outerY - outerCircle.offsetHeight / 2}px`;

  innerDot.style.left = `${innerX - innerDot.offsetWidth / 2}px`;
  innerDot.style.top = `${innerY - innerDot.offsetHeight / 2}px`;

  // Repeat animation
  requestAnimationFrame(animate);
}

// Start animation
animate();

// Handle mouse hover on <a> and <button> elements
const hoverElements = document.querySelectorAll('a, button'); // Select all anchor and button elements

hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    // Increase size and change color of the outer circle when hovering over an element
    outerCircle.style.backgroundColor = '#66faf0a6';  // Change to desired color
    outerCircle.style.width = '80px';  // Increase size
    outerCircle.style.height = '80px';  // Increase size
    // Show the message when hovering, hide the dot
    message.classList.add('visible');
    innerDot.style.display = 'none';  // Hide the dot during hover
  });

  element.addEventListener('mouseleave', () => {
    // Reset size and color when the mouse leaves the element
    outerCircle.style.backgroundColor = '';  // Reset to original color
    outerCircle.style.width = '30px';  // Reset to original size
    outerCircle.style.height = '30px';  // Reset to original size
    // Hide the message and show the dot again
    message.classList.remove('visible');
    innerDot.style.display = 'block';  // Show the dot again
  });
});

// Handle click on the outer circle
outerCircle.addEventListener('click', () => {
  // Show the "Click Me!" message inside the circle
  message.textContent = 'Click Me!';
  message.classList.add('visible');
});






