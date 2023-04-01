export default class RespostasFaqAcorddion {
  constructor(listaAcordeao) {
    this.listaAcordeao = document.querySelectorAll(listaAcordeao);
    this.classeAtiva = 'ativo';
  }

  adicionarEventListener() {
    this.listaAcordeao.forEach((meuDT) => {
      meuDT.addEventListener('click', () => this.fazerToggleDoAcordeao(meuDT));
    });
  }

  fazerToggleDoAcordeao(meuDT) {
    meuDT.classList.toggle(this.classeAtiva);
    meuDT.nextElementSibling.classList.toggle(this.classeAtiva);
  }

  init() {
    if (this.listaAcordeao.length) {
      this.fazerToggleDoAcordeao(this.listaAcordeao[0]);
      this.adicionarEventListener();
    }
  }
  
}
