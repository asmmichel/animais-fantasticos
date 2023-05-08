import iniciarTratamentoClickFora from './iniciar-tratamento-click-fora.js';

export default class Submenu {
  constructor(lisComSubmenu) {
    this.lisComSubmenu = document.querySelectorAll(lisComSubmenu);
    this.acaoDeEventos = ['touchstart', 'click'];

    this.previnirPadraoEAtivarClasse = this.previnirPadraoEAtivarClasse.bind(this);
  }

  previnirPadraoEAtivarClasse(event) {
    event.preventDefault();
    const minhaLIInterna = event.currentTarget;
    minhaLIInterna.classList.add('ativo');
    iniciarTratamentoClickFora(minhaLIInterna, this.acaoDeEventos, () => {
      minhaLIInterna.classList.remove('ativo');
    });
  }

  adicionarEventListener() {
    this.lisComSubmenu.forEach((minhaLIInterna) => {
      this.acaoDeEventos.forEach((cadaAcaoDeEvento) => {
        minhaLIInterna.addEventListener(cadaAcaoDeEvento, this.previnirPadraoEAtivarClasse);
      });
    });
  }

  init() {
    if (this.lisComSubmenu.length) {
      this.adicionarEventListener();
    }
    return this;
  }

}
