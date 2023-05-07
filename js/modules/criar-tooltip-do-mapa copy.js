export default class Tooltip {
  constructor(divDaImagem) {
    this.divDaImagem = document.querySelector(divDaImagem);
  }

  quandoMouseDentro({ currentTarget }) {
    this.criarDivDaTooltip(currentTarget);
    currentTarget.addEventListener('mouseleave', this.quandoMouseFora);
    currentTarget.addEventListener('mousemove', this.quandoMouseMovendo);
  }

  criarDivDaTooltip(meuElemento) {
    const divDaTooltip = document.createElement('div');
    divDaTooltip.classList.add('div-da-tooltip');
    divDaTooltip.innerText = meuElemento.getAttribute('aria-label');
    document.body.appendChild(divDaTooltip);
    this.divDaTooltip = divDaTooltip;
  }

  quandoMouseFora({ currentTarget }) {
    this.divDaTooltip.remove();
    currentTarget.removeEventListener('mouseleave', this.quandoMouseFora);
    currentTarget.removeEventListener('mousemove', this.quandoMouseMovendo);
  }

  quandoMouseMovendo(event) {
    this.divDaTooltip.style.top = `${event.pageY + 20}px`;
    this.divDaTooltip.style.left = `${event.pageX + 20}px`;
  }

  adicionarEventListener() {
    this.divDaImagem.addEventListener('mouseover', this.quandoMouseDentro);
  }

  init() {
    if (this.divDaImagem) {
      this.adicionarEventListener();
    }
    return this;
  }


}
