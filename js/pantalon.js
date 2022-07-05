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




function animar(e){

    //aumentar el tamaño de imgrs y su opacity=1
    e.setAttribute("style","padding:0px; width:60px; height:60px; opacity:1;transition:all 1s");

    console.log("funcion animar");
}

function original(e){

    //regresar al estilo original
    e.setAttribute("style","padding:7px;width: 50px;height 50px;  transition:all 1s");
    console.log("funcion original");

}

document.body.setAttribute("onload","fecha(), hora()");
for(let i=0; i<document.getElementsByClassName("imgf").length;i++){
    document.getElementsByClassName("imgf")[i].setAttribute("onmouseover","animar(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onmouseout","original(this)");
}

function Compra(){
    window.open("Venta.html")
    window.close();
}
for(let i=0; i<document.getElementsByClassName("bt").length;i++){
    document.getElementsByClassName("bt")[i].setAttribute("onclick","Compra(this)");
}