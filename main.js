const formulario = document.querySelector('.form-create');
let contador = 1;


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const publiacion = document.querySelector('#publicacion').value;
    const contenedor = document.querySelector('.contenedor-publicaciones');
    
    contenedor.innerHTML += `
    <div class="contenedor-publicaciones">
        <p>Id: ${contador}</p>
        <p>${publiacion}</p>
        <button>Editar</button>
        <button>Eliminar</button>
    </div>`
    contador++;
});