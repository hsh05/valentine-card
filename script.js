$(document).ready(function () {
    // Original hover animation
    $(".container").hover(
      function () {
        $(".card").stop().animate({ top: "-150px" }, 300);
      },
      function () {
        $(".card").stop().animate({ top: "5px" }, 300);
      }
    );
  
    // Click to show letter
    $(".card").click(function () {
      $(".letter").fadeIn(300);
      $("body").append('<div class="overlay"></div>');
    });
  
    // Close letter functionality
    $(document).on("click", ".close-btn, .overlay", function () {
      $(".letter").fadeOut(300);
      $(".overlay").remove();
    });
  });