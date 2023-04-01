(function global($) {
    var texts = new Array();
    texts.push("trading automations");
    texts.push("trading communities");
    texts.push("trading strategies");
  
    var point = 0;
  
    function changeText(){
      $('.landing h1 span').fadeOut(function () {
        $(this).text(texts[point]);
      }).fadeIn();
      if(point < ( texts.length - 1 ) ){
        point++;
      }else{
        point = 0;
      }
      
    }
    
    setInterval(changeText, 3000); /*Call it here*/
    changeText();
  })(jQuery);