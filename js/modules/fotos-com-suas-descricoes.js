export default class FotosComSuasDescricoes {
  constructor(fotosAnimais, descricaoAnimais) {
    this.fotosAnimais = document.querySelectorAll(fotosAnimais);
    this.descricaoAnimais = document.querySelectorAll(descricaoAnimais);
    this.ativarClasse = 'ativo';
  }

  addEventListener() {
    this.fotosAnimais.forEach((foto, index) => {
      foto.addEventListener('click', () => {
        this.ativarClasseEAnimacaoNaDescricao(index);
      });
    });
  }

  ativarClasseEAnimacaoNaDescricao(index) {
    this.descricaoAnimais.forEach((descricao) => {
      descricao.classList.remove(this.ativarClasse);
    });
    const descricao = this.descricaoAnimais[index];
    descricao.classList.add(this.ativarClasse, descricao.dataset.animacao);
  }

  init() {
    if (this.fotosAnimais.length && this.descricaoAnimais.length) {
      this.ativarClasseEAnimacaoNaDescricao(0);
      this.addEventListener();
    }
  }

}
