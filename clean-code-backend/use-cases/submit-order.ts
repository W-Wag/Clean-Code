import { Order } from "../domain/purchases/order"
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}
  
  async execute({ customerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, customerDocument)

    await this.ordersRepository.create(order)
  }
}