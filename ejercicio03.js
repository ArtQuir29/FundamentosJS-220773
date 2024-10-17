const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de las salidas a cosnola 
console.warn("pracrica 05 : repaso de obejetos en Java Script");

//cariables independientes
console.log("%c1.- Variables Independientes", style_console);

//declaramos valores independientes

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS"
let Producto_Modelo="TUF 17"
let Producto_Precio=15749.50;
let Producto_Disponible=true;
let Producto_SKU=Symbol("TUF707VV-HX221W")
let Producto_Stock=15
let Producto_Imagen= null;
let Producto_Barcode;
let Producto_Categorias=["Electronicos","Computacion","Gamming","Promociones de Buen Fin","Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente

console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre} , Tipo de dato <${typeof(Producto_Nombre)}>
    Nombre: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Nombre: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Nombre: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Nombre: ${Producto_Disponible}, Tipo de dato <${typeof(Producto_Disponible)}>
    
    Nombre: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Nombre: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Nombre: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Nombre: ${Producto_Categorias}, Tipo de dato <${typeof(Producto_Categorias)}>
    `);

    console.log("en el caso del SKI al ser un Symbol , no se puede conectar a la cadena de imnpresion anterior  ")
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));



    //Ahora lo declramos como un objeto
    console.log("%c2.-Objeto",style_console);
    let Producto =
    {
        ID: 3332,
        Nombre:"tenis Depórtivos",
        Marca: "Nike",
        Modelo:"Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU:"DZ5485-612",
        Imagen: ".....",
        Barcode:null,
        Categorias:["Deportes","Juvenil"]



    }

    //Ahora leemos el obejto completo
    console.table(Producto);