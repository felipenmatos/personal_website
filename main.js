var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Scroll suave com links internos
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const topo = section.offsetTop;
  
  window.scrollTo({
    top: topo,
    behavior: 'smooth'
  })
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection); 
});

//Animacao scroll 

const sections = document.querySelectorAll('.js-scroll');

function animaScroll() {
  sections.forEach((section)=>{
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < 0) {
      section.classList.add('ativo');
    }
  })
}

window.addEventListener('scroll', animaScroll);
