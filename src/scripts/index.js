import '../styles/app.scss';

// show or hide the navbar in mobile version
const btnTrigger = document.getElementById('btn-trigger');
const collapse = document.getElementById('collapse');
const navLinks = document.getElementsByClassName('nav-link');

btnTrigger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  collapse.classList.toggle('is-open');
});

// hide the navigation bar in the mobile version when clicking on a nav link
Object.values(navLinks).map((link) => {
  link.addEventListener('click', function () {
    btnTrigger.classList.remove('is-active');
    collapse.classList.remove('is-open');
  });
});

// add a scroll effect by clicking on a navigation link
$(function () {
  $('.nav-link').on('click', function () {
    var page = $(this).attr('href');

    var speed = 750;

    $('html, body').animate({ scrollTop: $(page).offset().top }, speed);
    return false;
  });
});
