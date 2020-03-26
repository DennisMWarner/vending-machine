import Money from "../Models/Money.js";

//Private
let _state = {
  amount: 0
};

//Public
export default class MoneyService {
  get Money() {
    return _state.amount;
  }
  moneyAdd(amount) {
    _state.amount += amount;
  }
  moneySubtract(amount) {
    _state.amount -= amount;
  }
}
