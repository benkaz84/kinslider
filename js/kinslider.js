


$(document).ready(function(){
  
  
  $.fn.kinslider = function(options){
    
    this.each(function(){
      
       optionsin = {
         'config':{
           'width':'250',
           'height':'150',
           'interval':'4000',
           'move' : 'auto'
         },
         
         'buttons':{
           'left':'img/left.png',
           'right':'img/right.png',
           'pause':'img/pause.png',
           'play':'img/play.png'
         }

       };

      $.extend(optionsin,options);
      
      if(optionsin.images.length == 0){
        return;
      }

      $(this).addClass('slider');
    
      ws = '<div class="wrapper_slider"><ul class="list_slider">';
      for(i=0;i<optionsin.images.length;i++){
        ws += '<li><img  src="'+optionsin.images[i]+'"></li>';
      }
      ws += '</ul></div>';
      
      $(this).prepend(ws);
    
    
    
      nav = '<div class="nav"><div class="nav_in"><img width="30" class="left" src="'+optionsin.buttons.left+'"><img width="30" class="stop"  src="'+optionsin.buttons.pause+'"><img width="30" style="display:none;" class="play" src="'+optionsin.buttons.play+'"><img width="30" class="right" src="'+optionsin.buttons.right+'"></div></div>';

      $(this).append(nav);
      
      var countRight = 1;
      
      var slider = $(this);
      var wrapper_slider = $('.wrapper_slider',slider);
      var list_slider = $('.list_slider',wrapper_slider);
      var list_slider_items = $('li',list_slider);
      var img_slider_items = $('img',list_slider);
      var nav = $('.nav', slider);
      var left = $('.left',slider); 
      
      slider.css('display','block');
     
      slider.css('width',optionsin.config.width);
      wrapper_slider.css('width',optionsin.config.width).css('height',optionsin.config.height);    
      nav.css('width',optionsin.config.width);
      
      
      var width_wrapper = wrapper_slider.outerWidth();
      var height_wrapper = wrapper_slider.outerHeight();
      countItems = list_slider_items.length;
      
     //console.log(img_slider_items);
  
      /********* start mouseup / mousedown****************/
        //right
        $('.right',slider).mousedown(function(){
          src = $(this).attr('src');
          src_hover = src.replace('.png','_hover.png');
          $(this).attr('src',src_hover);
       
        })
        .mouseup(function(){
          src_hover = $(this).attr('src');
          src = src_hover.replace('_hover.png','.png');
          $(this).attr('src',src);
        });   
        
        //left
        $('.left',slider).mousedown(function(){
          src = $(this).attr('src');
          src_hover = src.replace('.png','_hover.png');
          $(this).attr('src',src_hover);
       
        })
        .mouseup(function(){
          src_hover = $(this).attr('src');
          src = src_hover.replace('_hover.png','.png');
          $(this).attr('src',src);
        });        
        
        //play
        $('.play',slider).mousedown(function(){
          src = $(this).attr('src');
          src_hover = src.replace('.png','_hover.png');
          $(this).attr('src',src_hover);
       
        })
        .mouseup(function(){
          src_hover = $(this).attr('src');
          src = src_hover.replace('_hover.png','.png');
          $(this).attr('src',src);
        });   
        
        //stop
        $('.stop',slider).mousedown(function(){
          src = $(this).attr('src');
          src_hover = src.replace('.png','_hover.png');
          $(this).attr('src',src_hover);
       
        })
        .mouseup(function(){
          src_hover = $(this).attr('src');
          src = src_hover.replace('_hover.png','.png');
          $(this).attr('src',src);
        });  
     
     /********* end mouseup / mousedown****************/
    
     for(i=0;i<countItems;i++){
       img_slider_items.eq(i).attr('class','block'+i);
     }
     
  
     
     for(i=0;i<countItems;i++){
       img_slider_items.eq(i).css({
         width: width_wrapper,
         height: height_wrapper,
       });
     }
    
    
     for(i=0;i<countItems;i++){
       if(i==0){
        $('.block'+i, slider).css('left','0');
       }else{
        // alert();
        //console.log(width_wrapper*i); 
         $('.block'+i, slider).css('left',width_wrapper*i);
       }
     }  
     
     countRight = 1;
      
      
      if(optionsin.config.move == 'auto'){
  
        var stop = 0;
         $('.stop',slider).click(function(){
              stop = 1;
              $(this).hide();
              $('.play', slider).show();
         });
         
         $('.play',slider).click(function(){
           stop = 0;
           $(this).hide();
           $('.stop', slider).show();        
         });
           
  
          var init = setInterval(function(){
             if(stop == 0){
              if(countRight == 1 || countRight<countItems){
                  list_slider.animate({"left":"-="+width_wrapper},"slow");
                  countRight++;        
              }else{
                 list_slider.animate({"left":"+="+width_wrapper*(countItems-1)},"slow");
                 countRight = 1;
              }
             }
         
           }, optionsin.config.interval);  
  
        
    
      }else if(optionsin.config.move == 'manual'){
        $('.play',slider).hide();
        src_stop = $('.stop',slider).attr('src');
        src_empty = src_stop.replace('pause.png','empty.png');
        $('.stop',slider).attr('src',src_empty).css('cursor','default');
      }/*end if else*/
      
     
        
        $('.right',slider).click(function(){
          //alert(countRight);
          if(countRight == 1 || countRight<countItems){
            list_slider.animate({"left":"-="+width_wrapper},"slow");
            countRight++;
          }else{
            list_slider.animate({"left":"+="+width_wrapper*(countItems-1)},"slow");
            countRight = 1;
          }
       
        });     
       
   
       $('.left',slider).click(function(){
          //alert(countRight);
          if(countRight != 1){
            list_slider.animate({"left":"+="+width_wrapper},"slow");
            countRight--;
          }else{
            list_slider.animate({"left":"-="+width_wrapper*(countItems-1)},"slow");
            countRight = countItems;
          }
      
        });      
       
  
      
    });
    
    
  }/*end kinslider plugin*/
  
  
})