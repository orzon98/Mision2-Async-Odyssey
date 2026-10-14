import { obtenerComida } from "./api.js";
import { separarIngredientes, combinarResultados } from "./logic.js";
import { renderRecetas, mostrarEstado } from "./render.js";

const formulario = document.getElementById("form-busqueda");
const input = document.getElementById("ingrediente");

//Creamos el controlador
let controlador;

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    //Cancelamos la anterior busqueda y creamos el siguiente
    controlador?.abort();
    const miControlador = new AbortController();

    controlador = miControlador;

    const ingredientes = separarIngredientes(input.value);
    if (ingredientes.length === 0) return;

    mostrarEstado("cargando");
    renderRecetas([]);

    try {
        //Ahora llamamos a obtener comida con la señal
        const listas = await Promise.all(ingredientes.map(ing => obtenerComida(ing, miControlador.signal)));
        const recetas = combinarResultados(listas);

        if (recetas.length === 0) {
            mostrarEstado("vacio");
            return;
        }

        renderRecetas(recetas);
        mostrarEstado("datos");
    } catch (error) {

        //Si es abortError se hace return porque no queremos mostrar nada al ser una busqueda cancelada
        if(error.name === "AbortError"){
            return;
        }
        mostrarEstado("error", "No se pudieron cargar las recetas. Inténtalo de nuevo.");
        console.error(error);
        
        
    }finally{
        //Solo se oculta cargando si sigue siendo la busqueda actual
        if(controlador === miControlador) document.getElementById("cargando").hidden = true;
    }
});