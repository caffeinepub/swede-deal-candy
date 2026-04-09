module {
  public type OrderItem = {
    productName : Text;
    quantity : Nat;
    unitPrice : Float;
  };

  public type Order = {
    id : Nat;
    customerName : Text;
    customerEmail : Text;
    customerPhone : Text;
    items : [OrderItem];
    totalPrice : Float;
    createdAt : Int;
  };
};
