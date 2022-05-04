const item = {
    id: 1,
    nombre: `Lavanda y Olívano`,
    imagen: `./sahume2.jpeg`,
    precio: 300,
    cantidad: 1,
    stock: 10
}

const getItem = new Promise ((res) =>{
    setTimeout(() =>{
        res(item);
    }, 2000);
});
export default getItem;