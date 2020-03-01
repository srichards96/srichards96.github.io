// Use ES5 for compatability. I'm not gonna set up Babel for something this small...
(function () {
  var sidenav = document.querySelector('.nav-links');
  var sidenavToggle = document.querySelector('.landing-header img');
  var sidenavLinks = document.querySelectorAll('.nav-links a');

  // When toggle is clicked, toggle the sidenav.
  sidenavToggle.addEventListener('click', function () {
    sidenav.classList.toggle('visible');
  });
  // When a sidenav link is clicked, close the sidenav if open.
  (function () { // Contain i
    for (var i = 0; i < sidenavLinks.length; i++) {
      sidenavLinks[i].addEventListener('click', function () {
        sidenav.classList.remove('visible');
      });
    }
  })();
  
})();
