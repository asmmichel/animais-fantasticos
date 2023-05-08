export default class SemaforoFuncionamento {
  constructor(liF) { // F = DeFuncionamento e EDF = Está Dentro de Funcionamento?
    this.liF = document.querySelector(liF);
  }

  dadosFuncionamento() {
    this.diasF = this.liF.dataset.diasDeFuncionamento.split(',').map(Number);
    this.horarioF = this.liF.dataset.horarioDeFuncionamento.split(',').map(Number);
  }

  dadosAtuais() {
    this.dataAtual = new Date();
    this.diaAtual = this.dataAtual.getDay();
    this.horarioAtual = this.dataAtual.getUTCHours() - 3;
  }

  verificarSeEstaAberto() {
    const diaAtualEDF = this.diasF.indexOf(this.diaAtual) !== -1;
    const horarioAtualEDF = this.horarioAtual >= this.horarioF[0] && this.horarioAtual < this.horarioF[1];
    return diaAtualEDF && horarioAtualEDF;
  }

  estaAberto() {
    if (this.verificarSeEstaAberto()) {
      this.liF.classList.add('aberto');
    }
  }

  init() {
    if (this.liF) {
      this.dadosFuncionamento();
      this.dadosAtuais();
      this.estaAberto();
    }
    return this;
  }
}
