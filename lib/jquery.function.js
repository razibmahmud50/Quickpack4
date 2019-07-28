
  //navbar color change after scrolling
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "linear-gradient(45deg,rgba(74,1,72,0.8) 35%,rgba(192,72,72,0.8) 100%)");
    }
  
    else{
      $(".navbar").css("background" , "transparent");   
    }
  })

    //dynamic margin for main wrapper content
    var header_height = $('#global-header').outerHeight();
    $('.master-wrapper-content').css({ "margin-top": header_height + "px" });

      //show hide on scroll 
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("global-header").style.top = "0";
    } else {
      document.getElementById("global-header").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
  }