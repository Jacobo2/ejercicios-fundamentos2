// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el método filter de los arrays
// y muéstralo por consola.

let gente = [{
        nombre: 'Jamiro',
        edad: 45
    },
    {
        nombre: 'Juan',
        edad: 35
    },
    {
        nombre: 'Paco',
        edad: 34
    },
    {
        nombre: 'Pepe',
        edad: 14
    },
    {
        nombre: 'Pilar',
        edad: 24
    },
    {
        nombre: 'Laura',
        edad: 24
    },
    {
        nombre: 'Jenny',
        edad: 10
    },
]

var j = 0;
var miArray = [];
for (let i of gente) {

    miArray[j] = i.nombre;
    j += 1;
}


        //if i.nombre.length = 4
    let result = miArray.filter(word => word.length = 4);
        console.log(result);

    let result2 = gente.filter(gente => gente.nombre.length = 4);
    console.log(result2);

//var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);