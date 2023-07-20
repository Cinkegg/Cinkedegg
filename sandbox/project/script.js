let slideIndex = 1;
showSlides(slideIndex, 'barbie');
showSlides(slideIndex, 'ken');
showSlides(slideIndex, 'president');
showSlides(slideIndex, 'ceo');

// Next/previous controls
function plusSlides(n, actor) {
  showSlides(slideIndex += n, actor);
}

// Thumbnail image controls
function currentSlide(n, actor) {
  showSlides(slideIndex = n, actor);
}

function showSlides(n, actor) {
  let i;
  let slides = document.getElementsByClassName(actor);
  let dots = document.getElementsByClassName(actor+"dot");
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

