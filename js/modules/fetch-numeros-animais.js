import AnimaNumeros from './anima-numeros.js';

export default function fetchNumerosAnimais(urlFetch) {

  fazerFetchDosNumeros(urlFetch);

  async function fazerFetchDosNumeros(minhaURL) {
    try {
      const rjson = await (await fetch(minhaURL)).json();
      rjson.forEach((objAnimal) => {
        colocarDivDentroDoGridNumeros(objAnimal);
      });
      const initAnimaNumeros = new AnimaNumeros('[data-numero-do-animal]', '.numeros', 'ativo');
      initAnimaNumeros.init();
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
}
