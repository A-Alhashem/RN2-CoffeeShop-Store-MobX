import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
import cartStore from "../Store/cartStore";

class CoffeeCart extends Component {
  render() {
    let coffeeshops = cartStore.list;
    let content;
    if (coffeeshops) {
      content = coffeeshops.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {content}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
