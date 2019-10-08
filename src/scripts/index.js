import '../styles/index.scss';

import '../../node_modules/jqvmap/dist/jqvmap.css';
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
    colors: {
      "de": '#f00',
      "gb": '#f00',
      "it": '#f00',
      "nl": '#f00',
      "be": '#f00',
      "hr": '#f00',
      "si": '#f00',
      "eg": '#f00',
      "at": '#f00',
      "ch": '#f00',
      "fr": '#f00',
      "es": '#f00',
      "tn": '#f00',
    },
    enableZoom: false,
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
    },
    onLabelShow: function (event, label, code) {
      // TODO i18n label
      // label[0].textContent = 'LOL';
    }
  });
});