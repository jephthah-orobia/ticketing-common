import { OrderStatus } from '../enums/order-status';
import { Subjects } from '../enums/subjects';

export interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    id: string;
  };
}
