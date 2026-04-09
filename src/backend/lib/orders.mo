import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/orders";

module {
  public type Order = Types.Order;
  public type OrderItem = Types.OrderItem;

  public func placeOrder(
    orders : List.List<Order>,
    nextId : Nat,
    customerName : Text,
    customerEmail : Text,
    customerPhone : Text,
    items : [OrderItem],
  ) : Order {
    let total = items.foldLeft(
      0.0,
      func(acc : Float, item : OrderItem) : Float { acc + item.unitPrice * item.quantity.toFloat() },
    );
    let order : Order = {
      id = nextId;
      customerName;
      customerEmail;
      customerPhone;
      items;
      totalPrice = total;
      createdAt = Time.now();
    };
    orders.add(order);
    order;
  };

  public func getOrders(orders : List.List<Order>) : [Order] {
    orders.toArray().reverse()
  };

  public func getOrderById(orders : List.List<Order>, id : Nat) : ?Order {
    orders.find(func(o) { o.id == id })
  };
};
