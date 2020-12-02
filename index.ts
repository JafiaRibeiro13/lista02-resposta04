// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Questão 04</h1>`;
function quant_Vogais(frase: string) {
    let qntd_Vogal = 0;
    let vogais = ['a', 'e', 'i', 'o', 'u',"A","E", "I", "O", "U"];
    let i = 0;

    for (i = 0; i < frase.length; i++ ) {
        if(vogais.indexOf(frase[i]) != -1) {
            qntd_Vogal++;
        }
    }

    return qntd_Vogal;
}

let fra = prompt("Quala a palavra?:");
document.write(`<h1>${fra}<h1>`);
document.write(`<h1><p> tem ${quant_Vogais(fra)} vogais.<h1>`);