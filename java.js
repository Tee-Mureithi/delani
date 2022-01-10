

$(document).ready(function () {
    $(".iconDesign").click(function () {
      $(this).toggle(function () {
        $(".description").toggle();
      });
    });
    $(".description").click(function () {
      $(this).toggle(function () {
        $(".iconDesign").toggle();
      });
    });
  });
  $(document).ready(function () {
    $(".devIcon").click(function () {
      $(this).toggle(function () {
        $(".dev").toggle();
      });
    });
    $(".dev").click(function () {
      $(this).toggle(function () {
        $(".devIcon").toggle();
      });
    });
  });
  $(document).ready(function () {
    $(".product_icon").click(function () {
      $(this).toggle(function () {
        $(".project").toggle();
      });
    });
    $(".project").click(function () {
      $(this).toggle(function () {
        $(".product_icon").toggle();
      });
    });
  });