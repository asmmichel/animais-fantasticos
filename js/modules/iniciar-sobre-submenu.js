import iniciarTratamentoClickFora from './iniciar-tratamento-click-fora.js';

export default function iniciarSobreSubmenu() {
  const lisComSubmenu = document.querySelectorAll('[data-submenu]');
  const acaoDeEventos = ['touchstart', 'click'];

  function previnirPadraoEAtivarClasse(event) {
    event.preventDefault();
    this.classList.add('ativo');
    iniciarTratamentoClickFora(this, acaoDeEventos, () => {
      this.classList.remove('ativo');
    });
  }

  lisComSubmenu.forEach((minhaLIInterna) => {
    acaoDeEventos.forEach((cadaAcaoDeEvento) => {
      minhaLIInterna.addEventListener(cadaAcaoDeEvento, previnirPadraoEAtivarClasse);
    });
  });
}
