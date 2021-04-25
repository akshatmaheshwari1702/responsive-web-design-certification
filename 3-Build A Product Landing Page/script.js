var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-bar").style.top = "0";
  } else {
    document.getElementById("nav-bar").style.top = "-100vh";
  }
  prevScrollpos = currentScrollPos;
}

function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
}
