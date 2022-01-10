

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

// hover effect
  $(document).ready(function () {
    $(".portfolio1").mouseenter(function () {
      $(".title1").show();
    });
    $(".portfolio1").mouseleave(function () {
      $(".title1").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio2").mouseenter(function () {
      $(".title2").show();
    });
    $(".portfolio2").mouseleave(function () {
      $(".title2").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio3").mouseenter(function () {
      $(".title3").show();
    });
    $(".portfolio3").mouseleave(function () {
      $(".title3").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio4").mouseenter(function () {
      $(".title4").show();
    });
    $(".portfolio4").mouseleave(function () {
      $(".title4").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio5").mouseenter(function () {
      $(".title5").show();
    });
    $(".portfolio5").mouseleave(function () {
      $(".title5").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio6").mouseenter(function () {
      $(".title6").show();
    });
    $(".portfolio6").mouseleave(function () {
      $(".title6").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio7").mouseenter(function () {
      $(".title7").show();
    });
    $(".portfolio7").mouseleave(function () {
      $(".title7").hide();
    });
  });
  $(document).ready(function () {
    $(".portfolio8").mouseenter(function () {
      $(".title8").show();
    });
    $(".portfolio8").mouseleave(function () {
      $(".title8").hide();
    });
  });

  $(document).ready(function () {
    $("#button").click(function (event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var comment = $("#msg").val();
      if (name === "" || email === "" || comment === "") {
        alert("Fill all the fields");
      } else {
        alert("Thank you " + name + ". for reaching out to us : ");
      }
    });
  });