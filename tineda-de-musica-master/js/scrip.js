$(document).ready(function() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementById('menu-superior-nav').outerHTML
        =this.responseText;
    }
  }
  
  xhttp.open('GET','menu-superior-nav.html', true);
  xhttp.send();

})
