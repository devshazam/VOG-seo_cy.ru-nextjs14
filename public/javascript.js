


// document.addEventListener('rendered', function() {
  // start animation



document.querySelector("#accia").addEventListener("click", function (event) {
  event.preventDefault();

  document.querySelector(".grey-back").classList.add("d-no");
});



document.querySelector(".grey-back").addEventListener("click", function (event) {
  event.preventDefault();
//  document.querySelector(".grey-back").css('display', 'block');
  document.querySelector(".grey-back").classList.remove("d-no");
});




    

    function showSidebar() {
      document.querySelector(".js-sidebar-inner").classList.add("l-sidebar_inner_open");
      // document.querySelector(".js-sidebar").fadeIn("1000");
      // document.querySelector("html, body").css("overflow", "hidden");
    }
    function hideSidebar() {
      document.querySelector(".js-sidebar-inner").classList.remove("l-sidebar_inner_open");
      // document.querySelector(".js-sidebar").fadeOut("1000");
      // document.querySelector("html, body").css("overflow", "visible");
    }
    document.querySelector(".js-sidebar-show").addEventListener("click", function (event) {
      event.preventDefault();
      showSidebar();
    });
    document.querySelector(".js-sidebar-hide").addEventListener("click", function (event) {
      event.preventDefault();
      hideSidebar();
    });



  // }, false)