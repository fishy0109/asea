import $ from 'jquery'
window.$ = window.JQuery = $;

import Search from './Elements/Search';
import Slick from './Elements/slick';

import('./Elements/fontawesome').then(module => {
  new module.default()
})

new Search();
new Slick();

$(document).ready(function() {
  $(".slick-dots").wrap("<div class='container'>");
});