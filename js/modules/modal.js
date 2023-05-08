export default class Modal {
  constructor(botaoAbrir, botaoFechar, sectionGeralModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.sectionGeralModal = document.querySelector(sectionGeralModal);

    this.abrirOUfecharModal = this.abrirOUfecharModal.bind(this);
    this.cliqueForaDoModal = this.cliqueForaDoModal.bind(this);
  }

  adicionarEventListener() {
    this.botaoAbrir.addEventListener('click', this.abrirOUfecharModal);
    this.botaoFechar.addEventListener('click', this.abrirOUfecharModal);
    this.sectionGeralModal.addEventListener('click', this.cliqueForaDoModal);
  }

  previnirPadrao(event) {
    event.preventDefault();
    this.abrirOUfecharModal(event);
  }

  abrirOUfecharModal() {
    this.sectionGeralModal.classList.toggle('ativo');
  }

  cliqueForaDoModal(event) {
    if (event.target === this.sectionGeralModal) this.abrirOUfecharModal(event);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.sectionGeralModal) {
      this.botaoAbrir.style.cursor = 'pointer';
      this.adicionarEventListener();
    }
    return this;
  }

}
