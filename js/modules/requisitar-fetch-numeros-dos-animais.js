import iniciarNumerosDosAnimais from './iniciar-numeros-dos-animais.js';

export default function requisitarFetchNumerosDosAnimais() {
  async function fazerFetchDosNumeros(minhaURL) {
    try {
      const rjson = await (await fetch(minhaURL)).json();
      rjson.forEach((objAnimal) => {
        colocarDivDentroDoGridNumeros(objAnimal);
      });
      iniciarNumerosDosAnimais();
    } catch (Error) {
      document.querySelector('#numeros').style.display = 'none';
      console.log(Error);
    }
  }

  function colocarDivDentroDoGridNumeros(objAnimal) {
    const divDoAnimal = criarDivDoAnimal(objAnimal);
    const gridInternoDosNumeros = document.querySelector('.grid-interno-dos-numeros');
    gridInternoDosNumeros.appendChild(divDoAnimal);
  }

  function criarDivDoAnimal(objAnimal) {
    const divDoAnimal = document.createElement('div');
    divDoAnimal.classList.add('animal-e-seu-numero');
    divDoAnimal.innerHTML = `<h3>${objAnimal.especie}</h3><span data-numero-do-animal>${objAnimal.total}</span>`;
    return divDoAnimal;
  }

  fazerFetchDosNumeros('./api/numeros-animais-api.json');
}
