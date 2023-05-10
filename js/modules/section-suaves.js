import debounce from './debounce.js';

export default class SectionSuaves {
  constructor(minhasSections) {
    this.minhasSections = document.querySelectorAll(minhasSections);

    this.mostrarOuRemoverSection = debounce(this.mostrarOuRemoverSection.bind(this), 50);
  }

  criarObjDistanciaDoTopo() {
    this.objDistanciaDoTopo = [...this.minhasSections].map((section) => {
      const topo = Math.floor(section.offsetTop - window.innerHeight * 0.80);
      return {
        section,
        topo,
      };
    });
  }

  mostrarOuRemoverSection() {
    this.objDistanciaDoTopo.forEach((obj) => {
      const classe = obj.section.classList;
      if (window.pageYOffset > obj.topo) classe.add('ativo');
      else if (classe.contains('ativo')) classe.remove('ativo');
    });
  }
  
  adicionarEventListener() {
    this.criarObjDistanciaDoTopo();
    this.mostrarOuRemoverSection();
    window.addEventListener('scroll', this.mostrarOuRemoverSection);
  }

  init() {
    if (this.minhasSections.length) {
      this.adicionarEventListener();
    }
    return this;
  }
}
