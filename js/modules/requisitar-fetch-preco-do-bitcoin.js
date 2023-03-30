export default function requisitarFetchPrecoDoBitcoin() {
  async function fazerFetchDoBitcoin() {
    const precoDoBitcoin = document.querySelector('[data-preco-do-bitcoin]');

    try {
      const rjson = await (await fetch('https://blockchain.info/ticker')).json();
      precoDoBitcoin.innerText = (10000 / rjson.BRL.sell).toFixed(3);
    } catch (Error) {
      precoDoBitcoin.parentElement.style.display = 'none';
      console.log(Error);
    }
  }

  fazerFetchDoBitcoin();
}
