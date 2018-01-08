<?php
    //PARÀMETROS DE CONEXIÒN
    $nombre_servidor="localhost";
    $usuario_servidor="root";
    $password_servidor="";
    $nombre_bd="bd_veterinaria";
    
    $mysqli = new mysqli($nombre_servidor,$usuario_servidor,$password_servidor,$nombre_bd);
//    $mysqli = new mysqli('localhost','root','','bd_veterinaria');
    if($mysqli->connect_errno):
        echo "Error al conectarse con MySQL debido al error ".$mysqli-->connect_error;
    endif
?>