export default function aparecerSection() {
  const minhasSections = document.querySelectorAll('[data-aparecer-section]');

  function mostrarOuRemoverSection() {
    minhasSections.forEach((minhaSection) => {
      const dezPorcentoDaSectionJaApareceNoDom = minhaSection.getBoundingClientRect().top < window.innerHeight * 0.90;
      if (dezPorcentoDaSectionJaApareceNoDom) minhaSection.classList.add('ativo');
      else if (minhaSection.classList.contains('ativo')) minhaSection.classList.remove('ativo');
    });
  }

  if (minhasSections.length) {
    window.addEventListener('scroll', mostrarOuRemoverSection);
    mostrarOuRemoverSection();
  }
}
