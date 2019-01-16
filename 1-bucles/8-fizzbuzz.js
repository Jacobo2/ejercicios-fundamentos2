// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (var i=1 ;i <= 100; i+=1){

    if (i % 3 ){
        console.log("GEEKS");
    }
    if (i % 5 ){
        console.log("HUBS");
    }
    if ((i % 3 ) && (i % 5 )){
        console.log("GEEKSHUBS");
    }
}