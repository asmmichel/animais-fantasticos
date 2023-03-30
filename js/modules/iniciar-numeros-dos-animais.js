export default function iniciarNumerosDosAnimais() {
  // parte da animação dos números em si
  function ativarAnimacaoDosNumeros() {
    const numerosDosAnimais = document.querySelectorAll('[data-numero-do-animal]');

    numerosDosAnimais.forEach((spanNumeroDoAnimal) => {
      const numeroDoAnimal = +spanNumeroDoAnimal.innerText;
      let contador = 0;
      const pesoDoContador = Math.floor(numeroDoAnimal / 100);

      const funcaoDoTimer = setInterval(() => {
        contador += pesoDoContador;
        spanNumeroDoAnimal.innerText = contador;

        if (contador > numeroDoAnimal) {
          spanNumeroDoAnimal.innerText = numeroDoAnimal;
          clearInterval(funcaoDoTimer);
        }
      }, 50 * Math.random());
    });
  }

  // parte do observador que vigia a posição da tela
  const sectionDosNumeros = document.querySelector('.numeros');
  const observadorDaSectionDosNumeros = new MutationObserver(callbackDoObservadorDosNumeros);

  function callbackDoObservadorDosNumeros(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observadorDaSectionDosNumeros.disconnect();
      ativarAnimacaoDosNumeros();
    }
  }
  observadorDaSectionDosNumeros.observe(sectionDosNumeros, { attributes: true });
}
