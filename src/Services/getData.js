class Producto {
    constructor (id, nombre, imagen, precio, cantidad, subtotal){
                 this.id = id;
                 this.nombre = nombre;
                 this.imagen = imagen;
                 this.precio = precio;
                 this.cantidad = 1;
                 this.subtotal = precio * cantidad;
    }
}
const productos = [];
productos.push(new Producto(2, 'Lavanda y olíbano', `./image/sahume2.jpeg`, 300));
productos.push(new Producto(1, 'Naranja y citronella', `./image/sahume.jpg`, 300));
productos.push(new Producto(3, 'Linea Premiun X 4 "Intenso"', `./image/sahume3.jpg`, 900));
productos.push(new Producto(4, 'Linea Natural X5 "Para las tardes"', `./image/sahume4.jpg`, 900));
productos.push(new Producto(5, 'linea Natural  X 4', `./image/sahume5.jpg`, 900));
productos.push(new Producto(6, 'Linea Natural X 3 "Rosas"', `./image/sahume6.jpg`, 600));
productos.push(new Producto(7, 'Linea Premiun X 5 "Ruda"', `./image/sahume7.jpg`, 1000));
productos.push(new Producto(8, 'linea Premiun Triple combinado x 5 "noche"', `./image/sahume8.jpg`, 1000));
productos.push(new Producto(9, 'linea Premiun Triple combinado X 5 "Dia"', `./image/sahume9.jpg`, 1000));


const getData =  new Promise ((res) =>{
   setTimeout(() => {
       res(productos);
   }, 2000);
});
export default getData;