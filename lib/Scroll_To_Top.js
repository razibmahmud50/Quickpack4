//documentation 
//first include the jQuery file
//add jquery code in main.js 
//add css code in css file
//add html class in the html file
//add body id name is " page-top "

//Scroll-To-Top 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
        $('.scroll-to-top').fadeIn();
    } else {
        $('.scroll-to-top').fadeOut();
    }
});
$('.scroll-to-top').on('click',(function() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
}));
/* Scroll To Top */
// .scroll-to-top {
//   background-color: #2E353E ;
//   display: none;
//   width: 40px;
//   height: 40px;
//   font-size: 25px;
//   line-height: 37px;
//   text-align: center;
//   color: #fff;
//   position: fixed;
//   right: 0px;
//   bottom: 50px;
//   z-index: 999;
//   border: 1px solid #fff;
// }
// .scroll-to-top:hover,
// .scroll-to-top:focus {
//   background-color: #2E353E;
//   color: #ffffff;
// }
 //Back to Top Start
 //<a href="#" class="scroll-to-top"><i class="fa fa-angle-up"></i></a>