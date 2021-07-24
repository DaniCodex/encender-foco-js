const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes(){
    if($cambiarFoco.src.match("../imagenes/encendido-1.png") && $cambiarInterruptor.src.match("../imagenes/on-or.png")){
        $cambiarFoco.src = "../imagenes/apagado-1.png";
        $cambiarInterruptor.src =  "../imagenes/off-or.png";
    }else{
        $cambiarFoco.src = "../imagenes/encendido-1.png";
        $cambiarInterruptor.src = "../imagenes/on-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)