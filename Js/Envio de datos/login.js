//ENVIAR DATOS A TRAVÈS DE PETICIÒN AJAX
jQuery(document).on('submit','#formlg',function(Event){
    Event.preventDefault();
    
    jQuery.ajax({
        url:'../php/login.php',//La url hacia nuestro archivo
        type:'POST',//Tipo de envio de datos
        datatype:'json',//Tipo de datos ha recibir
        data: $(this).serialize(),//Datos que deseamos enviar a nuestros archivos php
        beforeSend: function(){
        
        }
    })
    .done(function(respuesta) {
        console.log(respuesta);
    })
    .fail(function(resp) {
        console.log(resp.responseText);
    })
    .always(function() {
        console.log("complete");
    });
});