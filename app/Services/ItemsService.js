import _item from "../Models/Item.js";
import _store from "../store.js";

//Private

//Public
export default class ItemService {
  get Items() {
    //return _state.values.map(v => new Value(v));
    return _store.items;
  }
}
