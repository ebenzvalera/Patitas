/*Determinar que la imagen se posicione al alto del navegador*/
$(document).ready(function(){
    $("#slides").css({"height":$(window).height() + "px"});
    var tamaño=$("#slides").height();
    var flag=false;
    var scroll;/*Grabamos la posiciòn del scroll*/
    var mediaquery = window.matchMedia("(max-width: 880px)");
    $(window).scroll(function(){
       scroll=$(window).scrollTop();
        
        if(scroll > 500) {
            if(!flag){
                $("header").css({"background-color":"#3c3c3c"});
                flag=true;
            }
        }else{
            if(flag){
                $("header").css({"background-color":"transparent"});
                flag=false;  
                if (mediaquery.matches) {
                $("header").css({"background-color":"transparent","height":"60px"});
                $(".contenedor").css({"flex-direction":"row","justify-content":"space-between","align-content":"center"});
                $(".contenedor .logo p").css({"padding":"0px","font-size":"30px"});
                $(".contenedor .logo span").css({"font-size":"30px"});
                }
            }
        }
            
    });
 
});

