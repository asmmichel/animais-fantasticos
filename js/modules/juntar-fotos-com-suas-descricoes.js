export default function juntarFotosComSuasDescricoes() {
  const fotosAnimais = document.querySelectorAll('[data-fotos-dos-animais] li');
  const descricaoAnimais = document.querySelectorAll('[data-descricoes-dos-animais] section');
  const ativarClasse = 'ativo';

  function ativarClasseEAnimacaoNaDescricao(index) {
    descricaoAnimais.forEach((descricao) => {
      descricao.classList.remove(ativarClasse);
    });
    const descricao = descricaoAnimais[index];
    descricao.classList.add(ativarClasse, descricao.dataset.animacao);
  }

  if (fotosAnimais.length && descricaoAnimais.length) {
    descricaoAnimais[0].classList.add(ativarClasse);
    fotosAnimais.forEach((foto, index) => {
      foto.addEventListener('click', () => {
        ativarClasseEAnimacaoNaDescricao(index);
      });
    });
  }
}
