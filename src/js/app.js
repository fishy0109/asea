import $ from 'jquery'

import Search from './Elements/Search';
import Slick from './Elements/slick';

import('./Elements/fontawesome').then(module => {
  new module.default()
})

new Search();
new Slick();