import MoneyService from "../Services/MoneyService.js";

//Private
let _moneyService = new MoneyService();
function _draw() {
  console.log(_moneyService.Money);
  document.getElementById(
    "amtDeposited"
  ).innerText = _moneyService.Money.toString();
}

//Public
export default class MoneyController {
  constructor() {
    console.log(_moneyService.Money);
    _draw();
    console.log("MoneyController constructed...");
  }
  moneyAdd(amount) {
    console.log("moneyAdd()...");
    _moneyService.moneyAdd(amount);
    _draw();
  }
  moneySubtract(amount) {
    _moneyService.moneySubtract(amount);
    _draw();
  }
}
