import { Subjects } from '../enums/subjects';
import { OrderStatus } from '../enums/order-status';

export interface OrderUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    status?: OrderStatus;
    userId?: string;
    expiresAt?: string;
    ticket?: {
      id: string;
      __v: number;
    };
    __v: number;
  };
}
