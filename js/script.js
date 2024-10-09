document.querySelector(".barsMenu").addEventListener("click", animarBarras)

let linea1= document.querySelector(".line1")
let linea2= document.querySelector(".line2")
let linea3= document.querySelector(".line3")
let menudesplegable= document.querySelector(".menudesplegable")
let imagenhomeloged = document.querySelector(".imagenhomeloged")


function animarBarras(){
    linea1.classList.toggle("activeline1")
    linea2.classList.toggle("activeline2")
    linea3.classList.toggle("activeline3")

    menudesplegable.classList.toggle("menudesplegableactivo")
    imagenhomeloged.classList.toggle("imagenhomeactiva")


}

class Usuario {
    constructor(nombre, dni, email, fnac, telefono, calle, numero, cp, contrasenia){
        this.nombre = nombre
        this.dni = dni
        this.email = email
        this.fnac = fnac
        this.telefono = telefono
        this.calle = calle
        this.numero = numero
        this.cp = cp
        this.contrasenia = contrasenia
    }
}

function guardarRegistro (){
let nombre = document.querySelector(".nombre")
let dni = document.querySelector(".dni")
let email = document.querySelector(".email")
let fnac = document.querySelector(".fnac")
let telefono = document.querySelector(".telefono")
let calle = document.querySelector(".calle")
let numero = document.querySelector(".numero")
let cp = document.querySelector(".cp")
let contrasenia = document.querySelector(".contrasenia")

nuevoUsuario = new Usuario(nombre, dni, email, fnac, telefono, calle, numero, cp, contrasenia)

// Aca iria la funcion con node para mandar el dato a la bbdd
}


function compararLogin () {
    let emailLog = document.querySelector(".emailLog")
    let contraseniaLog = document.querySelector(".contraseniaLog")
    if (emailLog == Usuario.email && contraseniaLog == Usuario.contrasenia){

    }

}

/*oferta / cargar trabajo*/

class Oferta {
    constructor(id, servicioCargarOferta, TituloOferta, DescripcionTrabajoOferta, FotoOferta){
        this.id = id
        this.servicioCargarOferta = servicioCargarOferta
        this.TituloOferta = TituloOferta
        this.DescripcionTrabajoOferta = DescripcionTrabajoOferta
        this.FotoOferta = FotoOferta

    }
}
function CargarOferta(){

//de donde saco el id de usuario? id= 
servicioCargarOferta =  document.querySelector("servicioCargarOferta")
TituloOferta = document.querySelector("TituloOferta")
DescripcionTrabajoOferta = document.querySelector("DescripcionTrabajoOferta")
FotoOferta = document.querySelector("FotoOferta")

nuevaOferta= new Oferta
}