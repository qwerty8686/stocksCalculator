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

  if (ini > 0 && qty > 0 && curren > 0) {
    calculateProfitAndLoss(ini, qty, curren);
  } else if (ini <= 0 || curren <= 0) {
    outputBox.innerText = "Price cannot be negative or zero";
    return;
  } else if (qty <= 0) {
    outputBox.innerText = "Quantity cannot be negative or zero";
    return;
  } else {
    outputBox.innerText = "";
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    lossPercentage = Math.round(lossPercentage * 100) / 100;
    outputBox.innerText = `The loss is ${loss} and the percent is ${lossPercentage}% 😥`;
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    profitPercentage = Math.round(profitPercentage * 100) / 100;
    outputBox.innerText = `The profit is ${profit}  and the percent is ${profitPercentage}% 😃🎉`;
  } else {
    outputBox.innerText = `No pain no gain and no gain no pain 🙄`;
  }
}
