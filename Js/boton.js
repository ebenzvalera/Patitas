$(document).ready(function(){
    /*Manejador de eventos para accerder a la clase*/
   $('.ir-arriba').click(function(){
       $('body,html').animate({
           scrollTop:'0px'
       },300/*Se maneja con milisegundos, 1000 es 1 segundo*/);
   }); 
    
    $(window).scroll(function(){
       if($(this).scrollTop()>0){
          $('.ir-arriba').slideDown(300);   
          }else{
          $('.ir-arriba').slideUp(300); 
          }
    });
});