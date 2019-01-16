
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

var k = 0;
for (var i = 0; i <= 2;i++){

    for (var j = 0;j <= 2;j++){

        var result = i.toString() + j.toString();
        result = result.toString();
        matriz[i] = result;
       // i = i.toInteger;
       // j = j.toInteger;
        console.log(matriz[i]);
    }
   // k = k + 10;
}