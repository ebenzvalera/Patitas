<?php
//Llamamos al archivo conexiòn
require 'conexion.php';

//CREACIÒN DE CONSULTAA
$usuario = $mysqli-->query("SELECT Nombre,Tipo_usuario FROM usuario WHERE usuario = '".$_POST['usuariolg']."' 
AND Contraseña = '".$_POST['pass_lg']."'");

if($usuario->num_rows == 1):
    $datos=$usuario->fetch_assoc();
    echo json_encode(array('error' -> false,'tipo' -> $datos['Tipo_usuario']));
else:
    echo json_encode(array('error'->true));
endif;

$mysqli->close();  
?>
