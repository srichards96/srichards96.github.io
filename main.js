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
  
  // Checks inner window aspect ratio. If greater than 16:9, bg image is made 100% wide.
  function checkWindowAspectRatio(width, height) {
    var breakpoint = 16 / 9;
    var ratio = width / height;

    if (ratio > breakpoint) {
      document.body.classList.add('wide-bg');
    } else {
      document.body.classList.remove('wide-bg');
    }
  };
  checkWindowAspectRatio(window.innerWidth, window.innerHeight);
  
  // On window resize, check aspect ratio of inner window...
  window.onresize = function (e) {
    var width = e.target.innerWidth;
    var height = e.target.innerHeight;
    checkWindowAspectRatio(width, height);
  }
})();
