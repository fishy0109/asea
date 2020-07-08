import Search from './Elements/Search';
import Slick from './Elements/slick';

import(/* webpackChunkName: "fontawesome", webpackPrefetch: true */ './Elements/fontawesome').then(module => {
  new module.default()
})

new Search();
new Slick();