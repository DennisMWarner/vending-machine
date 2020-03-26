import MoneyService from "../Services/MoneyService.js";

//Private
let _moneyService = new MoneyService();
function _draw() {
  document.getElementById(
    "amtDeposited"
  ).innerHTML = _moneyService.Money.toString();
}

//Public
export default class MoneyController {
  constructor() {
    console.log(_moneyService.Money);
    _draw();
  }
  moneyAdd(amount) {
    _moneyService.moneyAdd(amount);
    _draw();
  }
  moneySubtract(amount) {
    _moneyService.moneySubtract(amount);
    _draw();
  }
}
