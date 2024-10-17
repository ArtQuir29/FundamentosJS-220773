// Tipo de Datos en JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no incializados o no declarados

// 2.BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN(Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

esPremium= false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable e Premium es ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos");

// 4. STRING (Cadena de Caractés)
const alumno = "Ailton Artiaga Quiroga"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

// Inicializamos el valor de la variable del producto

producto = "Monitor 20\"FULLL HD"
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato  ${typeof(producto)}`);

// Mnipulando los STRINGS 
console.log(`Mas adelante podemos transformar el contenido de los STRING usando los metodosy funciones especificas, como converitr su valor a MAYUSCULAS: ${alumno} =>
    ${alumno.toUpperCase()}`);
    console.log(`O en su defecto a minisculas: ${producto} => ${producto.toLowerCase()}`);

    // 5.- BIGINT (Numero de mayor amplitud)
     const numeroGrande = 1234567890
     const numeroGrande2 = 12345678901234567890
     let numeroGrande3 = 123456789012345678901234567890
     let numeroGrande4 = 12345678901234567890123456789123456789

     console.log(`El primero experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande)}`)
     console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numeroGrande2)}`)
     console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que NO es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numeroGrande3)}`)
     console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que NO es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numeroGrande4)}`)

     numeroGrande3 = BigInt(123456789012345678901234567890n);
     console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fue convertido en BigInt, y su tipom de dato es ${typeof(numeroGrande3)}`)
     numeroGrande3 = BigInt(12345678901234567890123456789123456789n);
     console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya fue convertido en BigInt, y su tipom de dato es ${typeof(numeroGrande4)}`)
    
     // ¿Se pueden hace operaciones matematicas entre un NUMBER y un GIGINT?

     const numero =129;
     console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es ${BigInt(numero)+ numeroGrande3}`)


