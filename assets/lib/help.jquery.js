
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
      
  //bootstrap dropdown link on click dropdown menu not hide
  $(document).ready(function(){
  	$('.dropdown-menu  .dropdown-toggle').on("click", function(e){
  		$(this).next('ul').toggle();
  		e.stopPropagation();
  		e.preventDefault();
  	});
  });
  
  // navbar shrink when page scroll down 100 and when scroll
  var navbarCollapse = function () {
    if ($("#main-nav").offset().top > 100) {
      $("#main-nav").addClass("navbar-shrink");
      $("#main-nav .nav-link").css({
        'padding': '3px 12px'
      });
    } else {
      $("#main-nav").removeClass("navbar-shrink");
      $("#main-nav .nav-link").css({
        'padding': '8px 12px'
      });
    }
  };
  navbarCollapse();
  $(window).scroll(navbarCollapse);