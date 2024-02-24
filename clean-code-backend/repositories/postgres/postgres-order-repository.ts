import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostGresOrdersRepository implements OrdersRepository {
  async create(order: Order): Promise<void> {
    // Salva o order no banco de dados
  }
}