export default function deixarScrollDosLinksInternosSuave() {
  const linksInternos = document.querySelectorAll('[data-links-internos] a[href^="#"]');
  linksInternos.forEach((meuLinkInterno) => {
    meuLinkInterno.addEventListener('click', ativarScrollSuave);
  });

  function ativarScrollSuave(meuEvento) {
    meuEvento.preventDefault();
    const hrefComNomeIgualID = meuEvento.currentTarget.getAttribute('href');
    const minhaSection = document.querySelector(hrefComNomeIgualID);
    minhaSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
