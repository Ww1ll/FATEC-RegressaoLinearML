function media(array) {
    const soma = array.reduce((acc, val) => acc + val, 0);
    return soma / array.length;
}

function regressaoLinear(x, y) {
    if (x.length !== y.length) {
        throw new Error("Os arrays x e y devem ter o mesmo comprimento");
    }

    const n = x.length;
    const xMedia = media(x);
    const yMedia = media(y);

    let numerador = 0;
    let denominador = 0;

    for (let i = 0; i < n; i++) {
        numerador += (x[i] - xMedia) * (y[i] - yMedia);
        denominador += (x[i] - xMedia) ** 2;
    }

    const m = numerador / denominador; 

    return m;
}

let mediaValores = 0;
for (let i = 1; i < 5; i++) {
    const amostra = require(`./Data/json/Amostra${i}.json`);

    const x = amostra.map(item => item.x); 
    const y = amostra.map(item => item.y);

    const coeficienteAngular = regressaoLinear(x, y);
    mediaValores += coeficienteAngular;
    console.log(`Coeficiente Angular Amostra ${i}: ${coeficienteAngular}`)
}

mediaValores = (mediaValores / 4)
console.log(`Média: ${mediaValores}`)