(function() {
  var emptiesMenuAnchor = $('.empties-menu-anchor');

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      emptiesMenuAnchor.addClass('empties-menu-anchor-moved');
    } else if ($(this).scrollTop() <= 50) {
      emptiesMenuAnchor.removeClass('empties-menu-anchor-moved');
    }
  });
})();
