console.log('js');

$(document).ready(function () {
  console.log('jq');

  //makes banner stick when scrolled to top of window
  const banner = $("#fixer");
  const sticky = banner.offset().top;

  window.onscroll = function () {
    bannerFix();
  };
  function bannerFix() {
    if (window.pageYOffset >= sticky) {
      banner.addClass("sticky")
    } else {
      banner.removeClass("sticky")
    }
  };//end banner stick

});