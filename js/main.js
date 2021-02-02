jQuery(document).ready(function($) {
  //FIXED HEADERS
  window.onscroll = function() {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };

  //ISOTOPE
  let btns = $("#galeria .button-group button");

  btns.click(function(e) {
      $("#galeria .button-group button").removeClass("active");
      e.target.classList.add("active");

      let selector = $(e.target).attr("data-filter");
      $("#galeria .grid").isotope({
          filter: selector,
      });
  });

  $(window).on("load", function() {
    $("#galeria .grid").isotope({
        filter: "*",
    });
  });

  //MAGNIFIC POPUPS
  $(".grid .popup-link").magnificPopup({
      type: "image",
      gallery:{
          enabled: true,
          tPrev: "Anterior",
          tNext: "Próxima",
          tCounter: "%curr% de %total%",
      },
  })

});
