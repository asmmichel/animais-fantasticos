export default function aparecerRespostasFaqAcorddion() {
  const listaAcordeao = document.querySelectorAll('[data-faq-acordeao] dt');
  const classeAtiva = 'ativo';

  function ativarAcordeao() {
    this.classList.toggle(classeAtiva);
    this.nextElementSibling.classList.toggle(classeAtiva);
  }

  if (listaAcordeao.length) {
    listaAcordeao[0].classList.add(classeAtiva);
    listaAcordeao[0].nextElementSibling.classList.add(classeAtiva);
    listaAcordeao.forEach((meuDT) => {
      meuDT.addEventListener('click', ativarAcordeao);
    });
  }
}
