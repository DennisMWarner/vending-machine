import Money from "./Models/Money.js";
import Value from "./Models/Value.js";

let _state = {
  activeValue: new Value({ title: "value" }),
  amount: 0,
  Items: []
};

class Store {
  get State() {
    return _state;
  }
}

const STORE = new Store();

export default STORE;
