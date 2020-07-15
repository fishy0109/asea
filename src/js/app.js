import $ from 'jquery'
window.$ = window.JQuery = $;

import Search from './Elements/Search';
import Slick from './Elements/slick';

import('./Elements/fontawesome').then(module => {
  new module.default()
})

new Search();
new Slick();

/**
 * Mobile menu
 */

$(window).on('resize', () => {
  let width = document.documentElement.clientWidth;
  let done = document.body.classList.contains('mm-once');
  document.body.classList.add('mm-once')

  import(
    './Elements/mmenu'
    ).then(module => {
    new module.default()
  })
});

$(document).ready(function() {
  $(".slick-dots").wrap("<div class='container'>");

  // when you hover a toggle show its dropdown menu
  $(".navbar .dropdown-toggle").hover(function () {
    $(this).parent().toggleClass("show");
    $(this).parent().find(".nav-dropdown").toggleClass("show");
  });

  // hide the menu when the mouse leaves the dropdown
  $(".navbar .nav-dropdown").mouseleave(function () {
    //$(this).removeClass("show");
  });
});