function crearArrayRandom(longitud) {
    return Array.from({ length: longitud }, () => Math.floor(Math.random() * 100));
}

function sumarElementosArray(array, cb) {
    console.log("\n---\tNuevo array\t---");
    array.reduce((acu, e) => {
        acu += e;
        cb("Elemento actual: " + e + "\nEl acumulador va: " + acu);
        return acu;
    }, 0);
}

let array1 = crearArrayRandom(5);
let array2 = crearArrayRandom(10);
let array3 = crearArrayRandom(15);

// Alert()
sumarElementosArray(array1, alert);
sumarElementosArray(array2, alert);
sumarElementosArray(array3, alert);


// Console.log()
sumarElementosArray(array1, console.log);
sumarElementosArray(array2, console.log);
sumarElementosArray(array3, console.log);