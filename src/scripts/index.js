import '../styles/index.scss';
import '../../node_modules/jqvmap/dist/jqvmap.css';

import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/jqvmap/dist/jquery.vmap.js';
import '../../node_modules/jqvmap/dist/maps/jquery.vmap.world.js';

// https://www.npmjs.com/package/jqvmap
jQuery(document).ready(function () {
  jQuery('#vmap').vectorMap({
    map: 'world_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      var message = 'You clicked "'
        + region
        + '" which has the code: '
        + code.toUpperCase();

      alert(message);
    }
  });
});