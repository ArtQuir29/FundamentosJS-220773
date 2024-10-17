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


