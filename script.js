window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust the scroll position value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});






