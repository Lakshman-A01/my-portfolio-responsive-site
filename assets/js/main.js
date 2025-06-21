/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .hobbies__img, .contact__input',{interval: 200}); 
function validateEmail(event) {
    const emailInput = document.querySelector('input[name="email"]');
    const email = emailInput.value.toLowerCase();
  
    // List of known fake or temporary domains
    const blockedDomains = ["mailinator.com", "tempmail.com", "10minutemail.com"];
  
    const emailDomain = email.split("@")[1];
    if (blockedDomains.includes(emailDomain)) {
      alert("Please enter a valid, personal email address.");
      event.preventDefault(); // Stops form submission
    }
  }
  
document.getElementById('send-button').addEventListener('click', function() {
    var popup = document.getElementById('popup-message');
    popup.style.display = 'block'; // Show the popup

    // Hide the popup after 2 seconds
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
});

  // Attach event listener to only .image-text.mca elements
  document.querySelectorAll('.image-text .mca').forEach(el => {
    el.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent bubbling to parent
      const targetUrl = el.dataset.url;
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  // Optional: prevent click on parent image from navigating anywhere
  document.querySelectorAll('.hobbies__img').forEach(wrapper => {
    wrapper.addEventListener('click', e => {
      e.preventDefault(); // Do nothing if image itself is clicked
    });
  });
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: { enable: true, value_area: 800 }
            },
            color: { value: '#00bfff' }, // Bright blue particles
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00bfff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'bounce',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
  
