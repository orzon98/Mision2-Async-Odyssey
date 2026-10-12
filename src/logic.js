//Separar el input
export function separarIngredientes(texto){
    return texto.split(",").map(texto => texto.trim().toLowerCase().replaceAll(" ", "_")).filter(texto => texto.length > 0);
}

export function combinarResultados(listas) {
    const mapa = listas.flat().reduce((acc, receta) => {
        if (acc.has(receta.idMeal)){
            acc.get(receta.idMeal).coincidencias++;
        }else{
            acc.set(receta.idMeal, {
                id: receta.idMeal,
                nombre: receta.strMeal,
                imagen: receta.strMealThumb,
                coincidencias: 1,
            });
        }
        return acc;
    }, new Map());

    return [...mapa.values()].toSorted((a, b) => b.coincidencias - a.coincidencias);
}

const prueba = [
    [{ idMeal: "1", strMeal: "A", strMealThumb: "a.jpg" }, { idMeal: "2", strMeal: "B", strMealThumb: "b.jpg" }],
    [{ idMeal: "2", strMeal: "B", strMealThumb: "b.jpg" }, { idMeal: "3", strMeal: "C", strMealThumb: "c.jpg" }],
];
console.log(combinarResultados(prueba));
// B primero con coincidencias: 2, luego A y C con 1