function cambiarFoto(){
        foco = document.getElementById('foco')
        if(foco.src.match("foco")){
            foco.src = "images/focoOn.png";
        }else{
            foco.src = "images/focoOff.png";
        }
    }

