import iniciarTratamentoClickFora from './iniciar-tratamento-click-fora.js';

export default function iniciarMenuMobile() {
  const menuMobileBotao = document.querySelector('[data-menu-mobile-botao]');
  const menuMobile = document.querySelector('[data-menu-mobile]');
  const acaoDeEventos = ['touchstart', 'click'];

  function abrirMenuMobile() {
    menuMobile.classList.add('ativo');
    menuMobileBotao.classList.add('ativo');

    iniciarTratamentoClickFora(menuMobile, acaoDeEventos, () => {
      menuMobile.classList.remove('ativo');
      menuMobileBotao.classList.remove('ativo');
    });
  }

  if (menuMobileBotao) {
    acaoDeEventos.forEach((cadaAcaoDeEvento) => {
      menuMobileBotao.addEventListener(cadaAcaoDeEvento, abrirMenuMobile);
    });
  }
}
