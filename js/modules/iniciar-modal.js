export default function iniciarModal() {
  const botaoAbrir = document.querySelector('[data-abrir-modal]');
  const botaoFechar = document.querySelector('[data-fechar-modal]');
  const sectionGeralModal = document.querySelector('[data-section-modal]');

  function abrirOUfecharModal(event) {
    event.preventDefault();
    sectionGeralModal.classList.toggle('ativo');
  }

  function cliqueForaDoModal(event) {
    if (event.target === this) abrirOUfecharModal(event);
  }

  if (botaoAbrir && botaoFechar && sectionGeralModal) {
    botaoAbrir.addEventListener('click', abrirOUfecharModal);
    botaoFechar.addEventListener('click', abrirOUfecharModal);
    sectionGeralModal.addEventListener('click', cliqueForaDoModal);
  }
}
