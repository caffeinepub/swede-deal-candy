import List "mo:core/List";
import Types "types/orders";
import OrdersApi "mixins/orders-api";

actor {
  let orders = List.empty<Types.Order>();

  include OrdersApi(orders);
};
