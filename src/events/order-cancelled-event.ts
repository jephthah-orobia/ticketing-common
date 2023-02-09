import { Subjects } from '../enums/subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
      __v: number;
    };
    __v: number;
  };
}
