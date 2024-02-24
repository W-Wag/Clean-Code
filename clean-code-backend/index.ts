import { PostGresOrdersRepository } from "./repositories/postgres/postgres-order-repository";
import { SubmitOrder } from "./use-cases/submit-order";

const submitOrder = new SubmitOrder(new PostGresOrdersRepository())

