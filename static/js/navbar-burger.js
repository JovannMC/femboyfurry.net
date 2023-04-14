document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Define the threshold width at which the hamburger menu appears
      const hamburgerThresholdWidth = 1024;

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

      // Check if the viewport width is below the threshold for the hamburger menu
      if (window.innerWidth < hamburgerThresholdWidth) {
        const $navbarItems = Array.prototype.slice.call($target.querySelectorAll('.navbar-item'), 0);
        $navbarItems.forEach((item) => {
          item.classList.toggle('no-border');
        });
      }
    });
  });

  // Add a resize event to check if the viewport width is below the threshold for the hamburger menu
  window.addEventListener('resize', () => {
    if (window.innerWidth >= hamburgerThresholdWidth) {
      const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
      $navbarItems.forEach((item) => {
        item.classList.remove('no-border');
      });
    }
  });

  // Add a scroll event to check if the viewport width is below the threshold for the hamburger menu
  window.addEventListener('scroll', () => {
    if (window.innerWidth >= hamburgerThresholdWidth) {
      const $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);
      $navbarItems.forEach((item) => {
        item.classList.remove('no-border');
      });
    }
  });
});
