import { observable, decorate } from "mobx";

import axios from "axios";

class CoffeeStore {
  constructor() {
    this.coffeeshops = null;
    this.coffeeshop = null;
    this.loading = true;
  }

  fetchAllCoffeeShops() {
    axios
      .get("http://coffee.q8fawazo.me/api/?format=json")
      .then(res => res.data)
      .then(fetchedCoffeeshops => {
        this.coffeeshops = fetchedCoffeeshops;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

decorate(CoffeeStore, {
  coffeeshops: observable,
  coffeeshop: observable,
  loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;
