$(document).ready(function(){
  let originalHeight = window.innerHeight;
  $(".about-transition-block").click((e) => {
    if ($(".about-block").hasClass("display-off")){
        $(".about-block").toggleClass("display-off");
        $(".about-block").toggleClass("display-on");
        window.scrollBy(0, originalHeight);
    }
  });
});