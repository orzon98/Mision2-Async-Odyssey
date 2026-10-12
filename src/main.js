import { obtenerComida } from "./api.js";
import { separarIngredientes, combinarResultados } from "./logic.js";
import { renderRecetas, mostrarEstado } from "./render.js";

const formulario = document.getElementById("form-busqueda");
const input = document.getElementById("ingrediente");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const ingredientes = separarIngredientes(input.value);
    if (ingredientes.length === 0) return;

    mostrarEstado("cargando");
    renderRecetas([]);

    try {
        const listas = await Promise.all(ingredientes.map(obtenerComida));
        const recetas = combinarResultados(listas);

        if (recetas.length === 0) {
            mostrarEstado("vacio");
            return;
        }

        renderRecetas(recetas);
        mostrarEstado("datos");
    } catch (error) {
        mostrarEstado("error", "No se pudieron cargar las recetas. Inténtalo de nuevo.");
        console.error(error);
    }
});