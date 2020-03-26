export default class Item {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.amount = data.amount;
    this.img = data.img;
  }

  get Template() {
    return /*html*/ ` <div class="col-3">
    <h3>Name: <span>${this.name}</span></h3>
    <h5>Description: <span>${this.description}</span></h5>
    <h5>Price: <span>${this.price}</span></h5>
    <h5>Amount: <span>${this.amount}</span></h5>
    <img src="${this.img}" alt="http://place-hold.it/300x300" class="img-fluid">
    <button class="btn btn-success border rounded text-light btn-block">Buy</button>
</div>`;
  }
}
