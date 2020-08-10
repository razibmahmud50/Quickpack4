  //work after dom loaded
  document.addEventListener("DOMContentLoaded", function(){ })

  //work after all content loaded
  window.addEventListener("load", function(){ });


  //add class
  document.getElementById("myButtom").addEventListener('click', function(){
      var element = document.getElementById("myDiv");
      element.classList.add('active');
  })
  //remove class
  document.getElementById("myButtom").addEventListener('click', function(){
      var element = document.getElementById("myDiv");
      element.classList.remove('active');
  })
  // toggle class
  document.getElementById("myButtom").addEventListener('click', function(){
      var element = document.getElementById("myDiv");
      element("myDiv").classList.toggle('active');
  })
  //password show hide
  // <input type="password" class="inputbox"  name="j_password" id="pass-type" />
 //  <i class="fa fa-eye-slash pass-show-hide" id="eye-icon" aria-hidden="true" onclick="passToggle()"></i>
   function passToggle() { 
    var temp = document.getElementById("pass-type"); 
    if (temp.type === "password") { 
        temp.type = "text"; 
        var el = document.getElementById("eye-icon");
         el.classList.remove('fa-eye-slash'); 
         el.classList.add('fa-eye');  
    } 
    else { 
        temp.type = "password"; 
        var el = document.getElementById("eye-icon");
         el.classList.remove('fa-eye');
        el.classList.add('fa-eye-slash'); 
    } 
  }

