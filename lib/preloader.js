  //preloader
    // HTML
    //    <div id="preloader">
    //       <div id="status"></div>
    //   </div>

    // CSS
    // body {
    //     overflow: hidden;
    //   }
    
    //   #preloader {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background-color: #fff;
    //     z-index: 99;
    //   }

    //   #status {
    //     width: 200px;
    //     height: 200px;
    //     position: absolute;
    //     left: 50%;
    //     top: 50%;
    //     background: url(../images/status.gif);
    //     background-repeat: no-repeat;
    //     background-position: center;
    //     margin: -100px 0 0 -100px;
    //   }

    // JS
    $(window).on('load', function () {
        $('#status').fadeOut(); 
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    })