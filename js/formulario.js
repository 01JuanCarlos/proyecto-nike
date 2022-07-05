

polo = ('<option value="159.34" id="Paises Bajos">Países Bajos</option><option value = "129.44" id = "FFF" > FFF</option ><option value="129.44" id="Polonia">Polonia</option><option value="119.55" id="Boston Celtics">Boston Celtics</option> <option value="139.48" id="Nike Basic Negra">Nike Basic Negra</option><option value="119.55" id="Angeles Lakers Nike Swingman">Angeles Lakers Nike Swingman</option><option value="219.21" id="Brooklyn Nets DNA">Brooklyn Nets DNA</option><option value="167.31" id="Nike Basic Roja">Nike Basic Roja</option><option value="159.34" id="Los Angeles Laker City">Los Angeles Laker City</option><option value="129.44" id="Korea">Korea Camiseta </option><option value="129.44" id="NIKE W NY DF TOP MESH">NIKE W NY DF TOP MESH</option><option value="119.55" id="ALIANZA LIMA">ALIANZA LIMA</option><option value="139.48" id="Nike Style Polo MangaLarga">Nike Style Polo MangaLarga</option><option value="119.55" id="Deportivas Nike Polo Naranja Manga Zero">Deportivas Nike Polo Naranja Manga Zero</option><option value="219.21" id="Deportivas Nike Camiseta Rosa">Deportivas Nike Camiseta Rosa</option><option value="219.21" id="Nike Basic Camiseta Gris">Nike Basic Camiseta Gris</option>')

pantalon = ('<option value="196.72" id="Nike Yoga Dri-FIT">Nike Yoga Dri-FIT</option><option value="172.96" id="Nike Dri-FIT de entrenamiento">Nike Dri-FIT de entrenamiento</option> <option value="196.72" id="Nike Sportswear Club Jogger">Nike Sportswear Club Jogger</option> <option value="177.37"id="Nike Pro Dri-FIT Mallas de 3/4">Nike Pro Dri-FIT Mallas de 3/4</option> <option value="177.04"id="Nike Sportswear Club">Nike Sportswear Club</option><option value="115.20"id="Team 31 Courtside Tejido Fleece-NBA">Team 31 Courtside Tejido Fleece-NBA</option><option value="140.52"id="Nike Sportswear Repeat Con Tejido Fleece">Nike Sportswear Repeat Con Tejido Fleece</option> <option value="147.21"id="Jordan de calentamiento">Jordan de calentamiento</option> <option value="167.31" id="Nike Sportswear Essential">Nike Sportswear Essential</option><option value="150.11" id="Nike Sportswear Club Leggings">Nike Sportswear Club Leggings</option><option value="111.12" id="Nike Sportswear Jogger de estampado">Nike Sportswear Jogger de estampado</option><option value="129.24" id="Jordan x Maison Chateau">Jordan x Maison Chateau</option><option value="125.75" id="Nike Sportswear Phoenix Fleece">Nike Sportswear Phoenix Fleece</option><option value="144.44" id="Nike Swoosh Pantalón de tejido Fleece">Nike Swoosh Pantalón de tejido Fleece</option> <option value="130.44" id="Nike ACG Therma-FIT Wolf Tree">Nike ACG Therma-FIT "Wolf Tree"</option><option value="144.12" id="Air Jordan Pantalón de chángal">Air Jordan Pantalón de chángal</option>')

zapatillas = ('<option value="188.09" id="Nike Sportswear Sombrero">Nike Sportswear Sombrero</option><option value="80.61" id="Nike Air Max Plus Se Db0681">Nike Air Max Plus Se Db0681</option><option value="99.00"id="Nike Tenis">Nike Tenis</option> <option value="166.19"id="Nike Air Max 95 NDSTRKT Neon CZ3591-002">Nike Air Max 95 NDSTRKT Neon CZ3591-002</option> <option value="215.54"id="Nike Mens Air Max 90 Supernova Galaxy Cw6018">Nike Mens Air Max 90 Supernova Galaxy Cw6018</option> <option value="89.22"id="Nike Air Max Plus TN (GS)">Nike Air Max Plus TN (GS)</option> <option value="154.48"id="Nike Air Max Plus 4">Nike Air Max Plus 4</option> <option value="111.27"id="Nike Air Max Plus III">Nike Air Max Plus III</option><option value="159.27" id="Nike Air Max 90 SP">Nike Air Max 90 SP</option><option value="111.48" id="Nike Mens Air Monarch IV">Nike Mens Air Monarch IV</option><option value="71.65"id="Nike Air Max 90 G">Nike Air Max 90 G</option> <option value="95.54"id="Nike - Tenis de correr">Nike - Tenis de correr</option> <option value="159.27"id="Nike Air Max Torch 4">Nike Air Max Torch 4</option> <option value="91.56"id="Nike Air Zoom Pegasus 36">Nike Air Zoom Pegasus 36</option> <option value="79.61"id="Air Max 2017">Air Max 2017</option> <option value="199.09" id="Nike Sportswear Essential militar">Nike Air Max 90 </option>')

accesorios = ('<option value="199.09" id="Nike Utility Speed">Nike Utility Speed</option> <option value="79.61"id="Nike Heritage">Nike Heritage</option><option value="91.56"id="Nike Dri-FIT Legacy91">Nike Dri-FIT Legacy91</option> <option value="159.27"id="Nike Acadeny Team">Nike Acadeny Team</option><option value="95.54"id="Nike Hyper Charge 710 ml">Nike Hyper Charge 710 ml</option> <option value="71.65"id="Premier League Pitch Third">Premier League Pitch Third</option> <option value="111.48"id="Nike Sportswear">Nike Sportswear</option> <option value="159.27"id="Nike Gym Premium">Nike Gym Premium</option>')

const formulario = document.getElementById('frm2');

const input = document.querySelectorAll('#frm2');

const campos = {
    nombreApellido_1: false,
    email_1: false,
    telefono_1: false
}


const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,50}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

function fecha() {
    let d = (new Date()).getDate()
    let m = (new Date()).getMonth()+1
    if (m < 10) m = "0" + m
    let y = (new Date()).getFullYear()

    document.getElementById("pf").innerText = "Fecha: " + d + "/" + m + "/" + y;
    setTimeout("fecha()", 1000)
}

function hora() {
    let h = (new Date()).getHours()
    let m = (new Date()).getMinutes()
    if (m < 10) m = "0" + m
    let s = (new Date()).getSeconds()
    if (s < 10) s = "0" + s

    document.getElementById("ph").innerText = "Hora: " + h + ":" + m + ":" + s;
    setTimeout("hora()", 1000)

}
function revaluacion() {

    let tpprenda = parseFloat(document.getElementById("cbotp").value)

    let respuesta;

    switch (tpprenda) {
        case tpprenda = 1: respuesta = "Polo"; break;
        case tpprenda = 2: respuesta = "Pantalon"; break;
        case tpprenda = 3: respuesta = "Zapatillas"; break;
        case tpprenda = 4: respuesta = "Accesorios"; break;
        default: respuesta = "undifinido"; break;
    }

    switch (respuesta) {
        case respuesta = "Polo": document.getElementById("cbopre").innerHTML = polo; break;

        case respuesta = "Pantalon": document.getElementById("cbopre").innerHTML = pantalon; break;

        case respuesta = "Zapatillas": document.getElementById("cbopre").innerHTML = zapatillas; break;

        case respuesta = "Accesorios": document.getElementById("cbopre").innerHTML = accesorios; break;
        default: break;
    }
}



function procesar() {
    let valorPrenda = parseFloat(document.getElementById("cbopre").value)
    let cantidad = parseInt(document.getElementById("txtcantidad").value)
    document.getElementById("txtImporte").value = valorPrenda * cantidad
}



function cambio(e) {

    e.setAttribute("style", "padding:0px; width:60px; height:60px; opacity:1; transition:all 1s");

}

function original(e) {

    e.setAttribute("style", "padding:10px; width:40px; height:40px; opacity:0.5; transition:all 1s");

}

function revisar(e) {
    //recupero el valor de data-i

    let i = e.getAttribute("data-i");

    if (i == 0) {
        window.open('https://www.instagram.com/nike/')
    }

    if (i == 1) {
        window.open('https://www.facebook.com/nike/')
    }

    if (i == 2) {
        window.open('https://twitter.com/Nike?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')
    }

}

const validacionFormulario = (e) => {
    switch (e.target.name) {

        case "nombreApellido":
            if (expresiones.nombre.test(e.target.value)) {
                document.querySelector('#nombreApellido_1 .error').classList.remove('errorActivo');
                campos['nombreApellido_1'] = true;
            } else {
                document.querySelector('#nombreApellido_1 .error').classList.add('errorActivo');
                campos['nombreApellido_1'] = false;
            }
            break;
        case "email":
            if (expresiones.correo.test(e.target.value)) {
                document.querySelector('#email_1 .error').classList.remove('errorActivo');
                campos['email_1'] = true;
            } else {
                document.querySelector('#email_1 .error').classList.add('errorActivo');
                campos['email_1'] = false;
            }
            break;
        case "telefono":
            if (expresiones.telefono.test(e.target.value)) {
                document.querySelector('#telefono_1 .error').classList.remove('errorActivo');
                campos['telefono_1'] = true;
            } else {
                document.querySelector('#telefono_1 .error').classList.add('errorActivo');
                campos['telefono_1'] = false;
            }
            break;
        default: break;
    }
}

document.getElementById("cbotp").setAttribute("onchange", "revaluacion()")
document.body.setAttribute("onload", "fecha(), hora()")

/*
//document.getElementById("btnprocesar").setAttribute("onclick","procesar()")
*/


input.forEach((input) => {
    input.addEventListener('keyup', validacionFormulario);
    input.addEventListener('blur', validacionFormulario);
});

formulario.addEventListener('submit', (e) => {
    
    procesar();

    e.preventDefault();


    if (campos.nombreApellido_1 && campos.email_1 && campos.telefono_1) {


        document.querySelector('#completadototal .completado').classList.add('completadoreal');

        setTimeout(() => {
            document.querySelector('#completadototal .completado').classList.remove('completadoreal');
            formulario.reset();
        }, 5000);

        let tpprenda = parseFloat(document.getElementById("cbotp").value)

        let Prenda;

        switch (tpprenda) {
            case tpprenda = 1: Prenda = "Polo"; break;
            case tpprenda = 2: Prenda = "Pantalon"; break;
            case tpprenda = 3: Prenda = "Zapatillas"; break;
            case tpprenda = 4: Prenda = "Accesorios"; break;
            default: Prenda = "undifinido"; break;
        }

        let cboprenombre = document.getElementById("cbopre").options[document.getElementById("cbopre").selectedIndex].id
        let cboprecio = document.getElementById("cbopre").options[document.getElementById("cbopre").selectedIndex].value
        let cantidad = document.getElementById("txtcantidad").value
        let nombre = document.getElementById("txtnombre").value
        let correo = document.getElementById("email").value
        let teléfono = document.getElementById("teléfono").value
        let importe = document.getElementById("txtImporte").value

        alert("Venta Enviada Con Exito" + "\n" + "Tipo de prenda : " + Prenda + "\n" + "Preda : " + cboprenombre + "\n" + "Precio por unidad : " + cboprecio + "\n" + "Cantidad Comprada : " + cantidad + "\n" + "Nombre y pallidos : " + nombre + "\n" + "Correo : " + correo + "\n" + "Telefono : " + teléfono + "\n" + "Importe a Pagar : " + importe)

        campos['nombreApellido_1'] = false;
        campos['email_1'] = false;
        campos['telefono_1'] = false;
    }

});

//onmouseout
for (let i = 0; i < document.getElementsByClassName("imgf").length; i++) {

    document.getElementsByClassName("imgf")[i].setAttribute("onmouseover", "cambio(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onmouseout", "original(this)");
    document.getElementsByClassName("imgf")[i].setAttribute("onclick", "revisar(this)");
}
