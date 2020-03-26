import ValuesController from "./Controllers/ValuesController.js";
import MoneyController from "./Controllers/MoneyController.js";

class App {
  constructor() {
    valuesController: new ValuesController();
    moneyController: new MoneyController();
  }
}

window["app"] = new App();
