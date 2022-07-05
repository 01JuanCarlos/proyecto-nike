
var ofertas = ["img/oferta1.jpg","img/oferta2.jpg","img/oferta3.jpg","img/oferta4.jpg","img/oferta5.jpg"]

var colores=["blue","yellow","green","orange"]

var c=0

var h=0;

function carrusel(){

    c++;

    if(c >= ofertas.length) c = 0;

    document.getElementById("imgoferta").src = ofertas[c];


    setTimeout("carrusel()", 7000)

} 

function fecha(){
    let d=(new Date()).getDate()
    let m=(new Date()).getMonth()+1
    if(m<10)m="0"+m
    let y=(new Date()).getFullYear()

    document.getElementById("pf").innerText="Fecha: "+d+"/"+m+"/"+y;
    setTimeout("fecha()",1000)
}

function hora(){
    let h=(new Date()).getHours()
    let m=(new Date()).getMinutes()
    if(m<10)m="0"+m
    let s=(new Date()).getSeconds()
    if(s<10)s="0"+s

    document.getElementById("ph").innerText="Hora: "+h+":"+m+":"+s;
    setTimeout("hora()",1000)
}


function deletreo(){

    //recupero el texto del elemento id, subtitulo2

    let cadena=document.getElementById("subtitulo2").innerText;


    //dividir la cadena: cad1 almacena el 1 caracter, cad2 a partir de 2do caracter

    //substring(ubicacion, cantidad de caracteres)

    //length, longitud de la cadena

    let cad1=cadena.substring(0,1); //ofertas 
    //o

    let cad2=cadena.substring(1, cadena.length);
    //fertas

    //imprimir la nueva cadena

    document.getElementById("subtitulo2").innerText=cad2+cad1;
    //fertasO

    //repetir

    setTimeout("deletreo()",370);

}

function coloreo(){
    document.getElementById("subtitulo1").style.color=colores[h];
    h++;
    if(h>=colores.length) h=0;

    setTimeout("coloreo()",500);
    //por cada medio segundo cambio el color de letra

    //del elemento id subtitulo1

}

function cambio(e){


    e.setAttribute("style","padding:0px; width:60px; height:60px; opacity:1; transition:all 1s");


}

function original(e){

    e.setAttribute("style","padding:10px; width:40px; height:40px; opacity:0.5; transition:all 1s");
}

function revisar(e){
    //recupero el valor de data-i

    let i=e.getAttribute("data-i");

    if(i == 0){
        window.open('https://www.instagram.com/nike/')
    }
    
    if(i == 1){
        window.open('https://www.facebook.com/nike/')
    }

    if(i == 2){
        window.open('https://twitter.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
    }

}

//eventos
document.body.setAttribute("onload","carrusel(),deletreo(),coloreo(),fecha(), hora()");

for(let i=0; i<document.getElementsByClassName("imgf").length;i++){

    document.getElementsByClassName("imgf")[i].setAttribute("onmouseover","cambio(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onmouseout","original(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onclick","revisar(this)");
}