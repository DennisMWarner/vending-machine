export default class Money {
  constructor(data) {
    this.amount = data.amount;
  }

  get Template() {
    return this.amount;
  }
}
