var slideIndex = 0;
const slides = [
  {
    name: 'Jetsons Farm',
    page:
      'https://www.google.com/url?q=https://docs.google.com/presentation/d/e/2PACX-1vQQLb7QDeWEM7Uy4a4Bd7cI--YFQtLNQPJz5mIgnvdZ2NR94mPPbXQXkN4HEkc6f8nOaXmb_2oqTqfy/pub?start%3Dtrue%26loop%3Dfalse%26delayms%3D60000&sa=D&source=hangouts&ust=1569361643150000&usg=AFQjCNFFpa8WzAuRq3RMkW19MnmzOzlBtQ',
    seconds: 20
  }
];

var i = -1;
showSlides();

function showSlides() {
  if (i == slides.length - 1) {
    i = -1;
  }
  i++;
  document.getElementById('slideshow-viewport').src = slides[i].page;
  document.getElementById('slideshow-viewport').contentWindow.location.href = slides[i].page;
  // $('#slideshow-viewport').attr('src', slides[i].page);
  setTimeout(showSlides, slides[i].seconds * 1000); // Change image every 2 seconds
}
