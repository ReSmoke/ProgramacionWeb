

function resultado(){
    var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, aciertos, mensaje1;
    if(document.getElementById('r1.3').checked==true){uno=1;}else{uno=0}
    if(document.getElementById('r2.4').checked==true){dos=1;}else{dos=0}
    if(document.getElementById('r3.1').checked==true){tres=1;}else{tres=0}
    if(document.getElementById('r4.4').checked==true){cuatro=1;}else{cuatro=0}
    if(document.getElementById('r5.1').checked==true){cinco=1;}else{cinco=0}
    if(document.getElementById('r6.2').checked==true){seis=1;}else{seis=0}
    if(document.getElementById('r7.4').checked==true){siete=1;}else{siete=0}
    if(document.getElementById('r8.2').checked==true){ocho=1;}else{ocho=0}
    if(document.getElementById('r9.1').checked==true){nueve=1;}else{nueve=0}
    if(document.getElementById('r10.3').checked==true){diez=1;}else{diez=0}
    aciertos=uno+dos+tres+cuatro+cinco+seis+siete+ocho+nueve+diez;
    porcentaje=aciertos*10;
    if (porcentaje>=70){mensaje1="Gran Trabajo";}
    if (porcentaje<70){mensaje1="Lo lamento, deberias estudiar mas";}
  
    alert("Tu numero de aciertos es de: "+aciertos + "\nEl numero minimo de aciertos para pasar es de 5" + 
    "\nSu porcentaje de aciertos es de: "+porcentaje+"%\n"+mensaje1);
}

function respuestas(){
    alert("Las respuestas correctas son: \n" + "1-(C)  2-(D)  3-(A)  4-(D)  5-(A) \n" +  "6-(B)  7-(D)  8-(B)  9-(A)  10-(C) ");
}

function alerta(){
    alert('¡Adelante Tu puedes no es tan dificil!');
    }
    window.onload = function(){
    setTimeout('alerta()',10000);
    }

function uncheked(){
    alert("El test se reiniciará");
    document.querySelectorAll('[name=respuesta1]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta2]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta3]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta4]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta5]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta6]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta7]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta8]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta9]').forEach((x) => x.checked=false);
    document.querySelectorAll('[name=respuesta10]').forEach((x) => x.checked=false);
}

window.onload = function(){document.onselectstart = function(){return false;} }




