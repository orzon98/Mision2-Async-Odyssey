export function renderRecetas(recetas){
    const resultados = document.getElementById("resultados");

    resultados.innerHTML = recetas.map(receta => `
        <article class="card">
          <img src="${receta.imagen}" alt="${receta.nombre}" />
          <h3>${receta.nombre}</h3>
        </article>
        `).join("");
}

export function mostrarEstado(estado, mensaje=""){
    const estados = {
        cargando: document.getElementById("cargando"),
        error: document.getElementById("error"),
        vacio: document.getElementById("vacio"),
    };

    if(mensaje) estados.error.textContent=mensaje;
    // Cualquier valor distinto de cargando/error/vacio (p. ej. "datos") oculta los tres mensajes.
    Object.entries(estados).forEach(([nombre, elemento]) => {elemento.hidden = nombre !== estado});
}