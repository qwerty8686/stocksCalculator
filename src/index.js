import "./styles.css";
var initialPrice = document.querySelector("#initialPrice");
var stocksQuantity = document.querySelector("#stocksQuantity");
var currentPrice = document.querySelector("#currentPrice");
var button = document.querySelector("#button");
var outputBox = document.querySelector("#output");
button.addEventListener("click", clickHandler);

function clickHandler() {
  var ini = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curren = Number(currentPrice.value);

  calculateProfitAndLoss(ini, qty, curren);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    outputBox.innerHTML = `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`;
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    outputBox.innerHTML = `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`;
  } else {
    outputBox.innerHTML = `No pain no gain and no gain no pain`;
  }
}
