//= require jquery.erToc
//= require jquery.glide
//= require menuAnchorAnimation
//= require_directory ./vendor
//= require_directory ./empties

$(document).ready(function() {
  $('#example').erToc({'goTopNode':'#example', 'startLevel': 'h2', 'numberedSuffix':'. '});
  $('.empties-menu-anchor').fixedsticky();
});
