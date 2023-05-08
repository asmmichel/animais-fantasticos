import iniciarTratamentoClickFora from './iniciar-tratamento-click-fora.js';

export default class MenuMobile {
  constructor(menuMobileBotao, menuMobile) {
    this.menuMobileBotao = document.querySelector(menuMobileBotao);
    this.menuMobile = document.querySelector(menuMobile);
    this.acaoDeEventos = ['touchstart', 'click'];

    this.abrirMenuMobile = this.abrirMenuMobile.bind(this);
  }

  abrirMenuMobile() {
    this.menuMobile.classList.add('ativo');
    this.menuMobileBotao.classList.add('ativo');

    iniciarTratamentoClickFora(this.menuMobile, this.acaoDeEventos, () => {
      this.menuMobile.classList.remove('ativo');
      this.menuMobileBotao.classList.remove('ativo');
    });
  }

  adicionarEventListener() {
    this.acaoDeEventos.forEach((cadaAcaoDeEvento) => {
      this.menuMobileBotao.addEventListener(cadaAcaoDeEvento, this.abrirMenuMobile);
    });
  }

  init() {
    if (this.menuMobileBotao && this.menuMobile) {
      this.adicionarEventListener();
    }
    return this;
  }
}
