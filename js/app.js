document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')
const modal = new bootstrap.Modal('#modal, {}')


async function traerProductos(){
    const url = 'https://fakestoreapi.com/products'

    try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json()
        pintarProductos(respuesta)
    } catch (error) {
        console.log(error)
    }


}

function pintarProductos(productos){
    console.log(productos)
    productos.forEach(prod => {
        const{id, title, price, category, description, image} = prod
        contenedor.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">Descripcion: ${description}</p>
          <p class="card-subtitle mb-2 text-muted">Precio: ${price}</p>
          <p class="card-subtitle mb-2 ">Categoria: ${category}</p>
          <button onclick=verProducto(${id}) class"btn btn-primary">Ver imagen</button>
        </div>
      </div>
      `
    });
}

async function verProducto(id){
    const url = `https://fakestoreapi.com/products/${id}`

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        verProductoDetalle(resultado)
    } catch (error) {
        console.log(error)
    }


}

function verProductoDetalle(resultado) {
    const{title, price, category, image} = resultado



    modal.show()
}

