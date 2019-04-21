import Axios from "axios";
import { authHeader } from "../utils";

export const OrdersService = {
  createOrder(formData) {
    return Axios.post("/orders", formData, { headers: authHeader() });
  },
  changeStatusOrder({ _id, status, lockMessage }) {
    const data = {};
    data.status = status;
    if (lockMessage) {
      data.lockMessage = lockMessage;
    }
    return Axios.put(`/orders/${_id}`, data, { headers: authHeader() });
  },
  getOrders(queries) {
    return Axios.get("/orders" + queries, { headers: authHeader() });
  },
  getOrderById(id) {
    return Axios.get("/orders/" + id, { headers: authHeader() });
  },
  deleteOrder(id) {
    return Axios.delete('/orders/'+id,  { headers: authHeader() });
  }
};
