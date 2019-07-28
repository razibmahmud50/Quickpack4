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

