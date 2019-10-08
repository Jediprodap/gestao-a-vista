var slideIndex = 0;
const slides = [
  {
    name: 'Gestão a Vista Prodap',
    page:
      'https://docs.google.com/presentation/d/e/2PACX-1vT6lJjES9CtHGCN547fRYYUfIATW-9Whyc36pe2gwW5TVveeUnZUjOOVOs7mYD4tQ/pub?start=true&loop=true&delayms=15000',
    seconds: 15
  };
  {
name: 'Teste Instagran Sou Prodap',
page:
'https://www.instagram.com/p/B22MXlDJ90DAeDZ9OxNB_t04Tl6cMIdFk9XheA0/',
seconds: 20
},
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
