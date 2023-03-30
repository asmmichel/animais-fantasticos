export default function criarSemaforoDeFuncionamento() {
  const liDeFuncionamento = document.querySelector('[data-dias-de-funcionamento]');

  const diasDeFuncionamento = liDeFuncionamento.dataset.diasDeFuncionamento.split(',').map(Number);
  const horarioDeFuncionamento = liDeFuncionamento.dataset.horarioDeFuncionamento.split(',').map(Number);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const diaAtualEstaDentroDeFuncionamento = diasDeFuncionamento.indexOf(diaAtual) !== -1;
  const horarioAtualEstaDentroDeFuncionamento = horarioAtual >= horarioDeFuncionamento[0] && horarioAtual < horarioDeFuncionamento[1];

  if (diaAtualEstaDentroDeFuncionamento && horarioAtualEstaDentroDeFuncionamento) {
    liDeFuncionamento.classList.add('aberto');
  }
}
