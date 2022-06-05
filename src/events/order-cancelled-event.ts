import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancalled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}