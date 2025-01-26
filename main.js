// clock

// List of countries and their corresponding time zones
        const countryToTimezone = [
            { country: "Afghanistan", timeZone: "Asia/Kabul" },
            { country: "Albania", timeZone: "Europe/Tirane" },
            { country: "Algeria", timeZone: "Africa/Algiers" },
            { country: "Andorra", timeZone: "Europe/Andorra" },
            { country: "Angola", timeZone: "Africa/Luanda" },
            { country: "Antigua and Barbuda", timeZone: "America/Antigua" },
            { country: "Argentina", timeZone: "America/Argentina/Buenos_Aires" },
            { country: "Armenia", timeZone: "Asia/Yerevan" },
            { country: "Australia", timeZone: "Australia/Sydney" },
            { country: "Austria", timeZone: "Europe/Vienna" },
            { country: "Azerbaijan", timeZone: "Asia/Baku" },
            { country: "Bahamas", timeZone: "America/Nassau" },
            { country: "Bahrain", timeZone: "Asia/Bahrain" },
            { country: "Bangladesh", timeZone: "Asia/Dhaka" },
            { country: "Barbados", timeZone: "America/Barbados" },
            { country: "Belarus", timeZone: "Europe/Minsk" },
            { country: "Belgium", timeZone: "Europe/Brussels" },
            { country: "Belize", timeZone: "America/Belize" },
            { country: "Benin", timeZone: "Africa/Porto-Novo" },
            { country: "Bhutan", timeZone: "Asia/Thimphu" },
            { country: "Bolivia", timeZone: "America/La_Paz" },
            { country: "Bosnia and Herzegovina", timeZone: "Europe/Sarajevo" },
            { country: "Botswana", timeZone: "Africa/Gaborone" },
            { country: "Brazil", timeZone: "America/Sao_Paulo" },
            { country: "Brunei", timeZone: "Asia/Brunei" },
            { country: "Bulgaria", timeZone: "Europe/Sofia" },
            { country: "Burkina Faso", timeZone: "Africa/Ouagadougou" },
            { country: "Burundi", timeZone: "Africa/Bujumbura" },
            { country: "Cabo Verde", timeZone: "Atlantic/Cape_Verde" },
            { country: "Cambodia", timeZone: "Asia/Phnom_Penh" },
            { country: "Cameroon", timeZone: "Africa/Douala" },
            { country: "Canada", timeZone: "America/Toronto" },
            { country: "China", timeZone: "Asia/Shanghai" },
            { country: "Pakistan", timeZone: "Asia/Karachi" },
            { country: "Saudi Arabia", timeZone: "Asia/Riyadh" },
            { country: "United States", timeZone: "America/New_York" },
            { country: "United Kingdom", timeZone: "Europe/London" },
            { country: "Japan", timeZone: "Asia/Tokyo" },
            { country: "India", timeZone: "Asia/Kolkata" },
            { country: "France", timeZone: "Europe/Paris" },
            { country: "Germany", timeZone: "Europe/Berlin" },
            { country: "Italy", timeZone: "Europe/Rome" },
            { country: "Mexico", timeZone: "America/Mexico_City" },
            { country: "Russia", timeZone: "Europe/Moscow" },
            { country: "South Africa", timeZone: "Africa/Johannesburg" },
            { country: "South Korea", timeZone: "Asia/Seoul" },
            { country: "Turkey", timeZone: "Europe/Istanbul" },
            { country: "Ukraine", timeZone: "Europe/Kiev" },
            { country: "Vietnam", timeZone: "Asia/Ho_Chi_Minh" },
            { country: "United Arab Emirates", timeZone: "Asia/Dubai" },

            // Continue to add more countries as needed
        ];

        // Function to detect user's timezone using the browser's locale
        function getUserTimezone() {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }

        // Function to populate the dropdown with countries
        function populateCountryDropdown() {
            const select = document.getElementById('country-select');
            for (const { country, timeZone } of countryToTimezone) {
                const option = document.createElement('option');
                option.value = timeZone;
                option.textContent = country;
                select.appendChild(option);
            }
        }

        // Function to update the clock based on the given time zone
        function updateClock(timeZone) {
            const now = new Date();

            // Get the current time and format it based on the given time zone
            const time = now.toLocaleString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: timeZone
            });

            // Format the current date
            const formattedDate = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: timeZone
            });

            // Update the clock and date display
            document.getElementById('clock').textContent = time;
            document.getElementById('date').textContent = formattedDate;
        }

        // Initialize the dropdown and clock
        window.onload = () => {
            populateCountryDropdown();

            // Detect user's timezone and set it as the selected option
            const userTimezone = getUserTimezone();
            const countrySelect = document.getElementById('country-select');
            countrySelect.value = userTimezone;

            // Update the clock initially
            updateClock(userTimezone);

            // Event listener for country dropdown change
            countrySelect.addEventListener('change', function () {
                const selectedTimezone = this.value;
                updateClock(selectedTimezone); // Update time based on selected country
            });

            // Update the clock every second
            setInterval(() => updateClock(countrySelect.value), 1000);
        };

// ---------------------------------------------------

// counter for testimonials

 // Counter animation when the section comes into view
 document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter-value');
    const speed = 50; // Increased speed for faster animation

    // Function to animate the counter
    const countUp = (element) => {
        const target = +element.getAttribute('data-target');
        const increment = target / speed;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                element.textContent = `+${target.toLocaleString()}`;
            } else {
                element.textContent = `+${Math.round(current).toLocaleString()}`;
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    };

    // Intersection Observer to trigger animation when section comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counterElement = entry.target;
                countUp(counterElement);
                observer.unobserve(counterElement); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });

    // Observe each counter value element
    counters.forEach(counter => {
        observer.observe(counter);
    });
});






// pricing 

// Handle filter button functionality
const filterButtons = document.querySelectorAll('.filterbtn button');
const allCards = document.querySelectorAll('.pricing-card');

// Function to show cards based on the selected filter
const showCards = (filterValue) => {
    allCards.forEach(card => {
        // Show cards based on the selected category
        if (card.classList.contains(filterValue)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 100);
        } else {
            card.style.display = 'none';
        }
    });
}

// Initial state based on the active button (or default to 'webdev' if none selected)
const initialFilter = document.querySelector('.filterbtn button.active')?.getAttribute('data-filter') || 'webdev';
showCards(initialFilter); // Show cards for the initial filter

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and add to the clicked button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        showCards(filterValue); // Show cards based on the selected filter
    });
});

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

  // Add 'scrolled' class to body after scrolling past the hero section
        window.addEventListener('scroll', () => {
            const heroHeight = document.getElementById('hero').offsetHeight;
            if (window.scrollY > heroHeight) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
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


// Technologies section marquee

const marquee = document.getElementById('marquee');

let isDragging = false;
let startX;
let scrollLeft;

marquee.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollLeft = marquee.scrollLeft;
  marquee.style.cursor = 'grabbing';
  marquee.style.animationPlayState = 'paused';
});

marquee.addEventListener('mouseleave', () => {
  isDragging = false;
  marquee.style.cursor = 'grab';
  marquee.style.animationPlayState = 'running';
});

marquee.addEventListener('mouseup', () => {
  isDragging = false;
  marquee.style.cursor = 'grab';
  marquee.style.animationPlayState = 'running';
});

marquee.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 1.5; // Adjust scrolling speed
  marquee.scrollLeft = scrollLeft - walk;
});


// whatsapp direct order

function shareOnWhatsApp(productName, productPrice) {
    const message = `You have selected this plan : ${productName} - Price: ${productPrice}`;
    const whatsappURL = `https://wa.me/+923182271174?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

