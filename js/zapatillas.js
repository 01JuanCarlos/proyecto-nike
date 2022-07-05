img=["img/face.png","img/instagram.jpg","img/twitter.jpg"];

img1=["img/face1.jpg","img/instagram1.jpg","img/twitter1.jpg"];



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

document.body.setAttribute("onload","fecha(), hora()");

for(let i=0; i<document.getElementsByClassName("imgf").length;i++){

    document.getElementsByClassName("imgf")[i].setAttribute("onmouseover","cambio(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onmouseout","original(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onclick","revisar(this)");
}

function Compra(){
    window.open("Venta.html")
    window.close();
}
for(let i=0; i<document.getElementsByClassName("bt").length;i++){
    document.getElementsByClassName("bt")[i].setAttribute("onclick","Compra(this)");
}