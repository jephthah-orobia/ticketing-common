import { Subjects } from '../enums/subjects';
import { OrderStatus } from '../enums/order-status';

export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    id: string;
    status?: OrderStatus;
    userId?: string;
    expiresAt?: string;
    __v: number;
  };
}
