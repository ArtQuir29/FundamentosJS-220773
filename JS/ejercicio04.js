//Repaso de Arreglos

// Declaracion de arreglos
//Para declarar un arreglo (array ) de datos en JavaScript basta con agregar [], y dentro los datos que contendra el arrelglo

const mesesAnio= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

//Estilizacion de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199.0,0,36,1) 0%, rgba(255,129,121,1) 33%, rgba(255,191,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las salidas de la Consola
console.warn("Practica 06: Arreglos en Java Script");

console.log("%c1.-Declaración de un Arreglo (ARRAY) ",  style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para accedeer solo basta enviar las posicion del dato que queremos dentro de los limites establecido. Siendo el limite inferior 0 y el superior tamaño -1

console.log("%c2.-Leer  o recuperar datos de un arreglo  ",  style_console);
console.log(`El primer mes del año es : ${mesesAnio[0]}`)
console.log(`El ultimo mes del año es : ${mesesAnio[mesesAnio.length-1]}`)

console.log(`El treceavo mes del año es : ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? ${typeof(mesesAnio)}`)


const saludar =  function(nombreUsuario){return `Hola, ${nombreUsuario}!`}

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)
let arreglomixto=["String",5,86.25,-200,-.1586,Symbol("March"), 'Z', false,null, BigInt(6454444444444444444444444444444444146),true,{latitud:"20° 18' 0\" N" , longitud:"97° 58' 00\" W",altitud:796},saludar]

console.log(arreglomixto);
console.table(arreglomixto);
console.log(typeof(arreglomixto));
