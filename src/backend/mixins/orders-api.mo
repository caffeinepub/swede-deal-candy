import List "mo:core/List";
import Types "../types/orders";
import OrdersLib "../lib/orders";

mixin (orders : List.List<Types.Order>) {
  public func placeOrder(
    customerName : Text,
    customerEmail : Text,
    customerPhone : Text,
    items : [Types.OrderItem],
  ) : async Nat {
    let order = OrdersLib.placeOrder(
      orders,
      orders.size(),
      customerName,
      customerEmail,
      customerPhone,
      items,
    );
    order.id;
  };

  public query func getOrders() : async [Types.Order] {
    OrdersLib.getOrders(orders);
  };

  public query func getOrderById(id : Nat) : async ?Types.Order {
    OrdersLib.getOrderById(orders, id);
  };
};
