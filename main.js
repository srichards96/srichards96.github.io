(function () {
  // Get sidenav (on mobile).
  var sidenav = document.querySelector('.nav-links');
  var sidenavToggle = document.querySelector('.landing-header img');

  sidenavToggle.addEventListener('click', function (e) {
    sidenav.classList.toggle('visible');
  });
})();
