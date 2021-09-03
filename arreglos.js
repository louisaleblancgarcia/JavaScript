/*let productos =[];
let listaProductos = document.getElementById("ListaElementos");


function agregarElemento()
{
    let newElement = window.prompt('Nuevo Eleemento: ');
    if(newElement != null)
    {
        productos.push(newElement);
    }
    console.log(productos);

    while(listaProductos.firstChild)
    {
        listaProductos.removeChild(listaProductos.firstChild);

    }

    productos.forEach((producto) => {
        let nuevoProducto = document.createElement("li");
        nuevoProducto.innerHTML =`${producto} <button id="btnDelete">Eliminar</button>`;
        listaProductos.appendChild(nuevoProducto);
    });

}*/