export default class AnimaNumeros {
  constructor(numerosParaAnimar, paiDosNumeros, classeDoObservador) {
    this.numerosParaAnimar = document.querySelectorAll(numerosParaAnimar);
    this.paiDosNumeros = document.querySelector(paiDosNumeros);
    this.classeDoObservador = classeDoObservador;

    this.callbackDoObservadorDosNumeros = this.callbackDoObservadorDosNumeros.bind(this);
  }

  callbackDoObservadorDosNumeros(mutation) {
    if (mutation[0].target.classList.contains(this.classeDoObservador)) {
      this.observadorDoPaiDosNumeros.disconnect();
      this.pegarCadaNumero();
    }
  }

  pegarCadaNumero() {
    this.numerosParaAnimar.forEach((spanNumeroDoAnimal) => this.constructor.ativarAnimacaoDosNumeros(spanNumeroDoAnimal));
  }

  static ativarAnimacaoDosNumeros(spanNumeroDoAnimal) {
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
  }

  adicionarMutationObserver() {
    this.observadorDoPaiDosNumeros = new MutationObserver(this.callbackDoObservadorDosNumeros);
    this.observadorDoPaiDosNumeros.observe(this.paiDosNumeros, { attributes: true });
  }

  init() {
    if (this.numerosParaAnimar && this.paiDosNumeros && this.classeDoObservador) {
      this.adicionarMutationObserver();
    }
    return this;
  }
}
