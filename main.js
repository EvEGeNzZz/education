$( ".section_title" ).click(function() {
  if ($(this).parent().hasClass("current")) {
  } else {
    $(this).parent().toggleClass("current");
    $(this).parent().siblings().removeClass("current");
  }
});