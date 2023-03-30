export default function criarTooltipDoMapa() {
  const divDoMapa = document.querySelectorAll('[data-div-mapa]');

  const mouseForaDoMapa = {
    handleEvent() {
      this.divDaTooltipDoMapa.remove();
      this.meuElemento.removeEventListener('mouseleave', mouseForaDoMapa);
      this.meuElemento.removeEventListener('mousemove', mouseMovendoNoMapa);
    },
  };

  const mouseMovendoNoMapa = {
    handleEvent(event) {
      this.divDaTooltipDoMapa.style.top = `${event.pageY + 20}px`;
      this.divDaTooltipDoMapa.style.left = `${event.pageX + 20}px`;
    },
  };

  function mouseDentroDoMapa() {
    const divDaTooltipDoMapa = criarDIVdaDescricao(this);
    mouseForaDoMapa.meuElemento = this;
    mouseForaDoMapa.divDaTooltipDoMapa = divDaTooltipDoMapa;
    this.addEventListener('mouseleave', mouseForaDoMapa);
    mouseMovendoNoMapa.divDaTooltipDoMapa = divDaTooltipDoMapa;
    this.addEventListener('mousemove', mouseMovendoNoMapa);
  }

  function criarDIVdaDescricao(meuElemento) {
    const divDaTooltipDoMapa = document.createElement('div');
    divDaTooltipDoMapa.classList.add('div-da-tooltip-do-mapa');
    const textoDoAriaLabel = meuElemento.getAttribute('aria-label');
    divDaTooltipDoMapa.innerText = textoDoAriaLabel;
    document.body.appendChild(divDaTooltipDoMapa);
    return divDaTooltipDoMapa;
  }

  divDoMapa.forEach((divDaTooltipDoMapa) => {
    divDaTooltipDoMapa.addEventListener('mouseover', mouseDentroDoMapa);
  });
}
