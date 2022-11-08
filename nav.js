
// Nav sticky

function toggleScrollClass() {
  var nav = document.querySelectorAll('.navbar-default')[0];
  window.pageYOffset > 0 ? nav.classList.remove('fade') : nav.classList.add('fade')
}
window.addEventListener('scroll', function() {toggleScrollClass()});
toggleScrollClass();





