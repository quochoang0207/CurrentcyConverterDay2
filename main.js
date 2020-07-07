const currencyRatio = {
  vnd: {
    usd: 0.000043,
    krw: 0.051,
    eur: 0.000039,
    vnd: 1
  },
  usd: {
    usd: 1,
    krw: 1193.27,
    eur: 0.9,
    vnd: 23235.5
  },
  krw: {
    usd: 0.00084,
    krw: 1,
    eur: 0.00075,
    vnd: 19.47
  },
  eur: {
    usd: 1.12869,
    krw: 1348.79,
    eur: 1,
    vnd: 26197.18
  }
  
};

let inputTag = document.getElementById('amountInput')
console.log('input',inputTag)

let fromConveter = document.getElementById('from')
  
let toConveter = document.getElementById('to')

function convert(){
  let amount = inputTag.value;
  let result = amount * currencyRatio[fromConveter.value][toConveter.value];
  document.getElementById('resultArea').innerHTML = `${result}`
}





















