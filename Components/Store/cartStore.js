import React, { Component } from "react";
import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.list = [
      {
        drink: "Latte",
        option: "Small",
        quantity: 2
      },
      {
        drink: "Espresso",
        option: "Large",
        quantity: 1
      }
    ];
  }
}

decorate(CartStore, {
  list: observable
});

const cartStore = new CartStore();
export default cartStore;
