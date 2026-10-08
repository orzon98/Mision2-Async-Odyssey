export async function obtenerComida(ingrediente){
    const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);

    if(!respuesta.ok) throw new Error(`HTTP ${respuesta.status} al pedir ${ingrediente}`);

    const datos = await respuesta.json();

    return datos.meals ?? [];
}