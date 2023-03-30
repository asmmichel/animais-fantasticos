export default class ScrollDosLinksInternosSuave {
  constructor(linksInternos, opcoes) {
    this.linksInternos = document.querySelectorAll(linksInternos);
    if (opcoes === undefined) {
      this.opcoes = {
        behavior: 'smooth',
        block: 'start',
      };
    } else {
      this.opcoes = opcoes;
    }
    this.ativarScrollSuave = this.ativarScrollSuave.bind(this);
  }

  adicionarEventListener() {
    this.linksInternos.forEach((meuLinkInterno) => {
      meuLinkInterno.addEventListener('click', this.ativarScrollSuave);
    });
  }

  ativarScrollSuave(meuEvento) {
    meuEvento.preventDefault();
    const hrefComNomeIgualID = meuEvento.currentTarget.getAttribute('href');
    const minhaSection = document.querySelector(hrefComNomeIgualID);
    minhaSection.scrollIntoView(this.opcoes);
  }

  init() {
    if (this.linksInternos.length) this.adicionarEventListener();
    return this;
  }

}
